function titleHead() {

}

function container_body_middle_model_template() {
    var parent = document.getElementById('container_body_middle');
    var div = document.createElement('div');
    var p = document.createElement('p');
    var describe = document.createElement('p');
    var span = document.createElement('span');
    parent.appendChild(div);
    div.appendChild(p);
    div.appendChild(describe);
    div.appendChild(span);
    div.style.marginLeft = "20px";
    div.style.borderStyle = "solid";
    div.style.padding = "5px";
    div.style.marginTop = "10px";
    describe.style.marginTop = "5px";
    describe.style.marginBottom = "5px";
    describe.style.textIndent = "20px";
    span.style.textIndent = "20px";
    span.style.display = "block";

    p.innerHTML = "第一条微博";
    describe.innerHTML　 = 　"关于什么的内容";
    span.innerHTML = "--带有的分类";


}





function showUser(filepath,str) {
    var xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("Browser does not support HTTP Request")
        return
    }
    var url = filepath;
    url = url + "" + str
    url = url + "&sid=" + Math.random()
    xmlHttp.onreadystatechange = stateChanged(xmlHttp)
    xmlHttp.open("GET", url, true)
    xmlHttp.send(null)
}

function stateChanged(xmlHttp) {
    return function() {
        if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
            //alert(xmlHttp.responseText);
            // document.getElementById("txtHint").innerHTML = xmlHttp.responseText;
        }
    };
}

function GetXmlHttpObject() {
    var xmlHttp = null;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        //Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}


window.onload = function() {

    showUser("/blog/php/login.php", "?q=1&zhou=zhou");
        // alert(document.cookie);
    // // alert(document.cookie);
    // Operator.setCookie("name", "zhoutengteng");

    // document.getElementById("buttonSubmit").onclick
    document.getElementById("login").onclick = function() {
        window.location.href = 　"/blog/html/login.html";
    }
    document.getElementById("register").onclick = function () {
        window.location.href = "/blog/html/register.html";
    }

    // document.getElementById("container_body_middle");
    container_body_middle_model_template();
    container_body_middle_model_template();
    container_body_middle_model_template();
    container_body_middle_model_template();

};
