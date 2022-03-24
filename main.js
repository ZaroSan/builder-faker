import BuilderFaker from "./javascript/builder.js";

const builder=new BuilderFaker(5,["id","name","email","this arg doesn't exist","snake","firstName","fish"]);


console.table(builder.object);