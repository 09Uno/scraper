import { Request, Response } from 'express';
import { Product_Scraper_Service } from "../services/Product-Scraper_Service";

export class Product_Scraper_Controller {
    async handle(request: Request, response: Response ) {
        const product = new Product_Scraper_Service();
        const productData = await product.scrape();
        return response.json(productData);
    }
}