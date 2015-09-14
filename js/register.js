var adjust = function() {
    var login_head = document.getElementById("login_head");
    var parent = login_head.parentNode;
    // alert(document.getElementById("container").offsetWidth);
    // alert(window.innerHeight);
    var parentWidth = parent.offsetWidth;
    var parentHeight = parent.offsetHeight;
    var label1 = login_head.children[0];
    var label2 = login_head.children[1];
    var label3 = login_head.children[2];
    label1.style.fontSize = "40px";
    label1.style.fontStyle = "italic";
    label1.style.height = "100%";
    label1.style.marginLeft = parentWidth / 15 + "px";
    label1.style.lineHeight = parentHeight + "px";
    label2.style.fontSize = "30px";
    label2.style.fontStyle = "italic";
    label2.style.height = "100%";
    label2.style.marginLeft = 10 + "px";
    label2.style.lineHeight = parentHeight + "px";
    label3.style.fontSize = "25px";
    label3.style.fontStyle = "italic";
    label3.style.height = "100%";
    label3.style.marginLeft = 10 + "px";
    label3.style.lineHeight = parentHeight + "px";

    var body = document.getElementById("container_body");
    var username = document.getElementById("username");
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    var report = document.getElementById("report");
    // body.style.textAlign = "center";
    // body.style.backgroundColor = "rgba(171, 215, 148, 0.84)";


}


function submitForm() {
    var username = document.getElementById("username");
    var input_pwd = document.getElementById('input-password');
    var input_password_again = document.getElementById("input_password_again");
    var md5_pwd = document.getElementById('md5-password');
    var report = document.getElementById("report");
    var email = document.getElementById("email");
    var career = document.getElementById('career');
    var form = document.getElementById('register-form');
    Operator.addClass(report, "block");
    // 把用户输入的明文变为MD5:
    md5_pwd.value = hex_md5(input_pwd.value);
    //引入数据库　判断登陆者　数据库存md5和用户名
    var reportStr = "";
    var trueTrue = true;
    var queryStr = "?username="+username.value+"&" +
                   "pwd=" + md5_pwd.value + "&" +
                   "email=" + email.value + "&" +
                   "career=" + career.value + "&";

    saveUser("/blog/php/register.php", queryStr);
　　//所有代码转义　防sql注入

　　//检查用户名格式　

　　//检查密码格式

   //检查邮箱格式

   //检查用户名是否已被注册

   //检查邮箱是否被注册

   //检查两次密码是否输入正确

   //存入用户名　md5后的密码　邮箱　职业　　

   //to-do 　　邮箱激活是否

    // if (username.value !== "admin") {
    //     trueTrue = false;
    //     reportStr += "输入信息不正确，　未能成功登陆\n";
    // }
    // if (hex_md5(input_pwd.value) !== hex_md5("1992927zhou")) {
    //     reportStr += "密码输入错误\n";
    //     trueTrue = false;
    // }
    //
     if (trueTrue) {
         Operator.removeClass(report, "visibilityvisible");
         Operator.addClass(report, "visibilityhidden");
         document.getElementById("register-form").submit();
         return true;
     }
    // report.setAttribute("Name","visible");
    // report.className = "visibilityhidden";
    // operator 来自自己写的类
    // Operator.removeClass(report, "visibilityhidden");
    // Operator.addClass(report, "visibilityvisible");
    // report.innerHTML = reportStr;
    return false;


}




function saveUser(filepath,str) {
    var xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        alert("Browser does not support HTTP Request")
        return
    }
    var url = filepath;
    url = url + "" + str;
    url = url + "&ssid=" + Math.random();
//    alert(url);
    xmlHttp.onreadystatechange = stateChanged(xmlHttp)
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function stateChanged(xmlHttp) {
    return function() {
        if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
            // alert(xmlHttp.responseText);
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
    adjust();
    document.getElementById('buttonSubmit').onclick = submitForm;

}
