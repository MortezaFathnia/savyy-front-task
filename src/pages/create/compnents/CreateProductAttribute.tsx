import { FC } from "react";
import { Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, useForm, DefaultValues } from "react-hook-form"
import { AttributeSchema, AttributeInput } from "../../../lib/validations/product.schema";
import { Color, Size, Sleeve } from "../../../services/type";
import { FormSelectInput } from "../../../components/ui/FormSelectInput";
import { StepWrapper } from "../styles";


export type FormValues = {
    size: Size;
    color: Color;
    sleeve: Sleeve;
};

const defaultValues: DefaultValues<FormValues> = {
    size: 's',
    color: 'red',
    sleeve: 'short'
};
const CreateProductAttribute: FC = () => {
    const {
        reset,
        handleSubmit,
        control
    } = useForm<AttributeInput>({
        resolver: zodResolver(AttributeSchema), defaultValues
    })

    const onSubmit = (data: FieldValues) => {
        //request
        console.log(data)

        reset()
    }
    return (
        <StepWrapper>
            <FormSelectInput options={Object.values(Size)} label={'Size'} name="size" control={control} />
            <FormSelectInput options={Object.values(Color)} label={"Color"} name="color" control={control} />
            <FormSelectInput options={Object.values(Sleeve)} label={"Sleeve"} name="sleeve" control={control} />
            <Button type="submit" onClick={handleSubmit(onSubmit)} variant={"contained"}>
                Submit
            </Button>
        </StepWrapper>
    )
}

export default CreateProductAttribute;