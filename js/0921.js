var text = document.querySelector('#text');
var list = document.querySelector('#list');

var data = [{
    name:"红米Note 4",
    detail:"Helio X20 十核旗舰处理器 / 全金属一体化机身 / 4100mAh 大电量",
    price:"899元 起",
    picture:"images/pictur1.jpg",
    new:"http://c1.mifile.cn/f/i/f/mishop/iic/xp.png"
}, {
    name:"红米Pro",
    detail:"硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 / 拉丝全金属机身",
    price:"1499元 起",
    picture:"images/pictur2.jpg",
    new:""
}, {
    name:"红米手机3S",
    detail:"指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池",
    price:"699元 起",
    picture:"images/pictur3.jpg",
    new:""
}, {
    name:"红米Note 3",
    detail:'【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏',
    price:"799元 起",
    picture:"images/pictur4.jpg",
    new:"http://c1.mifile.cn/f/i/f/mishop/iic/d100.png"
}, {
    name:"小米Max全网通",
    detail:"6.44\"大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃",
    price:"1299元 起",
    picture:"images/pictur5.jpg",
    new:"http://c1.mifile.cn/f/i/f/mishop/iic/st.png"
}, {
    name:"小米手机5 标准版 / 高配版",
    detail:"骁龙820处理器 / 4轴防抖相机 / 新增支持双开微信，能刷公交卡、银行卡",
    price:"1799元 起",
    picture:"http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg",
    new:""
}, {
    name:"小米手机5 标准版 / 高配版",
    detail:"骁龙820处理器 / 4轴防抖相机 / 新增支持双开微信，能刷公交卡、银行卡",
    price:"1799元 起",
    picture:"http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg",
    new:""
}, {
    name:"小米5 尊享版",
    detail:"骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身",
    price:"2499元 起",
    picture:"http://i8.mifile.cn/v1/a1/dc39e456-a433-4b59-c329-36f3ce00c1f1.jpg",
    new:""
}, {
    name:"红米手机3X",
    detail:"高通骁龙430 八核处理器 / 2GB内存 + 32GB存储 / 标配指纹识别 / 全网通 4G双卡双待 / 高光亮边金属机身",
    price:"799元 起",
    picture:"http://i8.mifile.cn/v1/a1/72ca0490-3a57-0f78-c5fe-624cf8cb6bb4.jpg",
    new:""
}, {
    name:"小米笔记本Air",
    detail:"轻薄全金属机身 / 11.5 小时超长续航，支持1C快充 / FHD 全贴合屏幕",
    price:"3499元 起",
    picture:"http://i8.mifile.cn/v1/a1/ef4b3763-3460-bcf3-9643-eb892bbadfb8.jpg",
    new:""
}, {
    name:"小米平板2",
    detail:"全金属机身 / 7.9英寸视网膜屏幕 / 800万像素相机 / 6190mAh大电池 / 支持5V/2A快充",
    price:"999元 起",
    picture:"http://i1.mifile.cn/v1/a1/T1RXWgBsCT1RXrhCrK.jpg",
    new:""
}
];

function initCtrl(data){
    var strHtml = '';
    data.forEach(function(item){
        strHtml += '<section>' + '<img src="'+item.picture+'" alt="">' + '</span>' + '<span class="container">' + '<p class="name">' + item.name + '</p>' + '<p class="detail">' + item.detail + '</p>' + '<p class="price">' + item.price + '</p>' + '</span>' + '</section>';
    });
    list.innerHTML = strHtml;
}

initCtrl(data);

text.onkeyup = function(e){
    var str = text.value;
    var result = data.filter(function(item){
        if (item.name.toLowerCase().indexOf(str.toLowerCase()) > -1)
        {
            return item;
        }
    });
    initCtrl(result);
}