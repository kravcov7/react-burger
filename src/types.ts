export type TProduct = {
  calories: number;
		carbohydrates: number;
		fat: number;
		image_large: string;
		image: string;
		image_mobile: string;
		name: string;
		price: number;	
		proteins: number;
		type: string;
		__v: number;
   productId?: string;
		_id: string
}

export type TOrder = {
  status: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  _id:string;
  number:number;
  ingredients: Array<string>;
}
