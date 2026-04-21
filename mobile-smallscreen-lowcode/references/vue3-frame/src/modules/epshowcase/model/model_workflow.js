import { reactive, ref } from 'vue';
import { action2restAxios, getRightUrl, request, uuid } from '@epoint-fe/utils';
import { useTreeDataSource } from './hooks/use-tree-data-source';
import { defineDataModel } from './utils/model';
// TODO: 添加规则校验方法 transformRuleData

export const model = defineDataModel(() => {
    const frameuser = ref({
        userextendinfo: {}
    });

    const initUserGuid = ref('');
    const imageList = ref([]); // TODO: 图片上传
    const outree = ref({});
    const uploadUrl = ref('');
    const changeMap = reactive({
        email: '',
        fax: '',
        telephoneOffice: '',
        telephoneHome: '',
        mobile: '',
        postalAddress: '',
        idCard: '',
        qq: '',
        mobile1: '',
        officeTel: ''
    });
    // 给 initSecurityConfig 请求的 securityConfigParams 参数
    const securityConfigParams = {
        apiUrl: 'rest/frameuserlist/addUser',
        processguid: '',
        processversioninstanceguid: '',
        workitemguid: ''
    };
    const initData = async ({ userGuid, pviGuid, isCopy }) => {
        outree.value = useTreeDataSource('/frameuserlist/getTreeModel', {});

        // 编辑太
        if (pviGuid || userGuid) {
            let frameUserData = {};

            if (isCopy) {
                frameUserData = await getUserByCopy(userGuid);
            } else {
                if (pviGuid) {
                    frameUserData = await getUserByWorkFlow(pviGuid);
                } else if (userGuid) {
                    frameUserData = await getUserByUserGuid(userGuid);
                }
            }

            frameuser.value = frameUserData || {};
            // 覆盖值
            if (frameuser.value.userguid) {
                initUserGuid.value = frameuser.value.userguid;
            }
            //存一份脱敏返回的原始数据，这些字段只有在改变了原值的情况才校验
            changeMap.email = frameUserData.email;
            changeMap.fax = frameUserData.fax;
            changeMap.telephoneOffice = frameUserData.telephoneOffice;
            changeMap.telephoneHome = frameUserData.telephoneHome;
            changeMap.mobile = frameUserData.mobile;
            changeMap.postalAddress = frameUserData.postalAddress;
            changeMap.identityCardNum = frameUserData.identityCardNum;
            changeMap.qqnumber = frameUserData.qqnumber;
            changeMap.shortmobile = frameUserData.userextendinfo.shortmobile;
            changeMap.officeTel = frameUserData.officeTel;
        }
        // 新增态
        else {
            initUserGuid.value = uuid();
            frameuser.value = { userextendinfo: {} };
        }

        // 初始化用户头像地址
        initUserPic(initUserGuid.value);

        uploadUrl.value = getRightUrl(`rest/frameuserlist/getFileUploadModel?userguid=${initUserGuid.value}`);
    };

    // 获得工作流用户信息
    const getUserByCopy = async (userGuid) => {
        return await request({
            url: '/frameuserlist/copyFrameUser',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                params: {
                    conditions: [
                        {
                            path: 'userguid',
                            type: 'eq',
                            value: userGuid
                        }
                    ]
                }
            }
        });
    };
    // 获得工作流用户信息
    const getUserByUserGuid = async (userGuid) => {
        return await request({
            url: '/frameuserlist/getFrameUser',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                params: {
                    conditions: [
                        {
                            path: 'userguid',
                            type: 'eq',
                            value: userGuid
                        }
                    ]
                }
            }
        });
    };
    // 获得工作流用户信息
    const getUserByWorkFlow = async (pviGuid) => {
        return await action2restAxios({
            url: `/frameuserlist/getFrameUser`,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                params: {
                    workflow: {
                        processversioninstanceguid: pviGuid
                    }
                }
            }
        });
    };
    const initUserPic = async (userGuid) => {
        imageList.value = await request({
            url: `/frameuserlist/getFileUploadModel?userguid=${userGuid}`
        }).then((response) => {
            return response.data;
        });
    };

    const updateFrameUser = ({ userGuid }) => {
        const clearedFrameUser = reactive({
            userextendinfo: {}
        });

        for (const key in frameuser.value) {
            const value = frameuser.value[key];

            if (
                frameuser.value.hasOwnProperty(key) &&
                (!changeMap.hasOwnProperty(key) ||
                    (changeMap.hasOwnProperty(key) && changeMap[key] !== clearedFrameUser[key]))
            ) {
                clearedFrameUser[key] = value;
                console.log(`${key}: ${value}`);
            }
            if (
                frameuser.value.userextendinfo.hasOwnProperty(key) &&
                (!changeMap.hasOwnProperty(key) ||
                    (changeMap.hasOwnProperty(key) && changeMap[key] !== clearedFrameUser.userextendinfo[key]))
            ) {
                clearedFrameUser.userextendinfo[key] = value;
                console.log(`${key}: ${value}`);
            }
        }

        return request({
            url: `/frameuserlist/updateUser?userGuid=${userGuid}`,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                entities: [clearedFrameUser],
                customData: imageList.value
            }
        });
    };
    const copyFrameUser = ({ userGuid }) => {
        return request({
            url: `/frameusercreateaction/addFrameUser?userGuid=${userGuid}`,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                entities: [frameuser.value]
            }
        });
    };
    const addFrameUser = () => {
        return request({
            url: '/frameuserlist/addUser',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                entities: [frameuser.value],
                customParams: {
                    userguid: initUserGuid.value
                }
            }
        });
    };

    return {
        frameuser,
        initUserGuid,
        imageList,
        outree,
        uploadUrl,
        securityConfigParams,
        // rules,
        initData,
        updateFrameUser,
        copyFrameUser,
        addFrameUser,
        changeMap
    };
});
