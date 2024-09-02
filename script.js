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


for (let i = 0; i <= 100; i++) {
  console.log(i);
}

for (let i = 0; i >= 100; i--) {
  console.log(i);
}


/*while(lightSwitch == true && (lightPower != 100)){
    //console.log('testing this works');
    lightPower++
    console.log(lightPower);
    //lightPower <= 100 then it will increment upwards
}

while(lightSwitch == false && (lightPower != 0)){
    lightPower--
    console.log(lightPower);

}
/*
  } else {
    console.log('opposite');
    //lightPower > 0 then it will increment downwards

    lightPower--
}
*/ 
}

lightFunction();

lightFunction();


console.log(lightPower);

//Light Function Testing ----------------------------------------

/*if (lightSwitch == true && (lightPower <= 100)) {
    console.log('testing this works');
    lightPower++
    //lightPower <= 100 then it will increment upwards*/