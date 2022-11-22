import { faker } from "@faker-js/faker";
import { UserData } from "../../interfaces";

/**
 * Get fake users
 *
 * @param id The id of the user
 * @returns The fake users
 */
export function getFakeUsers(id: number): UserData[] {
    let users: UserData[] = [];

    for (let id = 0; id < 10; id++) {
        const user: UserData = {
            name: faker.name.fullName(),
            email: faker.internet.email(),
            id: id,
            uuid: faker.datatype.uuid(),
            password: "",
            isAdmin: false,
        };

        users.push(user);
    }

    return users;
}
