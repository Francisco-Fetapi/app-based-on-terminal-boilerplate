import { helloWorld } from "./helloWorld";
import readlineSync from "readline-sync";

const name = readlineSync.question("What's your name?\n");

console.log(helloWorld(name));
