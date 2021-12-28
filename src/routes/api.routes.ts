import { Router } from 'express';
import * as sessionController from '../controllers/session.controller'
import * as userController from '../controllers/user.controller'
import * as movieController from '../controllers/movie.controller';
import * as listController from '../controllers/list.controller';
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
apiRouter.get('/movies', movieController.index);
apiRouter.get('/movies/id/:id', authorize, movieController.view);
apiRouter.get('/movies/search/:search', authorize, movieController.search);
apiRouter.post('/movies/new', authorize, movieController.create);

//Rota de lista
apiRouter.get('/list', authorize, listController.index);
apiRouter.post('/list/add/:id', authorize, listController.add);
apiRouter.delete('/list/remove/:id', authorize, listController.remove);

export { apiRouter }
