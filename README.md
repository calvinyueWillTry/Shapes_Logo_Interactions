Shapeshift Summary (see video in place of screenshots)

Video:
First minute is showing all the code.
1:03 run "node index.js", which trigger the sequence of inquiries, starting with color.
1:10 the next inquiry, which is shape;
1:22 if it's more than 3 characters, it will trigger line 64 in index.js, and have me start the process over.
1:38 when clicking on the shape name under output, it will show my newly produced shape with logo. I can open with a live server to see the result. 
1:58 I repeat the process for the other shapes, to demonstrate full MVP.

First called require('inquirer') and the shape classes (from shapes.js in lib folder);
SVG:

Created class SVG, with a constructor () to create objects this.color = "", this.shape = "", and this.textArea = "", giving them string properties.

new SVG().addColor(); calls the first function within the class.

addColor(), and the functions addShape() and addLogo(), first "return inquirer", then produces a prompt for the user. After this, .then take the choice selected (turned into the {name: "string"}), then returns to the next function.

At the end of addLogo(), it ends with return this.renderImage(this.color, this.shape, this.logo), being called from the top of the function, which is redefined through these functions.
renderImage(colorSelect, shapeSelect, logoInput) renames (this.color, this.shape, this.logo) to turn those into usable variables. 

Depending on the shape chosen, if (shapeSelect.shape == "Triangle", "Rectangle" or "Circle"), the class is created on this page, being made a variable (e.g. const shapeCircle = new Circle()); 

Then takes this variable containing the class, and shapeCircle.render(colorSelect.color, logoInput.logo); these make the shape that color, and adds the logo within.

Shapes (called in index.js as classes that are imported: 
In the shapes.js, require('node:fs') and require('path') at the top of the page (made fs and join respectively);

3 shapes have 3 different classes (color, text as parameters), with the constructor implicitly added by JS.
the shapes are the given xml dimensions, e.g. const svgRectangle = "<rect x='40%' y='30%' width='30%' height='35%' fill ="+"'"+color+"'"+" />;

The measurements and placement are first created, then the fill through the color variable.
<text x="50%" y="50%">'+text+'</text></g></svg>'; This adds the text last, in the middle of the page.

try block (to write these shapes with their parameters, as a string, to the folder output, assigned respective names) is executed first; if it throws an exception, the code in the catch block will be executed for "errors".
module.exports = {Circle, Rectangle, Triangle}; sends these classes to index.js
