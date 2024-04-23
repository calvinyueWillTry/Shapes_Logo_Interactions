const inquirer = require('inquirer');//from index.d.ts: import { Interface as ReadlineInterface } from "readline";
const {Circle, Rectangle, Triangle} = require("./lib/shapes.js"); //imports the classes from shapes.js
//const path = require('path');
// const Circle = require("./lib/shapes.js");//only circle gets called as a result
// const Rectangle = require("./lib/shapes.js");
// const Triangle = require("./lib/shapes.js");
// const colors = require('colors');
// const { green } = require('color-name');
// let color = document.querySelector("#colorselect");
// let shape = document.querySelector("#shapeselect");
// let textArea = document.querySelector("#Textarea");
// const render = require("./Routes/render");
// const component = require("./Routes/component");
  
class SVG { //blueprint created
    constructor () { //method for class SVG for creating/initializing the object instances below.
      this.color = "";//object = string properties
      this.shape = "";
      this.textArea = "";
    //     this.title = "SVG generator";//placeholder
    //     // Array of different task objects e.g. [{ text: string, priority: bool }, ...]
    // this.tasks = [];//placeholder
    }
    addColor() { 
        return inquirer 
        .prompt([ //when called, this is the 1st prompt that comes up
        {
            type: "list",
            name: "color",
            choices: ["green", "red", "blueviolet", "yellow", "cyan", "cornflowerblue"]
            //based on what's available in CSS
        }])
        .then(({color}) => { //calls choices from the name:
          this.color = {color};
          console.log({color});
          return this.addShape();//selected color is stored in the {object: color} property of the SVG instance.
        })
    } //call next function
    addShape() { 
    return inquirer
    .prompt([//2nd prompt
        {
            type: "list",
            name: "shape",
            choices: ["Triangle", "Rectangle", "Circle"]
        },
        ])
    .then(({shape}) => {
    this.shape = {shape};
    console.log({shape});
    return this.addLogo(); //saves shape like the color above
      })
    } 
    addLogo() {
        return inquirer
        .prompt([
        {
            type: 'input',
            name: 'logo',
            message: 'Please enter your logo (limit 3 characters)',
        }//logo needs text color option too? 
        ])
        .then(({logo}) => { //calls message from name: logo 
          if (logo.length > 3) { //if input exceeds 3 characters
            console.log("over 3 characters");//message for going over
            return shapeshift.addColor();//exits function to start over
          }
          this.logo = {logo}; 
          return this.renderImage(this.color, this.shape, this.logo);//from the top of the function, which is redefined through these functions
        })
    }
    renderImage(colorSelect, shapeSelect, logoInput) {// i.e. this.color, this.shape, this.logo
     console.log(shapeSelect.shape);

      console.log(colorSelect, shapeSelect, logoInput);//{ color: 'Red' } { shape: 'Circle' } { logo: 'plo' } all objects
      if (shapeSelect.shape == "Triangle" ) { //.shape to capture the string choice
        console.log("Tri");
        const shapeTriangle = new Triangle();//calls the class from the other JS page
        shapeTriangle.render(colorSelect.color, logoInput.logo);//renderColors() instead?
      } //render these in the class respectively
      if (shapeSelect.shape == "Rectangle") { //see Triangle
        console.log("Rec");
        const shapeRectangle = new Rectangle();
        shapeRectangle.render(colorSelect.color, logoInput.logo);//renderColors() instead?
      }
      if (shapeSelect.shape == "Circle") {//see Triangle
        console.log("Cirq");
        const shapeCircle = new Circle();
        shapeCircle.render(colorSelect.color, logoInput.logo)
      }
    }
  };
  const shapeshift = new SVG(); //variable to create the class
  shapeshift.addColor(); //call the method addColor() in SVG
        //shapeCircle.render(colorSelect.color, logoInput.logo)
        // shapeCircle.render(logoInput.logo, colorSelect.color.setTheme({
        //   shapeCircle: colorSelect.color
        // }) );//renderColors() instead?
      // function renderColors() {
      //   if (colorSelect.color == "green") {
      //     const shaped = shapeSelect.shape
      //     shaped.setTheme({shaped: green})
      //   }
      // }
//console.log(this.color, this.shape);//shape, color, colorSelect are not defined; these get nothing
// const colorSelection = function renderColors() {
//   colors.setTheme({
//     //combine - shape: this.color
//   })
//   console.log('Hello'.red); 
//   console.log('Hello'.rainbow); 
//   console.log('Hello'.cyan);
//   console.log('Hello'.green);
//   console.log('Hello'.yellow);  
//   }
// class shape extends color {combine these components}
// class text extends SVG logo {add text into the logo}


