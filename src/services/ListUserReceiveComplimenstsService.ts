import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimenstsService {
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(
            ComplimentsRepositories
        );

        const compliments = await complimentsRepositories.find({
            where: {
                userReceiver: user_id,
            },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return compliments;
    }
}

export { ListUserReceiveComplimenstsService };
