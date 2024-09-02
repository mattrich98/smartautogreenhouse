let lightButtonStatus = 0;

  function lightFunctionUP() {
    lightButtonStatus += 5;
    console.log(lightButtonStatus);
  }

  function lightFunctionDOWN() {
    lightButtonStatus -= 5;
    console.log(lightButtonStatus);
  }






/*function lightFunctionUP() {
  setTimeout(lightFunctionUP, 750)
  for (let i = 0; i < 100; i++) {
    
    if (lightButtonStatus < 100) {
      lightButtonStatus++;
      console.log(lightButtonStatus);
    }
  }
  
}


function lightFunctionDOWN() {
  ;
  for (let i = 100; i >= 0; i--) {
    setTimeout(lightFunctionDOWN, 750000)
    if (lightButtonStatus > 0) {
      lightButtonStatus--;
      
      setTimeout(lightFunctionDOWN, 750000)
      
      console.log(lightButtonStatus);
    }
  }
}

/*


//Sensors
/*let plantGrowth = 0;
let temperature = 0;
let humidity = 0;
let soilWetness = 0;
let lightPower = 0;
let time = 1000;*/

//Activators/Adjustables

/*let window = true;
let fan = false;
let waterValve = false;
let heater = false;*/

/*
if(lightButtonStatus == 100){
    console.log("test");
    for (let i = 0; i >= 100; i--) { 
    console.log(i);
  }
}
}


function lightButtonLog(){
  console.log(lightButtonStatus);
}


 /*lightButtonStatus+= 5;
  console.log(lightButtonStatus);
}

function lightFunctionOFF(){
  lightButtonStatus-= 5;
  console.log(lightButtonStatus);

  if (lightButtonStatus == 0) {
    lightButtonStatus == 0;

  }
}
*/
