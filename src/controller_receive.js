import "smartcontroller"

    const simplePeer = new smartcontroller.NesSmartController();
    simplePeer.createQrCode('https://emmapoliakova.github.io/webpack-test/nesController.html', 'qrcode', 150, 150, '1');


    simplePeer.on("connection", function(data){
        processData();
    })


    function processData(){
           
        for (var key in simplePeer.controllerList){
            
            var controller = simplePeer.controllerList[key]
            if (controller.buttons.start){
                console.log(controller.buttons)
            }

        }
        requestAnimationFrame(processData);
    }