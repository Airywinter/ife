var regionSelect = document.getElementById("region-radio-wrapper");
var goodsSelect = document.getElementById("product-radio-wrapper");
var div = document.getElementById("table-wrapper");

//监听CheckBox
regionSelect.addEventListener("click",monitor);
regionSelect.addEventListener("click",newTable);//getData中包含newtable、merge等一系列动作
goodsSelect.addEventListener("click",monitor);
goodsSelect.addEventListener("click",newTable);
changeHash();//每次刷新时，按照location.hash的值重新选中选框、画表格

//监听table是否有鼠标滑过
div.onclick = function(){
    if(event.target.tagName == "TD") edit(event);
}
