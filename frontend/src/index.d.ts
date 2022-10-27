export type CartItem = {
    _id: string;
    name: string;
    slug: string;
    thumbnail: string;
    images: string[];
    brand: string;
    category: string;
    description: string;
    price: number;
    stock: number;
    averageRating: number;
    reviews: Review[];
    discountPercentage: number;
    __v: number;
    createdAt: string;
    updatedAt: string;
    quantity: number;
  };
  type Review = {
    name: string;
    comment: string;
    rating: number;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };