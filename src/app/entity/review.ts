import { Users } from "./users";

export interface Review{
    reviewId:0;
	description:string;
    star:Number;
    hotelUser:Users;
    ngoUser:Users;
}