function drawColumn(arr){
    var svgDom = document.getElementById("svg");
    var width = 600;
    var height = 300;
    svgDom.innerHTML = "";
//画坐标轴
    var lineX = document.createElementNS("http://www.w3.org/2000/svg","line");
    var lineY = document.createElementNS("http://www.w3.org/2000/svg","line");
    lineX.setAttribute("x1",0);
    lineX.setAttribute("y1",300);
    lineX.setAttribute("x2",600);
    lineX.setAttribute("y2",300);
    lineX.style = "stroke:black;stroke-width:2";
    lineY.setAttribute("x1",0);
    lineY.setAttribute("y1",300);
    lineY.setAttribute("x2",0);
    lineY.setAttribute("y2",0);
    lineY.style = "stroke:black;stroke-width:2";
    svgDom.appendChild(lineX);
    svgDom.appendChild(lineY);
//画柱形图
    var columnWidth = width / 12 / 5 * 3;
    var spaceWidth = width / 12 / 5 * 2;
    var max = 0;
    for(var i = 0;i < 12;i++){
        if(max < parseInt(arr[i])) max = parseInt(arr[i]);
    }
    var ratio = height/max;
    for(var i = 0;i < 12;i++){
        var x = width / 12 * i;
        var y = height - 2 - parseInt(arr[i]) * ratio;
        var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttribute("x",x);
        rect.setAttribute("y",y);
        rect.setAttribute("width","40");
        rect.setAttribute("height",parseInt(arr[i]) * ratio);
        rect.style.fill = "thistle";
        svgDom.appendChild(rect);
    }
}


