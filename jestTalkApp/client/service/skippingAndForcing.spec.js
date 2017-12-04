xdescribe('surrounding describe should', () => {
        xdescribe('this describe should', () => {
            xit('not be executed', () => {
                expect(true).toBe(true);
            });
        });

        describe('this describe should', () => {
            it('be executed', () => {
                expect(true).toBe(true);
            });
            it('not  be executed', () => {
                expect(true).toBe(true);
            });
        });

        describe('this describe should', () => {
            it('be executed', () => {
                expect(true).toBe(true);
            });
            it.skip('not  be executed', () => {
                expect(true).toBe(true);
            });
        });

        describe.skip('this describe should', () => {
            it('not  be executed', () => {
                expect(true).toBe(true);
            });
        });
    }
)
;
xtest('this test should not be executed', () => {});
test.only('this test should be executed', () => {});