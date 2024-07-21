import { Router } from 'express';
import { createProduct } from '../controllers/productController';
import upload from '../../shared/middlewares/uploadMiddleware';

const productRoutes: Router = Router();

//Aquí se coloca el Middleware V----------V----Este es el atributo del req que se recibirá
productRoutes.post('/', upload.single('productImage'), createProduct);

export default productRoutes;