var inputText,inquire,resultFalse,resultTrue,odd=0,even=0,result,i,j,z,tcTotal=0;


inputText=document.querySelector("#inputText");
inquire=document.querySelector("#inquire");
resultFalse=document.querySelector("#resultFalse");
resultTrue=document.querySelector("#resultTrue");

inquire.addEventListener('click', function(){
  for(i=0;i<9;i+=2){
  odd+=Number (inputText.value[i]);
  }
  odd*=7;
  for(j=1;j<8;j+=2){
  even+=Number (inputText.value[j]);
  } 
  result=Math.abs(odd-even);
  for(z=0;z<10;z++){
  tcTotal+=Number (inputText.value[z]);
  }
  resultFalse.style.display="block";
  resultTrue.style.display="none";
  
  
  if(inputText.value==""){
    resultFalse.textContent="Lütfen 11 Haneli TC Kimlik Numarasını Giriniz."
  } else if(inputText.value.length !== 11){
    resultFalse.textContent="Kimlik Numarası 11 Haneli Yazılmalıdır.";
  } else if(isNaN(inputText.value)){
    resultFalse.textContent="Kimlik Numarası Sadece Rakamlardan Oluşmalıdır.";
  } else if(inputText.value[0]==0){
    resultFalse.textContent="Kimlik Numarasının İlk Hanesi '0' Olamaz.";  
  } else if(result%10 !=Number(inputText.value[9])){
    resultFalse.textContent="Girmiş Olduğunuz Kimlik Numarası Geçersizdir.";
  }else if(tcTotal%10 !=Number(inputText.value[10])){
    resultFalse.textContent="Girmiş Olduğunuz Kimlik Numarası Geçersizdir.";
  }else{
    resultFalse.style.display="none";
    resultTrue.style.display="block";
    resultTrue.textContent="Girmiş Olduğunuz Kimlik Numarası Doğrudur.";
  }
  
}); 