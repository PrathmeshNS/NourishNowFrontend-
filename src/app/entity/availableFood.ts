import { Users } from "./users";

export interface AvailableFood{
    aId:0;
	dateTime:string;
    description:string;
    approxPersonCanEat:number;
    typeOfProviding:string;
    hotelUser:Users;
}