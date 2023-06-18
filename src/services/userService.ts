import { IUserType } from "../types/user";
import UserModel from "../models/user";
import { UserTypes } from "../enums/user";

export const createUser = async (userObj: IUserType) => {
	const user = new UserModel(userObj);
	await user.save();
};

export const findUserByEmail = async (email: IUserType["email"]) => {
	const query = UserModel.where({ email: email });
	return await query.findOne();
};

export const findUserById = async (userId: IUserType["_id"]) => {
	return await UserModel.findById(userId);
};

export const findAllUsers = async () => {
	return await UserModel.find();
};

export const findAllAdminUsers = async () => {
	const query = UserModel.where({ type: UserTypes.admin });
	return await query.find();
};

export const findAllAgentUsers = async () => {
	const query = UserModel.where({ type: UserTypes.agent });
	return await query.find();
};
