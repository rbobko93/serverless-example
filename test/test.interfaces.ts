import {ProxyResult} from "aws-lambda";

export interface  ApiResponseParsed<T> extends ProxyResult{
    parsedBody: T;
}