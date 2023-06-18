import mongoose from "mongoose";
import { IAgentType } from "../types/agent";

const Schema = mongoose.Schema;

const agentSchema = new Schema(
	{
		station: {
			required: false,
			type: String,
		},
		agency: {
			required: true,
			type: String,
		},
		address: {
			required: true,
			type: String,
		},
	},
	{ timestamps: true }
);

agentSchema.set("toJSON", { virtuals: true });

export default mongoose.model<IAgentType>("Agent", agentSchema);
