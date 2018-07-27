function newTable(arr){
//创建table
    var table = document.createElement("table");
    border(table);
    table.style.borderCollapse = "collapse";
    div.appendChild(table);
//写第一行
    var tr1 = document.createElement("tr");
    table.appendChild(tr1);
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    th1.innerHTML = "商品";
    th2.innerHTML = "地区";
    border(th1);
    border(th2);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    for(var i = 1; i < 13;i++){
        var th = document.createElement("th");
        th.innerHTML = i + "月";
        tr1.appendChild(th);
        border(th);
    }
//输出数据
//输出前两列
    for(var i = 0;i < arr.length;i++){
        var tr2 = document.createElement("tr");
        table.appendChild(tr2);
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        td3.innerHTML = arr[i].product;
        td4.innerHTML = arr[i].region;
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        border(td3);
        border(td4);
//输出后面几列
        for(var j = 0;j < 12;j++){
            var td = document.createElement("td");
            td.innerHTML = arr[i].sale[j];
            tr2.appendChild(td);
            border(td);
        }
    }
}

function border(element){
    element.style.border = "1px solid gray";
}