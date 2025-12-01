export interface Aircraft {
  id: string;
  name: string;
  category: string;
  year: number;
  price: number;
  image: string;
  images?: string[];
  manufacturer: string;
  engine: string;
  maxSpeed: string;
  range: string;
  capacity: string;
  history?: string;
  description: string;
}

export interface CartItem extends Aircraft {
  quantity: number;
}
