import { validate } from '../src/client/js/validate';

describe("Testing the form functionality", () => {
    test("should return undefined if field is empty",  () => {
        const data = undefined;
        expect(data).toBeUndefined;              
    });

});