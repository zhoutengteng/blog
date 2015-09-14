<?php

$name=$_GET["name"];
$pwd=$_GET['pwd'];
// echo $name.$pwd;

$con = mysql_connect('localhost', 'root', '1992927teng');
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }

mysql_select_db("blog", $con);


$sql="SELECT * FROM tbl_profile WHERE name = '$name'";

$result = mysql_query($sql);

$sql1="SELECT * FROM tbl_authenticate, tbl_profile WHERE tbl_authenticate.user_id = tbl_profile.id AND ".
       "tbl_profile.name = '$name' AND tbl_authenticate.password = '$pwd'      ";
// var_dump(mysql_fetch_array($result));
$result1 = mysql_query($sql1);
    // echo $sql1;

echo "{";
if (mysql_fetch_array($result)) {
    echo "\"name\":true, \"username\":\"$name\",";
}

if (mysql_fetch_array($result1)) {
    echo "\"password\":true,";
}

echo "}";
// echo count(mysql_fetch_array($result));
// echo count(mysql_fetch_array($result));
// echo mysql_fetch_array($result)[0];
// print_r(mysql_fetch_array($result));
/*
echo "<p>".$_GET["zhou"]."</p>";


echo "<table border='1'>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>";

while($row = mysql_fetch_array($result))
 {
 echo "<tr>";
 echo "<td>" . $row['id'] . "</td>";
 echo "<td>" . $row['name'] . "</td>";
 echo "</tr>";
 }
echo "</table>";
*/
mysql_close($con);
?>
