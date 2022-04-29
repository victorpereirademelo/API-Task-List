import { Router } from 'express';

import SessionController from '../app/controllers/SessionController';

const routes = Router();

routes.post('/',  SessionController.createAction);

export default routes;