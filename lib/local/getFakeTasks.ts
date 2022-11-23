import { faker } from "@faker-js/faker";
import { TaskData } from "../../interfaces";

/**
 * Returns a list of fake tasks.
 *
 * @param id The id of the task.
 * @returns A list of fake tasks.
 */
export function getFakeTasks(ids: number): TaskData[] {
    const tasks: TaskData[] = [];
    for (let id = 0; id < ids; id++) {
        const uuid = faker.datatype.uuid();
        const task: TaskData = {
            id: id,
            uuid: uuid,
            name: faker.git.commitMessage(),
            category: faker.random.word(),
            completed: faker.datatype.boolean(),
            description: faker.git.commitMessage(),
            dueDate: faker.date.future().toISOString(),
            slug: faker.helpers.slugify(uuid), // TODO: add api/tasks/..
            timestamp: faker.datatype.datetime().toISOString(),
        };

        tasks.push(task);
    }

    return tasks;
}
