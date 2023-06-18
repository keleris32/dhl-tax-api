import { IContractType } from "../types/contract";
import ContractModel from "../models/contract";
import { IAgentType } from "../types/agent";

export const createContract = async (contractObj: IContractType) => {
	const contract = new ContractModel(contractObj);
	await contract.save();
};

export const findAllContracts = async () => {
	return await ContractModel.find().populate("Agent");
};

export const findContractById = async (contractId: IContractType["_id"]) => {
	return await ContractModel.findById(contractId);
};

export const findAllContractsDuringSpecificPeriod = async (
	period: IContractType["period"]
) => {
	const query = ContractModel.where({ period: period });
	return await query.find().populate("Agent");
};

export const findContractsByAgentId = async (agentId: IAgentType["_id"]) => {
	const query = ContractModel.where({ agent: agentId });
	return await query.find().populate("Agent");
};

export const findContractsByAgentIdDuringSpecificPeriod = async (
	agentId: IAgentType["_id"],
	period: IContractType["period"]
) => {
	const query = ContractModel.where({ agent: agentId, period: period });
	return await query.find().populate("Agent");
};
