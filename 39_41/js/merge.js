function merge(n){
    var tab = document.getElementsByTagName("table")[0];
    for (let i = n; i < tab.rows.length - 1; i++) {
// 如果第i行和第i+1行内容相同则隐藏第i+1行，同时第i行的rowSpan+1
        if (tab.rows[n].cells[0].innerHTML === tab.rows[i + 1].cells[0].innerHTML) {
            tab.rows[i + 1].cells[0].style.display = "none";
            tab.rows[n].cells[0].rowSpan += 1;
        }
// 不相等的时候从第i+1行再次执行次函数
        else {
            merge(i + 1, 0)
        }
    }
}