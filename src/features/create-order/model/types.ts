export type OrderDTO = {
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    country: string;
    address: string;
    city: string;
    postCode: string;
  };
  items: { id: string; title: string; price: number; qty: number }[];
  total: number;
  createdAt: string;
};
