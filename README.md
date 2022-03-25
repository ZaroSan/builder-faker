[![npm version](https://badge.fury.io/js/builder-faker.svg)](https://badge.fury.io/js/builder-faker)

# Builder-Faker 

Based on [faker](https://fakerjs.dev) , allow you to build array of object by passing only keys in values

## Installation

```shell
npm i builder-faker
```

## Import

```js
import BuilderFaker from "builder-faker/builder";
```

## How to use it?
```js
const yourBuilder=new BuilderFaker(numberOfObjects,arrayOfKeys);
//get your array
yourBuilder.object;
//exemple
const builder=new BuilderFaker(5,["id","name","email","this arg doesn't exist","snake","firstName","fish"]);

console.log(builder.object);
```

The class will search some methods what matches with the keys passed. If the key doesn't exist, it will take a random word

### Tips

```js
yourBuilder.savedMethods
```
saveMethods return an array of each method used for each key

