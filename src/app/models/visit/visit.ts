import { City } from "../city/city";
import { Tourist } from "../tourist/tourist";
import { Transport } from "../transport/transport";

export class Visit {
    id?: number;
    start_date?: Date;
    end_date?: Date;
    tourist?: Tourist;
    city?: City;
    transport?: Transport;
}
