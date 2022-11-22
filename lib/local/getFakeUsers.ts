import { faker } from "@faker-js/faker";
import { UserData } from "../../interfaces";

export function getFakeUsers(id: number) {
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

const usersObj = getFakeUsers(100);
console.log(usersObj);
export default usersObj;
