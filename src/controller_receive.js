import "smartcontroller";

//** A simple browser side demo showing how to create a smartcontroller Nes object and access fields from each connected controller. */

//create an instance of NesSmartController, optionally specify a peer ID for the PC browser peer
const simplePeer = new smartcontroller.NesSmartController("123456789");

//create and display a QR code for the smartphones, specify url for the controller, div element for the code to be displayed, optionally size and a player ID
//this url is an official Nes Controller compatible with the NesSmartController class
simplePeer.createQrCode(
  "https://smartcontrollerjs.github.io/Controllers/nesController.html",
  "qrcode",
  150,
  150
);

//listen for new connections and log them in the console
simplePeer.on("connection", function (data) {
  console.log(data);
});

//run an update function to continuously process the data from the phone
processData();

//a function that loops over the connected controllers and logs state of all buttons in the console if 'start' button is pressed
function processData() {
  for (var key in simplePeer.controllerList) {
    //store the controller to access its fields
    var controller = simplePeer.controllerList[key];
    //check if start button is pressed
    if (controller.buttons.start) {
      //log the buttons dictionary
      console.log(controller.buttons);
    }
  }
  requestAnimationFrame(processData);
}
