import { Document } from "mongoose";
import { IAgentType } from "./agent";
import { ContractTypes } from "../enums/contract";

export interface IContractType extends Document {
	agentId: IAgentType["_id"];
	contractType: ContractTypes;
	contractAmount: string;
	period: string;
	whtRate: string;
	whtAmount: string;
	createdAt?: string;
	updatedAt?: string;
}
