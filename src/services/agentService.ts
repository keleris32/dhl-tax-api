import AgentModel from "../models/agent";
import { IAgentType } from "../types/agent";

export const createAgent = async (agentObj: IAgentType) => {
	const agent = new AgentModel(agentObj);
	await agent.save();
};

export const findAgentById = async (agentId: IAgentType["_id"]) => {
	return await AgentModel.findById(agentId);
};

export const findAgentsByStation = async (station: IAgentType["station"]) => {
	const query = AgentModel.where({ station: station });
	return await query.find();
};
