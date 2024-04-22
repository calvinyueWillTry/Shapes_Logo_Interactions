
const inquirer = require('inquirer');
const path = require('path');

let color = document.querySelector("#colorselect");
let shape = document.querySelector("#shapeselect");
let textArea = document.querySelector("#Textarea");
const render = require("./Routes/render");
const component = require("./Routes/component");

color.addEventListener("click", saveColor);
function saveColor () {
    
};