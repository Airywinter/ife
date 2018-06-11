function changeTd(){
    var tab = document.getElementsByTagName("table")[0];
    var regionIndex = regionSelect.querySelectorAll("input[type=checkbox]:checked");
    var goodsIndex = goodsSelect.querySelectorAll("input[type=checkbox]:checked");
    if(regionIndex == 1 && goodsIndex > 1){
        console.log(regionIndex);
        for (var i = 0; i < tab.rows.length; i++) {
            var temp = tab.rows[i].cells[0].innerHTML;
            tab.rows[i].cells[0].innerHTML = tab.rows[i].cells[1].innerHTML;
            tab.rows[i].cells[1].innerHTML = temp;
        }
    }
}