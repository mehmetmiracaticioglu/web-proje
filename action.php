<?php
    echo '<pre>';
   // print_r($_POST);
    echo "Adı SoyAdı :\t".$_POST['name'].'</br>';
    echo "email:\t".$_POST['email'].'</br>';
    echo "telefon numarası :\t".$_POST['phone'].'</br>';
    echo "mesajı:\t".$_POST['message'].'</br></br>';
    echo "10 saniye sonra Anasayfaya yönlendirileceksiniz";
    header("Refresh:10 ; url=index.html");
?> 