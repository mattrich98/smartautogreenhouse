//Sensors
let plantGrowth = 0;
let temperature = 0;
let humidity = 0;
let soilWetness = 0;
let lightPower = 0;
let time = 1000;

//Activators/Adjustables
let lightSwitch = true;
let window = true;
let fan = false;
let waterValve = false;
let heater = false;


//Light Function Testing ----------------------------------------


function lightFunction() {
  lightSwitch = !lightSwitch;

  /*document.getElementById("lightButton").addEventListener("click", function lightIncrease() { 
    lightPower+= 1;
}*/

  if (lightSwitch == true) {
    console.log('testing this works');
    //lightPower <= 100 then it will increment upwards
  } else {
    console.log('opposite');
    //lightPower > 0 then it will increment downwards
  }
}

lightFunction();

lightFunction();


console.log(lightSwitch);

//Light Function Testing ----------------------------------------