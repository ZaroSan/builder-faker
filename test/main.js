import BuilderFaker from "builder-faker/builder";

const builder=new BuilderFaker(5,["id","name","email","this arg doesn't exist","snake","firstName","fish"]);


console.log(builder);