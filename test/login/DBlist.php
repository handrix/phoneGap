<?php
header("Content-Type:text/html;charset=utf-8");
$conn=mysqli_connect("localhost","root","123456","yp_test");
$username1=$_POST["username"];
$password1=$_POST["password"];
	
mysqli_query($conn,"set names utf8");
	function str_prefix($str, $char1=" "){
		$str = $char1.$str.$char1;
		return $str;
		}
$Search_u=str_prefix($username1, '"');
$Search_p=str_prefix($password1, '"');
$sql="select * from admin where username=$Search_u and password=$Search_p ";

$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_array($result);
if($row==NULL)
echo '失败';
else
echo '成功';
   
    mysqli_close($conn);  
	
?>