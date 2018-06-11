function mouseOver(){
   var target = event.target;
   var arr = [];
   var tr = target.parentNode;
//如果选中的不是第一行
   if(tr.children[2].innerHTML == "1月") return;
   else {
       for(var i = 0;i < 12;i++){
           arr[i] = tr.children[i+2].innerHTML;
       }
   }
//画图表
drawColumn(arr);
var canvas = document.getElementById("mycanvas");
var height = canvas.height;
canvas.height = height;
drawline(arr);
}