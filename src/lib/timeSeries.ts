/**
 * @author rplateaux@youwol.com
 */

export class TimeSeries{
    
    _startTime: string
    _endTime  : string
    _increment: number
    constructor(
        {
            startTime = '2018-12-03',
            endTime  = '2019-01-09',
            increment = 3
        }:
        {
            startTime?: string,
            endTime? : string,
            increment?: number 
        }) {
        
            this._startTime = startTime,
            this._endTime   = endTime,
            this._increment = increment
        }
    get startTime(): string {
        return this._startTime
    }
    set startTime(newStartTime){
        this._startTime = newStartTime
    }
    get endTime(): string {
        return this._endTime
    }
    set endTime(newEndTime){
        this._endTime = newEndTime
    }
    get increment(): number {
        return this._increment
    }
    set increment(newIncrement){
        this._increment = newIncrement
    }
    /**
     * 
     * @param {string} start - time start series
     * @param {string} end   - time end series
     * @param {number} increment - increment of time in day
     * @returns 
     */
    createTimeSeries(
        {start, end, increment}:
        {start: string, end: string, increment: number}
    ): number[] {
        const convertDayInMilli  = 8.64e7 // one day in millisecond
        let tiNum: number        = new Date(start).getTime() // date simu starts (date = days)
        let tfNum: number        = new Date(end).getTime() // date simu ends
        let timestep: number     = increment * convertDayInMilli// resolotion temporelle des champs de vitesse (jours)
        let timeSeries: number[] = []
        let tincr: number        = tiNum - timestep // To make it start at the date enter
        let tfMinusIncr: number  = tfNum - timestep // To make it end at the date enter 

        if ( tiNum > tfNum ) {
            throw new Error('start date cannot be after end date')
        }
        else{
            while ((tincr) <= tfMinusIncr) {
                tincr = tincr + timestep
                let reFormatTime: string = this.formatTime(tincr)
                timeSeries.push(Number(reFormatTime))
            }
        }
        return timeSeries 
    }
    /**
     * @param time - format time for ECCO2
     */
    formatTime(time: number): string {
        const d = new Date(time)
        let month = '' + (d.getMonth() + 1)
        let day = '' + (d.getDate())
        let year = d.getFullYear()
        if (month.length < 2)
            month = '0' + month
        if (day.length < 2)
            day = '0' + day
        let dateFormat: string = year + month + day
        return dateFormat
    }
}  