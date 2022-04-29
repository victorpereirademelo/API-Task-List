import { Router } from 'express';

import userController from '../app/controllers/UserController';

const routes = Router();

routes.post('/', userController.createAction);

export default routes;