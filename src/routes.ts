import { Router, Request, Response } from "express";
import { Product_Scraper_Controller } from "./controllers/Product_Scraper_Controller";

// this file its responsible for manage the routers of the application.

const router = Router();


router.get('/teste2', (req: Request, res: Response)=>{
    return res.json({teste2:true})
})

//rota responsável por chamar o controller que faz o scraping
router.get('/product', new Product_Scraper_Controller().handle)


export {router};