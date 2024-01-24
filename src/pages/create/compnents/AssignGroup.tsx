import { FC } from "react";
import { FormInputText } from "../../../components/ui/FormInputText";
import { Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, useForm, DefaultValues } from "react-hook-form"
import { GroupProductInput, GroupProductSchema } from "../../../lib/validations/product.schema";
import { StepWrapper } from "../styles";


export type FormValues = {
    group: string;
};

const defaultValues: DefaultValues<FormValues> = {
    group: ''
};
const AssignGroupForm: FC = () => {
    const {
        reset,
        handleSubmit,
        control
    } = useForm<GroupProductInput>({
        resolver: zodResolver(GroupProductSchema), defaultValues
    })
    

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset()
    }
    return (
        <StepWrapper>
            <FormInputText name="group" control={control} label="Group" />
            <Button type="submit" onClick={handleSubmit(onSubmit)} variant={"contained"}>
                Login
            </Button>
        </StepWrapper>
    )
}

export default AssignGroupForm;