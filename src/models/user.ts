import mongoose from "mongoose";
import { IUserType } from "../types/user";
import { UserTypes } from "../enums/user";

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			maxlength: 255,
			minlength: 5,
			required: true,
			trim: true,
			type: String,
		},
		email: {
			lowercase: true,
			maxlength: 255,
			minlength: 5,
			required: true,
			trim: true,
			type: String,
			unique: true,
		},
		password: {
			trim: true,
			required: true,
			type: String,
		},
		phone: {
			required: true,
			type: String,
		},
		type: {
			required: true,
			enum: UserTypes,
			type: String,
		},
	},
	{ timestamps: true }
);

userSchema.set("toJSON", { virtuals: true });

export default mongoose.model<IUserType>("User", userSchema);
