import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

// Rote deve: Receber a requisição, chamar outro arquivo, devolver uma resposta

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
