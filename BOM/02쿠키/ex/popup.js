
function createCookie(name, value) {
  
    var date = new Date();
    date.setDate(date.getDate() + 1);

    var cookie = "";
    cookie += name + "=" + value + ";";    
    cookie += "expires=" + date.toUTCString() + ";";
    cookie += "path=/BOM/02%EC%BF%A0%ED%82%A4";

    document.cookie = cookie;
}

function getCookie(name){

    var pattern = new RegExp('(?<='+name+'=)[a-zA-Z0-9%/]+(?! )');
    
    console.log("매칭할 값:", document.cookie);
    console.log("검색할 값:", name);
    console.log("매칭결과: ", document.cookie.match(pattern));
   


    var cookieList = document.cookie.split("; ");    

    for(var i = 0 ; i < cookieList.length ; i++){
        var temp = cookieList[i].trim().split("=");
        var key = temp[0];
        var value = temp[1];
      
        if(key === name){
            return value;
        }
    }
    return 0;
}