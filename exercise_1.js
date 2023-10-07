function getKeyAndValueObj(theObject){            
     for (let key in theObject) {                 "ключам"
    if(theObject.hasOwnProperty(key)){            
      console.log(` ${key} : ${theObject[key]} `)  
    };
  };
};

const town = {                                      
  city: "Moscow"
}
const itemUser = Object.create(town);               
itemUser.name = "Sabarz";                             
itemUser.age = 30;                                  
getKeyAndValueObj(itemUser);         