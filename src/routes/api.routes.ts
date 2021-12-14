import { Router } from 'express';
import * as sessionController from '../controllers/session.controller'
import * as userController from '../controllers/user.controller'
import * as movieController from '../controllers/movie.controller';
import { authorize } from '../middlewares/auth';

const apiRouter = Router();

//Rotas Gerais

apiRouter.get('/', (req, res) => {
  return res.json({
    message: 'Nossa primeira rota de API'
  })
});


// Rotas de sessão
apiRouter.get('/session', authorize, sessionController.index);
apiRouter.post('/session/new', sessionController.create);

// Rotas de usuário
apiRouter.get('/users/id/:id', userController.view);
apiRouter.post('/users/new', userController.create);
apiRouter.delete('/users/destroy/:id', userController.destroy);

//Rotas de filme
apiRouter.get('/movies', authorize, movieController.index);


//Rota de lista

export { apiRouter }
