function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if(pinString.length == 4){
        return pin ;
    }
    else{
        return getPin()
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('dispaly-pin').value = pin;

}


document.getElementById('key-pad').addEventListener('click',function(event){
  const number = event.target.innerText;
//   console.log(number);
  const calculatorInput = document.getElementById('typed-numbers');
  if(isNaN(number)){
     if(number == "C"){
    calculatorInput.value = '';}
  }
  else{
    const calculatorPriviousNumber = calculatorInput.value ;
    const newNumber = calculatorPriviousNumber + number;
    calculatorInput.value = newNumber ;

  }
})

function verifyPin(){
  const pin = document.getElementById('dispaly-pin').value;
  const typePin = document.getElementById('typed-numbers').value;
  const notifySuccess = document.getElementById('notify-success');
  const notifyFaild = document.getElementById('notify-faild');

  if(pin == typePin){
    notifySuccess.style.display = 'block';
    notifyFaild.style.display = 'none';

  }
  else{
    notifyFaild.style.display = 'block';
    notifySuccess.style.display = 'none';

  }


}