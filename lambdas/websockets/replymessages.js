const Responses = require('../common/API_Responses');
const WebSocket = require('../common/websocketMessage');
exports.handler = async (event) => {
    console.log('event', event);

    await WebSocket.send({
        domainName: event.domainName,
        stage: event.stage,
        connectionID: event.connectionID,
        message: event.message,
    });
    console.log('sent message -> '+event.message);
    return Responses._200({ message: 'sent message' });
};