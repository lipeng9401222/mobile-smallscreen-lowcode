export default {
    common(url, data = {}, needToken, isshowWaiting) {
        if (isshowWaiting === true || typeof isshowWaiting === 'undefined') {
            ejs.ui.showWaiting('请稍等');
        }

        let headers = {
            Accept: 'application/json;charset=UTF-8'
        };

        if (needToken && typeof needToken === 'string') {
            headers.Authorization = 'Bearer ' + needToken;
        }

        return Util.ajax({
            url: Util.mpVerifyManager.options.ssoUrl + 'rest/' + url,
            data: {
                params: JSON.stringify(data)
            },
            headers,
            isAutoProxy: needToken === true || typeof needToken === 'undefined'
        })
            .then((res) => {
                ejs.ui.closeWaiting();

                return new Promise((resolve, reject) => {
                    if (res.status.code === 0) {
                        reject(res);

                        return;
                    }

                    resolve(res.custom, res.status);
                });
            });
    }
};
