import moment from 'moment';

export const isInTimeFrame = (filterName, date) => {

    switch(filterName) {
        case 'lastYear':
            return moment().subtract(1, 'years').year() === moment(date).year();
        case 'lastQuarter':
            return moment().subtract(1, 'quarters').quarter() === moment(date).quarter();
        case 'lastThirtyDays':
            return moment(date) >= moment().subtract(30, 'days');
        case 'lastFifteenDays':
            return moment(date) >= moment().subtract(15, 'days');
        case 'lastDay':
            return moment(date) >= moment().subtract(1, 'days');
        default:
            break;
    }
}