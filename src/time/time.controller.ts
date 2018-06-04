import {TimeService} from "./time.service";
import {APIGatewayProxyCallback, Context, Handler} from "aws-lambda";

export class TimeController {

    private timeService: TimeService;

    public constructor(timeService: TimeService){
        this.timeService = timeService;
    }

    public getTime: Handler = (event: any, context: Context, callback: APIGatewayProxyCallback): void => {
        this.timeService.getTime()
            .then( result => {
               return callback(null, {
                   statusCode: 200,
                   body: result.toString()
               });
            })
            .catch( error => {

            });
    }
}