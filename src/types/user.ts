import { Document } from "mongoose";
import { UserTypes } from "../enums/user";

export interface IUserType extends Document {
	name: string;
	email: string;
	password: string;
	phone: string;
	type: UserTypes;
}
