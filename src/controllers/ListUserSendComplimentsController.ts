import { Request, Response } from "express";
import { ListUserSendComplimenstsService } from "../services/ListUserSendComplimenstsService";

class ListUserSendComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserSendComplimentsService =
            new ListUserSendComplimenstsService();

        const compliments = await listUserSendComplimentsService.execute(
            user_id
        );

        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController };
