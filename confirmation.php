<?php
    include("kullanici.php");
    print_r($_POST);
    echo"<pre>";
    if (($_POST["Username"] == $user) and ($_POST["Password"] == $pass))
        {    
            $_SESSION["login"] = "true";
            $_SESSION["Username"] = $user;
            $_SESSION["Password"] = $pass;               
            echo(" HOŞGELDİNİZ");
            header("Location: index2.html");
        }
    else{
        print_r($_POST);
        echo "Hatalı Giriş.<br>";
        echo "Lütfen Yeniden Deneyiniz";
        echo "Giriş sayfasına yönlendiriliyorsunuz. lütfen bekleyiniz";
        header("Refresh:10 ; url=login.html");
}
?> 