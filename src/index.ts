import {Handler} from "aws-lambda";

const handler: Handler = ((event, context, callback) => {
    let currentTime = new Date();
    callback(null, {
        statusCode: '200',
        body: '2'
    });
});

export {handler}