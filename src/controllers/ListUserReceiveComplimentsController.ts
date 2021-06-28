import { Request, Response } from "express";
import { ListUserReceiveComplimenstsService } from "../services/ListUserReceiveComplimenstsService";

class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserReceiveComplimentsService =
            new ListUserReceiveComplimenstsService();

        const compliments = await listUserReceiveComplimentsService.execute(
            user_id
        );

        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController };
