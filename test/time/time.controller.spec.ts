import {TimeController} from "../../src/time/time.controller";
import {instance, mock, reset, when} from "ts-mockito";
import {TimeService} from "../../src/time/time.service";
import {should} from "chai-as-promised";
import {expect} from "chai";
import {Context} from "aws-lambda";

describe("", () => {
    const timeServiceMock: TimeService = mock(TimeService);
    let timeController: TimeController;

    beforeEach(() => {
       reset(timeServiceMock);
       const timeServiceInstance: TimeService = instance(timeServiceMock);
       timeController = new TimeController(timeServiceInstance);
    });

    it("", () => {
        when(timeServiceMock.getTime()).thenResolve('5');

        return timeController.getTime(null, <Context> {})
            .then((result) => {
                expect(result).to.equal('5');
            })
    });
});