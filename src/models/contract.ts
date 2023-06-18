import mongoose from "mongoose";
import { ContractTypes } from "../enums/contract";
import { IContractType } from "../types/contract";

const Schema = mongoose.Schema;

const contractSchema = new Schema(
	{
		agent: {
			required: true,
			type: Schema.Types.ObjectId,
			ref: "Agent",
		},
		contractType: {
			required: true,
			enum: ContractTypes,
			type: String,
		},
		contractAmount: {
			required: true,
			type: String,
		},
		period: {
			required: true,
			type: String,
		},
		whtRate: {
			required: true,
			type: String,
		},
		whtAmount: {
			required: true,
			type: String,
		},
	},
	{ timestamps: true }
);

contractSchema.set("toJSON", { virtuals: true });

export default mongoose.model<IContractType>("Contract", contractSchema);
