import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const { data } = await axios.get(
    "https://dummyjson.com/products"
  );
  return data;
};

export default function useProducts() {
  return useQuery({ queryKey: ['products'], queryFn: () => getProducts()});
}