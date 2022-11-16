import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

export type UserData = {
  id: number;
  uuid: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

export type TaskData = {
  id: number;
  uuid: string;
  task: string;
  dueDate: string;
  description: string;
};

export type DataType = {
  users: UserData[];
  tasks: TaskData[];
};

const data: DataType = {
  users: [
    {
      id: 1,
      uuid: uuidv4(),
      name: "John",
      email: "admin@example.com",
      password: bcryptjs.hashSync("123456"),
      isAdmin: true,
    },
    {
      id: 2,
      uuid: uuidv4(),
      name: "Jane",
      email: "jane@example.com",
      password: bcryptjs.hashSync("123456"),
      isAdmin: false,
    },
  ],
  tasks: [
    {
      id: 1,
      uuid: uuidv4(),
      task: "Task 1",
      dueDate: "12/12/2022",
      description: "Task 1 description",
    },
    {
      id: 2,
      uuid: uuidv4(),
      task: "Task 2",
      dueDate: "14/12/2022",
      description: "Task 2 description",
    },
  ],
};

export default data;
