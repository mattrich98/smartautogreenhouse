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

function lightFunction() {
  lightSwitch = !lightSwitch;

  /* //get HTML lightSwitch ID div and add click ability with toggle on and off activator function
    document.getElementById("lightSwitch").addEventListener("click"), function lightToggle() {
        lightSwitch = !lightSwitch;
    }
*/
document.getElementById("lightButton").addEventListener("click", function lightIncrease() { 
    lightPower+= 1;
}

}

lightFunction();
lightFunction();

console.log(lightSwitch);
