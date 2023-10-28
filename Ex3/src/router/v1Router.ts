import { Router } from 'express';
import produtoRouter from '../resources/produto/produto.router';
import clienteRouter from '../resources/cliente/cliente.router';
const router = Router();

router.use("/produto", produtoRouter);
router.use("/cliente", clienteRouter);
export default router;
