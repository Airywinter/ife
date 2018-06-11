function allline(arr){
    var colorArr = ["#ea00c5", "#00E8FF", "#9dcc32", "#2d2bff", "#00ee14", "#dd530d", "#ff0300", "#86751e", "#101fda"];
    for(var i = 0;i < arr.length;i++){
        drawline(arr[i].sale,colorArr[i]);
    }
}