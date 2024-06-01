document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    var textFieldValue = document.getElementById("textField").value;
    var dateFieldValue = document.getElementById("dateField").value;
    var selectFieldValue = document.getElementById("selectField").value;
    var radioOptions = document.getElementsByName("radioOptions");
    var radioValue;
    for (var i = 0; i < radioOptions.length; i++) {
      if (radioOptions[i].checked) {
        radioValue = radioOptions[i].value;
        break;
      }
    }
    var textAreaValue = document.getElementById("textareaField").value;
    var message = "Nama Lengkap: " + textFieldValue + "\nTanggal Lahir: " + dateFieldValue + "\nPekerjaan: " + selectFieldValue + "\nJenis Kelamin: " + radioValue + "\nSosmed : " + textAreaValue;
    alert(message);
  });