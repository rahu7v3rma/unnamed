export type CartProductType = {
  product: {
    _id: string;
    name: string;
  };
  quantity: number;
};

export type ApiResponseType<DataType> = {
  success: boolean;
  data: DataType;
  message: string;
};

export type ProductType = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type OrderType = {
  clientSecret: string;
  cart: {
    product: {
      name: string;
      price: number;
    };
    quantity: number;
  }[];
};

export type UserType = {
  _id: string;
  email: string;
  role: "user" | "admin" | "vendor";
};
