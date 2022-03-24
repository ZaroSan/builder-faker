import BuilderFaker from "./javascript/builder.js";
import { faker } from '@faker-js/faker';

const name=faker.word.random();

const builder=new BuilderFaker(["id","name","email"]);