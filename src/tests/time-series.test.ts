import { TimeSeries } from '../lib/timeSeries'

test('Time series test', () => {
    const m = new TimeSeries({})
    const timeSeries: number[] = m.createTimeSeries({
        start: '2018-01-03',
        end: '2018-02-03',
        increment: 3
    })
    const tobeRes: number[] = [
        20180103, 20180106,
        20180109, 20180112,
        20180115, 20180118,
        20180121, 20180124,
        20180127, 20180130,
        20180202
    ]
    //expect( expRes[10] ).toBe(tobeRes[0])
    for (var _i = 0; _i < tobeRes.length; _i++) {
        expect(timeSeries[_i]).toBe(tobeRes[_i])
    }
})

test('test time error', () => {
    expect(() => {
        const m = new TimeSeries({})
        const timeSeries: number[] = m.createTimeSeries({
            start: '2018-02-03',
            end: '2018-01-03',
            increment: 3,
        })
    }).toThrow();
});