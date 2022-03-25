import { faker } from "@faker-js/faker";

export default class BuilderFaker {
  constructor(count, arrayOfKey) {
    if(count <=0){
      this.count = 1;
    }
    else{
      this.count = count;
    }
    this.arrayOfKey = arrayOfKey;
   
    this.response = [];
    this.savedMethods = {};
  }
  get object() {
    for (let index = 0; index < this.count; index++) {
      const obj = {};
      this.arrayOfKey.forEach((element) => {
        
        /**
         * check if the method to call faker exists already
         */
        if (this.savedMethods[element]) {
            if(element==='id'){
                obj[element] = faker[this.savedMethods[element][0]](faker[this.savedMethods[element][1]][this.savedMethods[element][2]]);
            }else
          obj[element] =faker[this.savedMethods[element][0]][this.savedMethods[element][1]]();
        } else if (faker[element]) {
            // check if first part of api exit
          const call = Object.entries(faker[element])[1][0];
          obj[element] = faker[element][call]();
          this.savedMethods[element] = [element, call];
        } else if (element === "id") {
            // check is id
        this.savedMethods[element]=['unique','datatype','number'];
        obj[element] = faker[this.savedMethods[element][0]](faker[this.savedMethods[element][1]][this.savedMethods[element][2]]);
        } else {
            let hasSaved=false;
            //search existing method
          Object.entries(faker).forEach((key) => {
            Object.entries(key[1]).forEach((value, index) => {
              if (value[0] === element) {
                const call = key[0];
                obj[element] = faker[call][element]();
                this.savedMethods[element] = [call, element];
                hasSaved=true;
              }
            });
          });
          //default random word for unexisting method
          if (!hasSaved) {
            this.savedMethods[element]=['random','word'];
            obj[element] =
            faker[this.savedMethods[element][0]][
              this.savedMethods[element][1]
            ]();
          }
        }
      });
      this.response = [...this.response, obj];
    }
    return this.response;
  }
}
