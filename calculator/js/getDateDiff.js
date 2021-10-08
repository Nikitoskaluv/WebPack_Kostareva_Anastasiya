import { DateTime } from '../node_modules/luxon/src/luxon.js'


export default ({ from, to }) => {
    if (from > to) {
        [to, from] = [from, to];
    }
    const fromDate = DateTime.fromISO(from)
    const toDate = DateTime.fromISO(to);

    const result = toDate.diff(fromDate, ['years', 'months', 'days']).toObject();
    return result;
};