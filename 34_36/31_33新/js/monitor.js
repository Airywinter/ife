//封装监听事件函数
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
}