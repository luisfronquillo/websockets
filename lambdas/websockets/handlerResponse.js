const Responses = require('../common/API_Responses');
const WebSocket = require('../common/websocketMessage');
exports.handler = async (event) => {
    console.log('event', event);
    const tableName = process.env.wsapiname;
    // TODO recibir el evento de la cola
    // TODO Obtener el enpoint directo de las variables de entorno
    // TODO Consultar si el connectionID es vigente
    // TODO enviar el mensage
    
    // console.log('QueueResponse ' + event.Records.length + ' mensajes leidos');
    // let messages = event.Records;
    // messages.forEach(element =>{ 
        
        
    //     element.connectionID});

    await WebSocket.send({
        domainName: event.domainName,
        stage: event.stage,
        connectionID: event.connectionID,
        message: event.message,
    });
    console.log('sent message -> ' + event.message);
    return Responses._200({ message: 'sent message' });
};