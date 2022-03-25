<div align="center">
  [![npm version](https://badgen.net/npm/v/builder-faker)](https://www.npmjs.com/package/builder-faker)
</div>

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

index   id      name        email                        this arg doesn't exist snake                   firstName   fish
0	    58254	'Aubree'	'Imogene63@yahoo.com'	    'Guilder'	            'Horseshoe pitviper'	'Sid'	    'Round sardinella'
1	    69599	'Alejandra'	'Leann54@gmail.com'	        'Mobility'	            'Flat-nosed pitviper'	'Davin'	    'Rainbow trout'
2	    37517	'Rahul'	    'Brionna66@gmail.com'	    'Account'	            'Pit viper'	            'Lillian'	'Japanese cockle'
3	    1456	'Karlie'	'Josefina48@gmail.com'	    'AGP'	                'Common adder'	        'Antwon'	'Asian swamp eel'
4	    96032	'Ryan'	    'Callie.Crist@gmail.com'	'Toys'	                'Many-horned adder'	    'Ramon'	    'Japanese cockle'
