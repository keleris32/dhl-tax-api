import { Document } from "mongoose";

export interface IAgentType extends Document {
	station?: string;
	agency: string;
	address: string;
	createdAt?: string;
	updatedAt?: string;
}
