## Test API Trello

### Se agrega un método que genera una tarjeta en la lista de tareas.

## Inicializar
````shell
 node app.js
 ````
 ## Solicitud
 ````javascript
require("dotenv").config();
if(!process.env.TOKEN && !process.env.KEY){
    throw new Error("No hay configuración con Api Key y con Token");
}
let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`
trello.addCard(cardTitle, "Wax on, wax off", process.env.ID,
    function (error, trelloCard) {
        if (error) {
            console.log("Could not add card:", error);
        }
        else {
            console.log("Added card:", trelloCard);
        }
    });
````
