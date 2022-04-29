import sessionService from '../services/SessionService';
import BaseController from "./BaseController"

class SessionController extends BaseController {
    constructor() {
        super();

        this.createAction = this.createAction.bind(this);
    }

    async createAction(req, res) {
        try {
        await sessionService.create(req.body);

        this.handleResponse(res, true);
        }
        catch(error) {
            this.handleError(res, error);
        }
    }
}

export default new SessionController();