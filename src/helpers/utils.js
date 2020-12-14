export const str2bool = value => value === 'paid event' ? true : false;
export const multiplyDuration = value => value * 3600;
export const changeTimeOutput = (time, timeUnit) => {
    if(time === 'pm') {
        let hour = Number(timeUnit.substring(0,2)) + 12;
        if(hour === 24) {
            hour = '00';
            return hour + timeUnit.substring(2);
        };
        return hour + timeUnit.substring(2);
    } else {
        return timeUnit;
    }
};