import { mapStateToProps } from './CardContainer';

describe('CardContainer', () => {
    describe('mapStateToProps', () => {
        it('should return an object with the pokemon array', () => {
            const mockState = {
                pokemon: [
                    { 
                        id: "1",
                        name: "normal"
                    },
                    { 
                        id: "2",
                        name: "fighting"
                    }
                ],
                loading: false,
                error: ''
            }

            const expected = {
                pokemon: [
                    { 
                        id: "1",
                        name: "normal"
                    },
                    { 
                        id: "2",
                        name: "fighting"
                    }
                ]
            }

        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
        });
    });
});
