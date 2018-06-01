import {TimeService} from "./time.service";
import {Context} from "aws-lambda";

export class TimeController {

    private timeService: TimeService;

    public constructor(service: TimeService){
        this.timeService = service;
    }

    public getTime(event: any, context: Context): Promise<any>  {
        return this.timeService.getTime();
    }
}