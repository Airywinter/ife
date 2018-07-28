//封装监听事件函数
var str = [];
for(let i = 0; i < 9;i++){
    str[i] = location.hash[i];
}
function monitor(){
    //监听全选box
        target = event.target;
        id = target.id;
        parent = target.parentNode;
        var allN = 0;
        for(var i = 1;i < 4;i++){
            if(parent.children[i].checked == true) allN++;
        }
        if(id == "all"){
            if(allN == 3) target.checked = true;
            else {
            for(var i = 1;i < 4;i++){
                parent.children[i].checked = true;
            }
        }
    }
        else {
        if(allN == 3) parent.children[0].checked = true;
        else if(allN == 2) parent.children[0].checked = false;
    //监听是不是没有被选中的项了
        else if(allN == 0) target.checked = true;
    }  
    
    for(let i = 0;i < 4;i++){
        if(regionSelect.children[i].checked == true){
            str[i+1] = 1;
        }
        else str[i+1] = 0;
    }
    for(let i = 0;i < 4;i++){
        if(goodsSelect.children[i].checked == true){
            str[i+5] = 1;
        }
        else str[i+5] = 0;
    }
    location.hash = str.join("");
    changeHash();
}

function changeHash(){
    for(let i = 2;i < 5;i++){
        if(location.hash[i] == 1) regionSelect.children[i-1].checked = true;
    }
    for(let i = 6;i < 9;i++){
        if(location.hash[i] == 1) goodsSelect.children[i-5].checked = true;
    }
    if(location.hash[1] == 1) regionSelect.children[0].checked = true;
    if(location.hash[5] == 1) goodsSelect.children[0].checked = true;
    newTable();//重新画表格
}