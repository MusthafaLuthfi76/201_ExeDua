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

  var sourceValues = [];
  var sources = document.getElementsByName("source");
  for (var i = 0; i < sources.length; i++) {
    if (sources[i].checked) {
      sourceValues.push(sources[i].value);
    }
  }
  var sourceOther = document.querySelector("input[name='source_other']").value;
  if (sourceOther) {
    sourceValues.push("Lainnya: " + sourceOther);
  }

  var motivationValues = [];
  var motivations = document.getElementsByName("motivation");
  for (var i = 0; i < motivations.length; i++) {
    if (motivations[i].checked) {
      motivationValues.push(motivations[i].value);
    }
  }
  var motivationOther = document.querySelector("input[name='motivation_other']").value;
  if (motivationOther) {
    motivationValues.push("Lainnya: " + motivationOther);
  }

  var textAreaValue = document.getElementById("textareaField").value;

  var message = "Nama Lengkap: " + textFieldValue + "\n" +
                "Tanggal Lahir: " + dateFieldValue + "\n" +
                "Pekerjaan: " + selectFieldValue + "\n" +
                "Jenis Kelamin: " + radioValue + "\n" +
                "Bagaimana Anda mengetahui tentang tren makeup Asoka?: " + sourceValues.join(", ") + "\n" +
                "Apa yang memotivasi Anda untuk membeli produk makeup baru?: " + motivationValues.join(", ") + "\n" +
                "Pertanyaan/Masukan: " + textAreaValue;

  alert(message);
});
