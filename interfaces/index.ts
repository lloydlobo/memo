// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
    id: number;
    name: string;
};

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
    name: string;
    category: string;
    completed: boolean;
    description: string;
    dueDate: string;
    slug: string;
    timestamp: string;
};

export type DataType = {
    users: UserData[];
    tasks: TaskData[];
};

export type ServerTasks = {
    tasks: TaskData[];
    isLoading: boolean;
    isError: any;
};
