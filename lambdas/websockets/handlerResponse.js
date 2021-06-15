const Responses = require('../common/API_Responses');
const WebSocket = require('../common/websocketMessage');
exports.handler = async (event) => {
    console.log('event', event);

    // console.log('QueueResponse ' + event.Records.length + ' mensajes leidos');
    // let messages = event.Records;
    // messages.forEach(element => console.log({
    //     "messageid": element.messageId,
    //     "body": element.body
    // }));

    await WebSocket.send({
        domainName: event.domainName,
        stage: event.stage,
        connectionID: event.connectionID,
        message: event.message,
    });
    console.log('sent message -> ' + event.message);
    return Responses._200({ message: 'sent message' });
};