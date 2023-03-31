import { Pipe, PipeTransform } from "@angular/core";
import { convertLocalDateTimeToUTCISO, convertLocalDateToUTCISO, convertUTCToLocalDateISO, convertUTCToLocalDateTimeISO } from "../util/date.util";

@Pipe({
    name: 'dateformat',
    standalone: true,
})
export class DateFormatPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        if (value && args[0] && args[1]) {
            if (args[0] == 'date' && args[1] == 'utc') {
                return convertUTCToLocalDateISO(value)
            } else if (args[0] == 'datetime' && args[1] == 'utc') {
                return convertUTCToLocalDateTimeISO(value)
            } else if (args[0] == 'date' && args[1] == 'local') {
                return convertLocalDateToUTCISO(value)
            } else if (args[0] == 'datetime' && args[1] == 'local') {
                return convertLocalDateTimeToUTCISO(value)
            }
        }
        return value
    }
}