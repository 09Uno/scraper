export interface DescriptionData {
    description: string;
    name: string;
    gender: string;
    recommendedFor: string;
    category: string;
    terrain: string;
    material: string;
    technology: string;
    composition: string;
    stride: string;
    weight: string;
    warranty: string;
    origin: string;
    brand: string;
  }
  
  export function parseDescription(description: string): DescriptionData {
    const regex = 
    /Descrição(.*?)(?:Nome: (.*?))(?:Gênero: (.*?))(?:Indicado para: (.*?))(?:Categoria: (.*?))?(?:Terreno: (.*?))?(?:Material: (.*?))?(?:Definição da Tecnologia: (.*?))?(?:Composição: (.*?))?(?:Pisada: (.*?))?(?:Peso do Produto: (.*?))?(?:Garantia do Fabricante: (.*?))?(?:Origem: (.*?))(?:Marca: (.*))/ ;
    const matches = description.match(regex);
  
    if (!matches) throw new Error('Product not ok');
  
    return {
      description: matches[1],
      name: matches[2],
      gender: matches[3],
      recommendedFor: matches[4],
      category: matches[5],
      terrain: matches[6],
      material: matches[7],
      technology: matches[8],
      composition: matches[9],
      stride: matches[10],
      weight: matches[11],
      warranty: matches[12],
      origin: matches[13],
      brand: matches[14],
    };
  }
  