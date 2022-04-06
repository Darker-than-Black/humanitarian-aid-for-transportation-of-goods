import { get } from 'lodash'
import { formatLocaleDate } from '../../utils';
import { ApiTravelLetter, TravelLetter, Sender, SenderRecipient, Batch, DateRange } from '../../type';

export class TravelLetterBuilder {
    private get startDate(): string {
        return formatLocaleDate(new Date());
    }

    private get endDate(): string {
        const END_DATE = 5;
        const date = new Date();
        const end = date.setDate(date.getDate() + END_DATE);
        return formatLocaleDate(new Date(end));
    }

    get dateRange(): DateRange {
        return {
            start: this.startDate,
            end: this.endDate,
        };
    }

    build(data: ApiTravelLetter): TravelLetter[] {
        return Object.values(data).map((row) => ({
            details: this.getField(row, 'details'),
            drivers: Object.values(this.getField(row, 'drivers')),
            senders: Object.values(this.getField<Record<string, Sender>>(row, 'senders')).map((sender) => ({
                details: this.getField(sender, 'details'),
                recipients: Object.values(this.getField<Record<string, SenderRecipient>>(sender, 'recipients')).map((recipient) => ({
                    details: this.getField(recipient, 'details'),
                    batches: Object.values(this.getField<Record<string, Batch>>(recipient, 'batches'))
                        .map(({ volume, items, weight }) => ({ volume, weight, items: items || [] })),
                })),
            })),
        }))
    }

    private getField<T> (data: Record<string, any>, path: string, defaultValue: any = {}): T {
        return get(data, path) || defaultValue
    }
}
