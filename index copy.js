function calculate(){
    var height= (document.getElementById("height").value)/100
    var wight=document.getElementById("wight").value
    
    var imc = wight / height ** 2;
    var text=""
    if (imc<18.5){
        text="Você está abaixo do peso ideal"
    }
    else if (imc<24.9) {
        text="Você está com peso ideal"
    }
    else if (imc<29.9){
        text="Você está com sobre peso"
    }
    else if(imc<39.9){
        text="Você está com obesidade"
    }
    else if(imc>39.9){
        text="Você está com obesidade mórbida"
    }
    
    document.getElementById("text-area").innerText=text
    
    console.log(height)
    console.log(wight)
}