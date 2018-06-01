export class TimeService {
    public constructor(){

    }

    public getTime(): Promise<String> {
        return Promise.resolve(new Date().toTimeString());
    }
}