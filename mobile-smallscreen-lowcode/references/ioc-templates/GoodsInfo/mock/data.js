/**
 * GoodsInfo 商品信息组件 Mock 数据
 * 用于低码平台预览和开发调试
 */
export default {
    data: [
        {
            // 价格信息
            price: '398.00', // 当前价格
            originalPrice: '2300.55', // 原价
            priceUnit: '/个', // 价格单位
            // 销量信息
            salesCount: '999', // 累计销量
            // 商品标签
            tags: ['优惠'], // 标签数组，支持多个
            // 商品标题
            title: '潘婷无硅油洗发水洗发露净澈赋能洗头膏男女防断发',
            // 配送信息
            deliveryAddress: '苏州市张家港市杨舍镇粮食小区城西...',
            deliveryInfo: '包邮，从江苏南京发货',
            // 规格信息
            specText: '型号规格名称型号规格名称型号规格名称型号规格名称型号规格名称'
        }
    ]
};
