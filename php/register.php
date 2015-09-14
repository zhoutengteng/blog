<?php


/*
$str = "123，456；321，567；987，qwe";
$arr = explode("；",$str);
foreach($arr as $u){
    $strarr = explode("，",$u);
    foreach($strarr as $newstr){
        echo $newstr."</br>";
    }
}
*/
//默认为串行查询


$name=$_GET["username"];
$pwd=$_GET["pwd"];
$email=$_GET["email"];
$career=$_GET['career'];


$con = mysql_connect('localhost', 'root', '1992927teng');
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }
mysql_select_db("blog", $con);

$sql1="INSERT INTO tbl_profile (name,email) VALUES('$name','$email')";
$result1 = mysql_query($sql1);


$sql2="SELECT * FROM tbl_profile WHERE name = '$name'";
$result2 = mysql_query($sql2);

$userid;
$username;
while($row = mysql_fetch_array($result2)) {
    $userid = $row['id'];
    $username = $row['name'];
    // echo $userid.$username."\n";
}

// echo "user_id＝".$userid;
// echo "username=".$username;
$username=strtolower($username);

$sql3="INSERT INTO tbl_authenticate (user_id, username, password) VALUES('$userid','$username','$pwd')";
$result3 = mysql_query($sql3);

// echo $sql3;

mysql_close($con);

?>
