import express, { Application } from 'express';
import productRoutes from './product/routes/productRoutes';
import path from 'path';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10);
const urlProject = process.env.URL

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'POST',
  allowedHeaders: 'Content-Type',
}));

app.use('/api/products', productRoutes);

// Ruta que usarán para acceder a las imágenes //////ruta de donde se sacarán las imágenes
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


app.listen(port, () => {
  console.log('Serving static files from:', path.join(__dirname, '../uploads'));
  console.log(`Servidor corriendo en ${urlProject}:${port}`);
});
