import { Product } from '../models/product';
import puppeteer from 'puppeteer';
import { parseDescription } from '../utils/DescriptionRegex';

export class Product_Scraper_Service {
    async scrape(): Promise<Product> {

        try {
            
            //o navegador é aberto e a página é carregada
            const productUrl = "/tenis-mizuno-wave-titan-2-preto-2FU-6367-006";
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            await page.goto('https://www.netshoes.com.br' + productUrl, { waitUntil: 'networkidle2' });

            //os seletores são usados para pegar os dados da página e armazenar em constantes
            const title = await page.$eval('.short-description > h1:nth-child(1)', el => el.textContent);
            const price = await page.$eval('.default-price > span:nth-child(1) > strong:nth-child(1)', el => el.textContent);
            const image = await page.$eval('.zoom', el => el.getAttribute('src'));
            const description = await page.$eval('#features', el => el.textContent);

            
            console.log(title);
            console.log(price);
            console.log(image);
            


            
            
            if(!title || !price || !image || !description) throw new Error('Product not found');
            
            const formatDescrpt = parseDescription(description);
            console.log(formatDescrpt);

            
            await browser.close();
            return new Product(title, price, image, formatDescrpt);

        } catch (error) {
            console.log(error);
            throw new Error('Product not found');
        }
    }
}

