function idAuth() {
  var inputText,inquire,odd=0,even=0,result,i,j,z,tcTotal=0;

  const alert = document.getElementById("alert");
  inputText = document.querySelector("#inputText");
  inquire = document.querySelector("#inquire");
  

  for(i=0; i<9; i+=2) {
    odd += Number(inputText.value[i]);
  }
  odd *= 7;
  for(j=1; j<8; j+=2) {
    even += Number(inputText.value[j]);
  } 
  result = Math.abs(odd-even);
  for(z=0; z<10; z++) {
    tcTotal += Number(inputText.value[z]);
  }
  
  if (inputText.value.length == 0) {
    alert.className = 'alert alert-danger';
    alert.textContent = "Lütfen 11 Haneli TC Kimlik Numarasını Giriniz."
  } else if (inputText.value.length !== 11){
    alert.className = 'alert alert-danger';
    alert.textContent = "Kimlik Numarası 11 Haneli Yazılmalıdır.";
  } else if (isNaN(inputText.value)){
    alert.className = 'alert alert-danger';
    alert.textContent = "Kimlik Numarası Sadece Rakamlardan Oluşmalıdır.";
  } else if (inputText.value[0] == 0){
    alert.className = 'alert alert-danger';
    alert.textContent = "Kimlik Numarasının İlk Hanesi '0' Olamaz.";  
  } else if (result % 10 != Number(inputText.value[9]) || tcTotal % 10 != Number(inputText.value[10])){
    alert.className = 'alert alert-danger';
    alert.textContent = "Girmiş Olduğunuz Kimlik Numarası Geçersizdir.";
  } else {
    alert.className = "alert alert-success";
    alert.textContent = "Girmiş Olduğunuz Kimlik Numarası Doğrudur.";
  }
  setTimeout(() => {
    alert.className = 'alert';
    alert.textContent = '';
  }, 4000); 
}; 