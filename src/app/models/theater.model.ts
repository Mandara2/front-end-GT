import { Seat } from "./seat.model";

export class Theater {
    id?:number;
    capacity:number;
    location:string;
    seats?:Seat[]; //El interrogante significa que el campo es opcional
}
