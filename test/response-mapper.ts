import {Context, Handler, ProxyResult} from "aws-lambda";
import {ApiResponseParsed} from "./test.interfaces";

export const getHandlerResponse = <T>(handler: Handler): Promise<ApiResponseParsed<T>> => {
    return new Promise((resolve, reject) => {
        handler(null, <Context> {}, (error?: Error | null, result?: ProxyResult): void => {
            if(typeof result === "undefined"){
                reject("No result was returned by the handler");
                return;
            }

            const mappedResult = result as ApiResponseParsed<T>;
            resolve(mappedResult);
        });
    });
};