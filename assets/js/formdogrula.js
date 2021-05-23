function dogrula() {
    var ad = document.getElementById("name").value;
    var email = document.forms["contactForm"]["email"].value;  
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;



    if (ad == "") {
      alert("Ad boş bırakılamaz.");
      return false;
    }    
    if (phone == "") {
      alert("Numara boş bırakılamaz.");
      return false;
    }
    if (email == "") {
      alert("emailboş bırakılamaz");
      return false;
    }
    if (message == "") {
        alert("mesaj boş bırakılamaz.");
        return false;
    }
}