import {Handler} from "aws-lambda";
import {TimeController} from "./time.controller";
import {TimeService} from "./time.service";


const service: TimeService = new TimeService();
const controller: TimeController = new TimeController(service);

export const getTime: Handler = controller.getTime;