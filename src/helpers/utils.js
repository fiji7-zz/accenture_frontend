import moment from 'moment';

export const str2bool = value => value === 'paid event' ? true : false;
export const convertedDate = value => moment(value).format('YYYY-MM-DDTHH:MM:SS');
export const multiplyDuration = value => value * 3600;