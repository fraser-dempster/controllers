import "smartcontroller"

    var canvas = document.getElementById("coordinateCanvas")
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'red';
    
  
    var coordinates = {};

    const simplePeer = new smartcontroller.JoystickSmartController();
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/joystick.html', 'qrcode', 150, 150, '1');


    simplePeer.on("connection", function(data){
        coordinates[data.peer] = {x:0, y:0}
        console.log(coordinates)
    })

    processData();

    function processData(){
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
   
        for (var key in simplePeer.controllerList){
            
            var joystick = simplePeer.controllerList[key]


            if (joystick.isActive){
                
                coordinates[joystick.peer.peer].x += joystick.positionChange.x
                coordinates[joystick.peer.peer].y += joystick.positionChange.y
                console.log(coordinates)

                ctx.beginPath();
                ctx.arc(coordinates[joystick.peer.peer].x, -coordinates[joystick.peer.peer].y, 10, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill(); 
            }
 
        }
        requestAnimationFrame(processData);
    }