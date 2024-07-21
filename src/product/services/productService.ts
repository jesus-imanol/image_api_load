import { Product } from "../models/Product";
import { DateUtils } from "../../shared/utils/DateUtils";
import * as dotenv from 'dotenv';

dotenv.config();

export class productService {

    public static async addProduct(product: Product, file: Express.Multer.File) {
        const urlProject = process.env.URL;
        const portProject = process.env.PORT;
        
        try {

            // Guardar la URL de la imágen en base de datos para poder acceder a la imagen
            product.url = `${urlProject}:${portProject}/uploads/${file.filename}`;

            product.created_at = DateUtils.formatDate(new Date());
            product.updated_at = DateUtils.formatDate(new Date());
            product.created_by = 'Usuario que crea el registro';
            product.updated_by = 'Usuario que actualizó por última vez el registro';

            //Despues de todo lo anterior pueden guardar su product en base de datos con su repository

            //Yo no lo voy a guardar, solo voy a imprimir los datos relevantes
            console.log("Nombre del producto: "+product.name)
            console.log("URL del producto: "+product.url)

            return product;
        } catch (error: any) {
            throw new Error(`Error al crear producto: ${error.message}`);
        }
    }

}  