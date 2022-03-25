[![npm version](https://badge.fury.io/js/builder-faker.svg)](https://badge.fury.io/js/builder-faker)

#Builder-Faker 

Based on [faker](https://fakerjs.dev) , allow you to build array of object by passing only keys in values

##Installation

```shell
npm i builder-faker
```

##Import

```js
import BuilderFaker from "builder-faker/builder";
```

##How to use it?
```js
const yourvar=new BuilderFaker(numberOfObjects,arrayOfKeys);
//get your array
yourvar.object;
//exemple
const builder=new BuilderFaker(5,["id","name","email","this arg doesn't exist","snake","firstName","fish"]);

console.log(builder.object);
````
The class will search some methods what matches with the keys passed. If the key doesn't exist, it will take a random word


###Exemple of outputs

index   id      name        this arg doesn't exist  snake                   
0	    58254	'Aubree'    'Guilder'	            'Horseshoe pitviper'	
1	    69599	'Alejandra' 'Mobility'	            'Flat-nosed pitviper'	
2	    37517	'Rahul'     'Account'	            'Pit viper'	        

