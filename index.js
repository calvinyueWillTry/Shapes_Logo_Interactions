
const path = require('path');
const inquirer = require('inquirer');
const {Circle, Rectangle, Triangle} = require("./lib/shapes.js")
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
    constructor () {
      this.color = "";//string properties
      this.shape = "";
      this.textArea = "";
    //     this.title = "SVG generator";//placeholder
    //     // Array of different task objects e.g. [{ text: string, priority: bool }, ...]
    // this.tasks = [];//placeholder
    }
    addColor() { 
        return inquirer 
        .prompt([
        {
            type: "list",
            name: "color",
            choices: ["green", "red", "blueviolet", "yellow", "cyan", "cornflowerblue"]
            //all black?
        }])
        .then(({color}) => {
          this.color = {color};
          console.log({color});
          return this.addShape();//selected color is stored in the {object: color} property of the SVG instance.
        })
    }
    addShape() { 
    return inquirer
    .prompt([
        {
            type: "list",
            name: "shape",
            choices: ["Triangle", "Rectangle", "Circle"]
        },
        ])
    .then(({shape}) => {
    this.shape = {shape};
    console.log({shape});
    return this.addLogo(); //saves shape like color
      })
    } 
    addLogo() {
        return inquirer
        .prompt([
        {
            type: 'input',
            name: 'logo',
            message: 'Please enter your logo (limit 3 characters)',
        }
        ])
        .then(({logo}) => {
          if (logo.length > 3) {
            console.log("over 3 characters");
            return shapeshift.addColor();//exits func. to start over
          }
          this.logo = {logo}; //
          return this.renderImage(this.color, this.shape, this.logo);//from the top of the function, which is redefined along the way
        })
    }
    renderImage(colorSelect, shapeSelect, logoInput) {
     console.log(shapeSelect.shape);

      console.log(colorSelect, shapeSelect, logoInput);//{ color: 'Red' } { shape: 'Circle' } { logo: 'plo' }
      if (shapeSelect.shape == "Triangle" ) {
        console.log("Tri");
        const shapeTriangle = new Triangle();
        shapeTriangle.render(colorSelect.color, logoInput.logo);//renderColors() instead?
      }
      if (shapeSelect.shape == "Rectangle") {
        console.log("Rec");
        const shapeRectangle = new Rectangle();
        shapeRectangle.render(colorSelect.color, logoInput.logo);//renderColors() instead?
      }
      if (shapeSelect.shape == "Circle") {
        console.log("Cirq");
        const shapeCircle = new Circle();
        //shapeCircle.render(colorSelect.color, logoInput.logo)
        shapeCircle.render(colorSelect.color, logoInput.logo)
        // shapeCircle.render(logoInput.logo, colorSelect.color.setTheme({
        //   shapeCircle: colorSelect.color
        // }) );//renderColors() instead?
      }
      // function renderColors() {
      //   if (colorSelect.color == "green") {
      //     const shaped = shapeSelect.shape
      //     shaped.setTheme({shaped: green})
      //   }
      // }
      
    }
};
const shapeshift = new SVG();
shapeshift.addColor();
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


