import {  Paper, Typography } from "@mui/material";
import CreateProductForm from "./compnents/CreateProductAttribute";

export default function CreateProduct() {
    return (
        <div style={{width:'100%'}}>
            <Paper
                style={{
                    display: "grid",
                    gridRowGap: "20px",
                    padding: "20px",
                    margin: "10px 300px",
                    minWidth:'400px'
                }}
            >
                <Typography variant="h4">Create Product</Typography>
                <CreateProductForm/>
            </Paper>
        </div>
    )
}