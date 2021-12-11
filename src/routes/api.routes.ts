import { Router } from 'express';
import * as sessionController from '../controllers/session.controller'
import * as userController from '../controllers/user.controller'


const apiRouter = Router();

//Rotas Gerais

apiRouter.get('/', (req, res) => {
  return res.json({
    message: 'Nossa primeira rota de API'
  })
});


// Rotas de sessão
apiRouter.post('/users/new', sessionController.create);

// Rotas de usuário
apiRouter.post('/users/destroy/:id', userController.destroy);
apiRouter.get('/users/id/:id', userController.view);

//Rotas de filme


//Rota de lista

export { apiRouter }
