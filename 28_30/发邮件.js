
            var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    //加上键盘，增加一个变量，用于存储当前选中的提示Li的序号
            var nowSelectTipIndex = 0;
    /*inputDOM的输入监听*/
            var input = document.getElementById("email-input");
            input.focus();
            var ul = document.getElementById("email-sug-wrapper");
            input.addEventListener("keyup",keyup);
            function keyup(){
                resetSelected();
                if(key() && nowSelectTipIndex == 0) return;
                var inputText = getInput();
                var arr = createSelection(inputText);
                creatli(arr);
                control();
                mouse();
                click();
                }
    /*获取用户输入*/
            function getInput(){
                var str = input.value;
                return str.trim();
            }
    /*生成提示框中的提示内容*/
            function createSelection(text){
                text = encode(text);//转义
                var arr = [];
                var n = text.indexOf("@");
                var match = "0";
                if(n != -1) {
                    match = text.slice(n+1);
                    text = text.slice(0,n);
                }
                var j = 0;//可以为arr匹配时单独计数
        //判断是否能匹配，能匹配则只选取可匹配的项生成li
                for(var i = 0; i < postfixList.length ; i++){
                    if(match != "" && postfixList[i].indexOf(match) == 0){
                        var temp = text + "@" + postfixList[i];
                        arr[j] = temp;
                        j++;
                    }
                }
        //j==0时无可匹配项，生成所有li
                    if(j == 0){
                        for(var i = 0; i < postfixList.length ; i++){
                            var temp = text + "@" + postfixList[i];
                            arr[i] = temp;
                        }
                    }
                return arr;
            }
    /*将提示内容添加到email-sug-wrapper中*/
            function creatli(arr){
                ul.innerHTML = "";
                for(var i = 0;i < arr.length;i++){
                    var li = document.createElement("li");
                    li.innerHTML = arr[i];
                    li.id = "li" + i;
                    ul.appendChild(li);
                    li.style.cssText = "list-style-type:none;width:150px;";
                    li.style.border = "1px,solid,black";
                    }
        //加入键盘，新增：将第nowSelectTipIndex个Li的样式设置为被选样式
                var li = document.getElementsByTagName("li");
                li[nowSelectTipIndex].className = "keyli";
                }
    /*控制email-sug-wrapper的显示/隐藏状态*/
            function control(){
                var inputText = getInput();
                if(inputText == "") ul.style.display = "none";
                else ul.style.display = "block";
            }
    //li元素事件监听
            function mouse(){
                ul.onmousemove = function(){
        //清除上一次的CSS效果
                    for(var i = 0;i < 5;i++){
                        var li = this.getElementsByTagName("li");
                        if(li[i].className = "newli") li[i].className = "";
                    }
                    switch(event.target.id){
                        case "li0":case "li1":case "li2":case "li3":case "li4":
                        event.target.className = "newli";
                    }
                }
            }
            function click(){
                ul.onclick = function(){
                    switch(event.target.id){
                        case "li0":case "li1":case "li2":case "li3":case "li4":
                        var temp = encode(event.target.innerHTML);//转义
                        input.value = temp;
                        ul.style.display = "none";
                        input.focus();
                    }
                }
            }
    //用浏览器内部转换器实现html解码
            htmlEncode:function encode(html){
                var temp = document.createElement ("div");
                (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
                var output = temp.innerHTML;
                temp = null;
                return output;
            }  
    //键盘相关函数
        //重置选中状态
            function resetSelected(){
                keyCode = event.keyCode;
                if(keyCode != 38 && keyCode != 40 && keyCode != 13)
                nowSelectTipIndex = 0;
            }
        //监听特殊三个按键
            function key(){
                var keyCode = event.keyCode;
                var li = document.getElementsByTagName("li");
                if(keyCode == 38){
                    if(nowSelectTipIndex != 0) nowSelectTipIndex--;
                    else nowSelectTipIndex = li.length-1;
                }
                if(keyCode == 40){
                    console.log(nowSelectTipIndex)
                    if(nowSelectTipIndex == li.length-1) nowSelectTipIndex = 0;
                    else nowSelectTipIndex++;
                    console.log(nowSelectTipIndex)
                }
                if(keyCode == 13){
                    input.value = li[nowSelectTipIndex].innerHTML;
                    ul.style.display = "none";
                    return 1;
                }
                if(keyCode == 27){
                    input.select();
                    return 1;
                }
            }
    
       
