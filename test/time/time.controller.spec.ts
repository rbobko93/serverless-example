import {TimeController} from "../../src/time/time.controller";
import {instance, mock, reset, when} from "ts-mockito";
import {TimeService} from "../../src/time/time.service";
import {should} from "chai-as-promised";
import {expect} from "chai";
import {getHandlerResponse} from "../response-mapper";
import {ApiResponseParsed} from "../test.interfaces";

describe("", () => {
    const timeServiceMock: TimeService = mock(TimeService);
    let timeController: TimeController;

    beforeEach(() => {
        reset(timeServiceMock);
        let timeServiceInstance: TimeService = instance(timeServiceMock);
        timeController = new TimeController(timeServiceInstance);
    });

    it("", async () => {
        when(timeServiceMock.getTime()).thenResolve('5');

        const response: ApiResponseParsed<string> = await getHandlerResponse<string>(timeController.getTime);

        expect(response.body).to.equal('5');
    });
});