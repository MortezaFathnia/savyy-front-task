import { FC } from "react";
import { FormInputText } from "../../../components/ui/FormInputText";
import { Button} from "@mui/material";
import { useLoacalStorage } from "../../../hooks/useLocalStorage";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, useForm, DefaultValues } from "react-hook-form"
import { ProductDetailsInput, ProductDetailsSchema} from "../../../lib/validations/product.schema";
import { StepWrapper } from "../styles";


export type FormValues = {
    name: string;
    price: number;
    availableStock:number;
};

const defaultValues: DefaultValues<FormValues> = {
    name: '',
    price: 0,
    availableStock:0
};
const CreateProductDetails: FC = () => {
    const {
        reset,
        handleSubmit,
        control
    } = useForm<ProductDetailsInput>({
        resolver: zodResolver(ProductDetailsSchema), defaultValues
    })
    const { getItem } = useLoacalStorage('user')
   
    const onSubmit = (data: FieldValues) => {
        const user = getItem()
        if (data.email === user.email && data.password === user.password) {
            toast.success('welcome to dashboard')
        } else {
            toast.error('Your ceredential is n\'t correct')
        }
        reset()
    }
    return (
        <StepWrapper>
            <FormInputText name="name" control={control} label="ProductName" />
            <FormInputText name="price" control={control} label="Price" />
            <FormInputText name="availableStock" control={control} label="AvailableStock" />
            <Button type="submit" onClick={handleSubmit(onSubmit)} variant={"contained"}>
                Submit
            </Button>
        </StepWrapper>
    )
}

export default CreateProductDetails;