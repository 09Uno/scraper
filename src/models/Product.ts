import { DescriptionData } from "../utils/DescriptionRegex";

export class Product {
    private title: string ;
    private price: string;
    private image: string;
    private description: DescriptionData;
  
    constructor(title: string, price: string, image: string, description: DescriptionData) {
      this.title = title;
      this.price = price;
      this.image = image;
      this.description = description;
    }
  
    getTitle(): string {
      return this.title;
    }

    getPrice(): string {
        return this.price;
    }

    getImage(): string {
        return this.image;
    }

    getDescription(): DescriptionData {
        return this.description;
    } 
    

  }