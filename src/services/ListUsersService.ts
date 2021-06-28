import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToClass } from "class-transformer";

class ListUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return classToClass(users);
    }
}

export { ListUsersService };
