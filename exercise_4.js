function ElectricalDeviceNameAndHisPower (name){        // все наши электрические приборы относятся к кухне 
  this.room = "kitchen",
  this.name = name
 }

 ElectricalDeviceNameAndHisPower.prototype.status = function() {
 this.status = prompt(`Прибор ${this.type}-${this.name} включен в розетку?: On -Включен, Off - выключен`)
 }

ElectricalDeviceNameAndHisPower.prototype.consumptionEnergy = function(){
  if(this.status=="On") {
    this.consumptionEnergy = `Текущая потребляемая мощность ${this.name} - ${1*this.power} kW в час`;
  } else if(this.status=="Off") {
    this.consumptionEnergy = `Текущая потребляемая мощность ${this.name} - ${0*this.power} kW в час`;
  } else if (this.status!="On"||this.status!="Off") {
    this.consumptionEnergy = `Текущая потребляемая мощность ${this.name} - ${0*this.power} kW в час`;
    alert(`Вы ввели не правильные значения "включения прибора"`);
  }
}


function Fridge (name,power) {
  this.type = "Fridge",
  this.power = power,
  this.name = name,
  this.property = "freeze",
  this.size = "big"
};

Fridge.prototype = new ElectricalDeviceNameAndHisPower();        

function Microwave (name,power) {
  this.type = "Microwave",
  this.power = power,
  this.name = name,
  this.property = "heat",
  this.size = "medium"
};

Microwave.prototype = new ElectricalDeviceNameAndHisPower();  


const fridge1 = new Fridge("SMAG",150);
const microwave1 = new Microwave("Horizont",250);
const microwave2 = new Microwave("Samsung",300);            
fridge1.status();                                           // определяем - присваиваем статус включения-выключения
microwave1.status();
microwave2.status();
fridge1.consumptionEnergy();                                 // определяем потребление электроэнергии в час 
microwave1.consumptionEnergy();                             // определяем потребление электроэнергии в час 
microwave2.consumptionEnergy();                            // определяем потребление электроэнергии в час 
console.log (fridge1,microwave1,microwave2);