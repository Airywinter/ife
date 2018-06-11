function drawline(arr,color){
    var canvas = document.getElementById("mycanvas");
    var width = canvas.width;
    var height = canvas.height;
    if(canvas.getContext) var ctx = canvas.getContext("2d");
    else console.log(no);
    ctx.moveTo(0,0);
    ctx.lineTo(0,height);
    ctx.stroke();
    ctx.lineTo(width,height);
    ctx.stroke();
    var spaceWidth = (width - 10)/12;
    var max = 710;
    var ratio = (height - 10)/max;
    for(var i = 0;i < 12;i++){
        var x = parseInt(spaceWidth * (i + 1));
        var y = parseInt(height - parseInt(arr[i]) * ratio);
        ctx.beginPath();
        ctx.moveTo(x,y);
        if(i != 0){
            ctx.lineTo(spaceWidth * i,height - parseInt(arr[i - 1]) * ratio);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x,y,5,0 * Math.PI,2 * Math.PI);
        ctx.fill();
    }
}
        