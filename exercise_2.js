function getPropertyInObject ( string, theObject) {   
      if(string in theObject === true) { 
        const result = true;
        console.log (result);
      } else {
        const result = false;
        console.log (result);
      };
  };

const user = {
  name: "Ivan",
  age: 30,
  ownCity: "Piter"
};
getPropertyInObject("name", user);               