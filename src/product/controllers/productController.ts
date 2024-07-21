import { Request, Response } from 'express';
import { productService } from '../services/productService';

export const createProduct = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    
    const newProduct = await productService.addProduct(req.body, req.file);
    if (newProduct) {
      res.status(201).json(newProduct);
    } else {
      res.status(404).json({ message: 'Algo salio mal' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }

};