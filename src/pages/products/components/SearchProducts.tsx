import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { IFormInput } from "../page";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

type IProps = {
    onSubmit: SubmitHandler<IFormInput>;
};

const SearchProducts: FC<IProps> = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm<IFormInput>()

    return (
        <>
        <form style={{position:'relative'}} onSubmit={handleSubmit(onSubmit)}>
            <input {...register("searchTerm")}  />
            <Button variant="text" type="submit">
                <SearchIcon/>
            </Button>
        </form>
        </>
    )
}

export default SearchProducts