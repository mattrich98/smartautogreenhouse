//Sensors
let plantGrowth = 0;
let temperature = 0;
let humidity = 0;
let soilWetness = 0;
let lightPower = 0;
let time = 1000;

//Activators/Adjustables
let lightSwitch = false;
let window = true;
let fan = false;
let waterValve = false;
let heater = false;


function lightFunction(){ //For now to make the light button work without maths
    //on click eventlistener needed for button
    //refer to previous projects to make easier.
    if (lightSwitch = true){
        lightPower++
    }

    //need to use a loop when light function = true.
    //need toggle on and off for lightSwitch


    //get HTML lightSwitch ID div and add click ability with toggle on and off activator function
    document.getElementById("lightSwitch").addEventListener("click"), function lightToggle() {
        lightSwitch = !lightSwitch;
    }
}






function windowFunction(){}

function fanFunction(){}

function waterFunction(){}

function heaterFunction(){}