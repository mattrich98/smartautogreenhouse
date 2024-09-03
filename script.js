let sunStrength = 0; //as the greenhouse adjusts to sunlight throughout the day, maybe I'll do something with math.random to simulate this.
let temperatureStatus = 0; //effected in conjunction with the sunStrength variable
let windowStatus = false;
let heaterStatus = false;
let sprinklerStatus = false;
let lightStatus = false;
let sunTimer = 0;

function hotSim(){
  hotDayStart()
  timerIntervals()
  //console.log("testingworks");
}


function hotDayStart(){
  //console.log("testing hotdayStart");
  
}

function timerIntervals() { 
  sunTimer++; //gametime gets incremented +1 every second
  console.log(sunTimer); //checks gameTime is incrementing (JavaScript is a single-threaded language)

  

  if (sunTimer <= 24) {
    // Dont Touch Below vvvvvvvvvvvvvvvvv
    setTimeout(timerIntervals, 750);

    document.getElementById("timeNumber").innerHTML = sunTimer;
    document.getElementById("inputButton").innerHTML = "Simulation Started";

    //stops play button press
    document.getElementById("inputButton").onclick = sunTimer; //so you can only click the play button once to start game


    if (sunStrength < 35 ) {
      sunStrength += 3;
      document.getElementById("sunPercent").innerHTML = sunStrength;
      document.getElementById("sunPercent").style.height = sunStrength + sunStrength + sunStrength + sunStrength + sunStrength + "px";
    } else {
      sunStrength = 35;
      document.getElementById("sunPercent").innerHTML = sunStrength;
      //document.getElementById("sunPercent").style.height = "35px";
    }

    if (sunTimer >= 19) {
      sunStrength -= 6;
      document.getElementById("sunPercent").innerHTML = sunStrength;
      document.getElementById("sunPercent").style.height = sunStrength - sunStrength - sunStrength - sunStrength - sunStrength + "px";
    } 
/*

    if(sunStrength < 35){
      document.getElementById("sunPercent").innerHTML + 5;
    }
    else if (sunStrength > 35){
      document.getElementById("sunPercent").innerHTML == 35;
      
    }
*/





    /*if (sunTimer == 1) {

      document.getElementById("sunPercent").innerHTML = sunStrength;
      document.getElementById("sunPercent").style.height = "20px";
      document.getElementById("sunPercent").innerHTML = "1";
      sunStrength++
      console.log(sunStrength);
      console.log("this is a test")
    }
    */





    //stops setTimeout loop
  } else if (sunTimer >= 24) { //if the timer reaches 20 seconds
    
    document.getElementById("inputButton").innerHTML = "Simulation Ended"; //changes the start button inner letters
    alert("Simulation End"); //method alert pop up in browser for final score
    location.reload();
    //console.log("Game Over"); 
  }
  
}


























// Window ------------------------------ //
function windowON() {
  windowStatus = !windowStatus;
  console.log(windowStatus);

  if(windowStatus == true){
    document.getElementById("windowButton").style.backgroundColor = "green";
  }
  else{
    document.getElementById("windowButton").style.backgroundColor = "white";
  }
}

// Heater ------------------------------ //
function heaterON() {
  heaterStatus = !heaterStatus;
  console.log(heaterStatus);

  if(heaterStatus == true){
    document.getElementById("heaterButton").style.backgroundColor = "green";
  }
  else{
    document.getElementById("heaterButton").style.backgroundColor = "white";
  }
}

// Sprinkler ------------------------------ //
function sprinklerON() {
  sprinklerStatus = !sprinklerStatus;
  console.log(sprinklerStatus);

  if(sprinklerStatus == true){
    document.getElementById("sprinklerButton").style.backgroundColor = "green";
  }
  else{
    document.getElementById("sprinklerButton").style.backgroundColor = "white";
  }
}

// Light ------------------------------ //
function lightON() {
 lightStatus = !lightStatus;
  console.log(lightStatus);

  if(lightStatus == true){
    document.getElementById("lightButton").style.backgroundColor = "green";
  }
  else{
    document.getElementById("lightButton").style.backgroundColor = "white";
  }
}












/* Temperature ------------------------------ 
function tempUP() {
  temperatureStatus += 5;
  console.log(temperatureStatus);
}

function tempDOWN() {
  temperatureStatus -= 5;
  console.log(temperatureStatus);
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
