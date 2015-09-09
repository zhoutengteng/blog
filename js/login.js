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

    var body= document.getElementById("container_body");
    var username = document.getElementById("username");
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    var report = document.getElementById("report");
    // body.style.textAlign = "center";
    // body.style.backgroundColor = "rgba(171, 215, 148, 0.84)";


}


function checkForm() {
    var username = document.getElementById("username");
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    var report = document.getElementById("report");
    Operator.addClass(report, "block");
    // 把用户输入的明文变为MD5:
    md5_pwd.value = hex_md5(input_pwd.value);
    //引入数据库　判断登陆者　数据库存md5和用户名
    var reportStr = "";
    var trueTrue = true;
    if (username.value !== "admin") {
        trueTrue = false;
        reportStr += "输入信息不正确，　未能成功登陆\n";
    }
    if (hex_md5(input_pwd.value) !== hex_md5("1992927zhou")) {
        reportStr += "密码输入错误\n";
        trueTrue = false;
    }

    if (trueTrue) {
        return true;
    }
    // report.setAttribute("Name","visible");
    // report.className = "visibilityhidden";
    // operator 来自自己写的类
    Operator.toggleClass(report, "visibilityhidden");
    report.innerHTML = reportStr;
    return false;
}

function loginForm() {
    if (checkForm()) {
        document.getElementById('login-form').submit();
        return true;
    } else {
        return false;
    }

}

window.onload = function() {
    adjust();
    document.getElementById("buttonSubmit").onclick = function() {
        loginForm();
    }
}
