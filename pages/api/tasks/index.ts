import { NextApiRequest, NextApiResponse } from "next";
import { TaskData } from "../../../interfaces";
import data from "../../../lib/local/data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    const tasks: TaskData[] = data.tasks;

    try {
        if (!Array.isArray(tasks)) {
            throw new Error("Cannot find tasks data");
        }

        res.status(200).json(tasks);
    } catch (e: any) {
        return res.status(500).json({ statusCode: 500, message: e.message });
    }
};

export default handler;
