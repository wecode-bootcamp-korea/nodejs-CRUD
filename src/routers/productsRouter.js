import express from 'express';
import { list, detail } from '../controllers/products';

const productsRouter = express.Router();

productsRouter.get('/', list);
productsRouter.get('/:id', detail);

export default productsRouter;
