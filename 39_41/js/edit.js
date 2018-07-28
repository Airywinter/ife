
function edit(event){
    
    var dom = event.target;
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "编辑";
    editBtn.style.color = "gray";
    dom.appendChild(editBtn);
    
    editBtn.onclick = function(){
        dom.removeChild(editBtn);//方便下一步取innerHTML
        var oldValue = dom.innerHTML;
        dom.innerHTML = "";
        var inputHtml = document.createElement("input");
        inputHtml.setAttribute("type","text");
        inputHtml.setAttribute("value",oldValue);
        inputHtml.style.height="100%";
        inputHtml.style.width ="30px";
        dom.appendChild(inputHtml);
        inputHtml.focus();//使光标在输入框内
        inputHtml.select();//默认选择内容
        var saveBtn = document.createElement("button");
        saveBtn.innerHTML = "保存";
        saveBtn.style.color = "gray";
        dom.appendChild(saveBtn);
        var cancelBtn = document.createElement("button");
        cancelBtn.innerHTML = "取消";
        cancelBtn.style.color = "gray";
        dom.appendChild(cancelBtn);
        cancelBtn.onclick = function(){//点击取消时恢复原来数值
            dom.removeChild(saveBtn);
            dom.removeChild(cancelBtn);
            dom.innerHTML = oldValue;
        }
        saveBtn.onclick = function(){
            var newValue = inputHtml.value;
            if(isNaN(newValue) || newValue == ""){
                alert("请输入数字！");
                return;
            }
            dom.innerHTML = newValue;
            saveData(dom);
        }               
    }   
}

//存储数据的函数；
function saveData(dom){		
    //利用localStorage存储数据的函数,初始化savaData的值；
    var saveData = sourceData;
    //获取更改后的行的销售数据；
    var updateSaleArr = [];
    var tr = dom.parentNode.childNodes;//数组；
    for (var i = 2; i < tr.length; i++) {
        updateSaleArr.push(tr[i].innerHTML);
    }
    for (var i = 0; i < saveData.length; i++) {
        if ((saveData[i].region == tr[0].innerHTML && saveData[i].product == tr[1].innerHTML) || 
            (saveData[i].region == tr[1].innerHTML && saveData[i].product == tr[0].innerHTML)) {
            sourceData[i].sale = updateSaleArr;
        }
    }
    //localStorage只能存储字符串信息，运用JSON进行转化存储；
    localStorage.setItem('Data',JSON.stringify(saveData));			
}

