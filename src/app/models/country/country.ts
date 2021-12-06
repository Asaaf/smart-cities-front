import { Province } from "../province/province";

export class Country {
    id?: number;
    name?: string;
    provinces?: [Province];
}
