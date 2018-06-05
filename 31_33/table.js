//渲染新表格
function newTable(arr,regionIndex,goodsIndex){
    //在div下面创建table
        var table = document.createElement("table");
        div.appendChild(table);
    //输出表头
        var tr1 = document.createElement("tr");
        table.appendChild(tr1);
        var th1 = document.createElement("th");
        var th2 = document.createElement("th");
        if(regionIndex == 1 && goodsIndex > 1){
            th1.innerHTML = "地区";
            th2.innerHTML = "商品";
        }
        else{
            th1.innerHTML = "商品";
            th2.innerHTML = "地区";
        }
        tr1.appendChild(th1);
        tr1.appendChild(th2);
        for(var i = 1; i < 13;i++){
            var th = document.createElement("th");
            th.innerHTML = i + "月";
            tr1.appendChild(th);
        }
    //输出数据
        var x = regionIndex * goodsIndex;
        var w = 0;//单独为第一列计数
        for(var i = 0;i < arr.length;i++){
            var tr2 = document.createElement("tr");
            table.appendChild(tr2);
            if(x % 2 == 0 && w % 2 == 0){
                var th3 = document.createElement("th");
                th3.rowSpan = "2";
                if(regionIndex == 1 && goodsIndex > 1) th3.innerHTML = arr[i].region;
                else th3.innerHTML = arr[i].product;
                tr2.appendChild(th3);
            }
            else if(x % 3 == 0 && x % 2 != 0 && w % 3 == 0){
                var th3 = document.createElement("th");
                th3.rowSpan = "3";
                if(regionIndex == 1 && goodsIndex > 1) th3.innerHTML = arr[i].region;
                else th3.innerHTML = arr[i].product;
                tr2.appendChild(th3);
            }
            else if(x == 1){
                var th3 = document.createElement("th");
                if(regionIndex == 1 && goodsIndex > 1) th3.innerHTML = arr[i].region;
                else th3.innerHTML = arr[i].product;
                tr2.appendChild(th3);
            }
            w++;
            var th4 = document.createElement("th");
            if(regionIndex == 1 && goodsIndex > 1) th4.innerHTML = arr[i].product;
            else th4.innerHTML = arr[i].region;
            tr2.appendChild(th4);
            for(var j = 0;j < 12;j++){
                var th = document.createElement("th");
                th.innerHTML = arr[i].sale[j];
                tr2.appendChild(th);
            }
        }
        
    }