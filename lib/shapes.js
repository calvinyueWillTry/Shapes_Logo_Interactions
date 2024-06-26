const fs = require('node:fs');//declare module "node:fs" {export * from "fs";}
const { join } = require('path');//declare module "path", allows join function to be used
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document.js');
class Triangle { //empty constructor implicitly added by JS
    render(color, text) { // from .render(colorSelect.color, logoInput.logo) in other JS (line 79)
        const svgPolygon = "<polygon points='150, 18 244, 182 56, 182' fill ="+" ' "+color+" ' "+" />" //fill = "+" ' "+color+" ' "+" />"
        //const svgPolygon = '<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>';
        const svgPolygonString = '<svg xmlns="http://www.w3.org/2000/svg"><g>'+svgPolygon+'"<text x="10%" y="20%"> '+text+' </text></g></svg>';
        //creates the SVG polygon element with the specified points and fill color, then adds text to the SVG.
        console.log(svgPolygonString, "hi");
        try { //try block executed first; if it throws an exception, the code in the catch block will be executed
            fs.writeFileSync(
                join(__dirname, "..", "output", "polygon.svg"), svgPolygonString);
        } catch(error) {
            console.error(error);
        }
    }
}
class Rectangle {
    render(color, text) { //note changes to circle . Started with <rect x='10' y='10' width='30' height='30'/>rx='10' ry='10' i.e. radius curve
        const svgRectangle = "<rect x='40%' y='30%' width='30%' height='35%' fill ="+"'"+color+"'"+" />"
        const svgRectangleString = '<svg xmlns="http://www.w3.org/2000/svg"><g>'+svgRectangle+'<text x="50%" y="50%">'+text+'</text></g></svg>';
        console.log(svgRectangleString, "hello");
        try {
            fs.writeFileSync(
                join(__dirname, "..", "output", "rectangle.svg"), svgRectangleString);
        } catch(error) {
            console.error(error);
        }
    }
}
class Circle {
    render(color, text) {
        const svgCircle = "<circle cx='50%' cy='50%' r='100' fill ="+"'"+color+"'"+"/>"; //"+" = concactenate addition string,   
        const svgCircleString = '<svg xmlns="http://www.w3.org/2000/svg"><g> '+svgCircle+'  <text x="50%" y="50%" text-anchor = "middle"> '+text+' </text></g></svg>';
        console.log(svgCircleString, "back");
        try { //try to output this
            fs.writeFileSync(
                join(__dirname, '..', 'output', 'circle.svg'), svgCircleString);
            // file written successfully
          } catch (error) {
            console.error(error);
          }
    }
}
module.exports = {Circle, Rectangle, Triangle};//export these when this {shapes} are called