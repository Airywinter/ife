var regionSelect = document.getElementById("region-radio-wrapper");
var goodsSelect = document.getElementById("product-radio-wrapper");
var div = document.getElementById("table-wrapper");

//监听CheckBox
regionSelect.addEventListener("click",monitor);
regionSelect.addEventListener("click",getData);//getData中包含newtable、merge等一系列动作
goodsSelect.addEventListener("click",monitor);
goodsSelect.addEventListener("click",getData);

//监听table是否有鼠标滑过
div.addEventListener("mouseover",mouseOver);
div.addEventListener("mouseout",function(){
    allline(getData());
});