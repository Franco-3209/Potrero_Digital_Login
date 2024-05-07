<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST["user"];
    $password = $_POST["pass"];

    $ckuser = "admin";
    $ckpass = "1234";

    if ($user == $ckuser && $password == $ckpass){
        header ("location:https://franco-3209.github.io/Potrero_Digital_Proyecto/index.html");
    } else {
        header ("location:error.html");
    }
}
?>