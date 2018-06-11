//删除上一个表格
function toZero(){
    div.innerHTML = "";
}
//根据选择获取数据
function getData(){
    var arr = [];
    var arr1 = [];
    var region = [];
    var goods = [];
    var arrIndex = 0;
    var arrIndex1 = 0;
    var regionIndex = 0;
    var goodsIndex = 0;
    for(var i = 1;i < 4;i++){
        if(regionSelect.children[i].checked == true){
            region[regionIndex] = regionSelect.children[i].nextSibling.nodeValue.replace(/[\r\n]/g,"").replace(/ /g,"");
            regionIndex++;
        }
    }
    for(var i = 1;i < 4;i++){
        if(goodsSelect.children[i].checked == true){
            goods[goodsIndex] = goodsSelect.children[i].nextSibling.nodeValue.replace(/[\r\n]/g,"").replace(/ /g,"");
            goodsIndex++;
        }
    }
    if(region.length == 0 || goods.length == 0) return;
        for(var i = 0;i < 9;i++){
            if(region.indexOf(sourceData[i].region) != -1){
                arr[arrIndex] = sourceData[i];
                arrIndex++;
            }
        }
        for(var i = 0;i < arr.length;i++){
            if(goods.indexOf(arr[i].product) != -1){
                arr1[arrIndex1] = arr[i];
                arrIndex1++;
            }
        }
    toZero();
//画表格、画图，不知道怎样把函数在MIS.js中引用......
    newTable(arr1);
    changeTd();
    merge(1);
    var canvas = document.getElementById("mycanvas");
    var height = canvas.height;
    canvas.height = height;
    allline(arr1);
    return arr1;
}


//数据
let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]