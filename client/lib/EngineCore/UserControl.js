class UserControl {

    constructor() {}

    eventHandler(event) {

        let keyCode;

        let gameCanvas = new Engine(800, 800);

        let width = gameCanvas.width;
        let height = gameCanvas.height;
        let context = gameCanvas.context;

        if (window.event) keyCode = event.keyCode;

        else if (event.which) keyCode = event.which;

        this.keyAction(keyCode, width, height, context)
    }

    keyAction(keyCode, width, height, context) {

        if (keyCode === 70) {
    
            context.strokeRect(Math.random() * width * 0.8, Math.random() * height * 0.8,
                                Math.random() * 30 + 10, Math.random() * 30 + 10);
        }
    
        if (keyCode === 71) {
    
            context.beginPath();
    
            context.arc(Math.random() *  width * 0.8, Math.random() *  height * 0.8, Math.random() * 30 + 10, 0, Math.PI * 2, true);
    
            context.closePath();
            context.stroke();
        }
        
    }
}

let control = new UserControl();

document.addEventListener("keydown", (event) => {

    control.eventHandler(event);
})