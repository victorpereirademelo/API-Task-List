import userService from "../services/UserService";
import BaseController from "./BaseController";

class UserController extends BaseController {
    constructor () {
        super();

        this.createAction = this.createAction.bind(this);
    }

    async createAction(req, res) {
        try {
            await userService.create(req.body);

            this.handleResponse(res, true);
        } catch (error) {
            this.handleError(res, error);
        }
    }
}

export default new UserController();