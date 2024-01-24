
import useProducts from "../../services/useProducts";
import TableProducts from "./components/TableProducts";
import SearchProducts from "./components/SearchProducts";
import { SubmitHandler } from "react-hook-form";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../services/type";

export interface IFormInput {
    searchTerm: string
}

export default function Products() {
    const { data, isLoading } = useProducts();
    const [rows, setRows] = useState<Product[]>([]);
    useEffect(() => {
        if (data) {
            setRows(data.products)
        }
    }, [data])


    const onSubmit: SubmitHandler<IFormInput> = ({ searchTerm }) => {
        if (!searchTerm) {
            setRows(data.products)
        }
        setRows(data.products.filter((item: Product) => item.title.toLowerCase().includes(searchTerm.toString())));
    }

    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>Products</h3>
                <SearchProducts onSubmit={onSubmit} />
            </Grid>
            <TableProducts data={rows} loading={isLoading} />
        </>
    )

}