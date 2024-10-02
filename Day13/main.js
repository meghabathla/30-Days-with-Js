//Activity1: Creating and Export Modules
"use strict";
const { addFunc, myObject } = require("./myModule.js");

//import addFunc from "./Addfunc.js";

const res = addFunc(3, 4);
console.log(res);
console.log(myObject());
