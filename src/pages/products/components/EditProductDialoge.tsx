import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormInputText } from '../../../components/ui/FormInputText';
import { type FieldValues, useForm, DefaultValues } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { Color, Size, Sleeve } from '../../../services/type';
import { ProductSchema, ProductUserInput } from '../../../lib/validations/product.schema';
import { StepWrapper } from '../../create/styles';
import { FormSelectInput } from '../../../components/ui/FormSelectInput';

type IProps = {
    open: boolean;
    onClose: (arg: boolean) => void
};
export type FormValues = {
    size: Size;
    color: Color;
    sleeve: Sleeve;
    name: string;
    price: number;
    availableStock: number;
};
const defaultValues: DefaultValues<FormValues> = {
    size: 's',
    color: 'red',
    sleeve: 'short',
    name: '',
    price: 0,
    availableStock: 0
};
const EditProductDialoge: React.FC<IProps> = ({ open, onClose }) => {
    const {
        reset,
        handleSubmit,
        control
    } = useForm<ProductUserInput>({
        resolver: zodResolver(ProductSchema), defaultValues
    })

    const onSubmit = (data: FieldValues) => {
        console.log(data)
        reset()
    }
    return (
        <React.Fragment>
            <Dialog
                open={open}
                fullWidth
                onClose={() => onClose(false)}
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <StepWrapper>
                        <FormInputText name="name" control={control} label="ProductName" />
                        <FormInputText name="price" control={control} label="Price" />
                        <FormInputText name="availableStock" control={control} label="AvailableStock" />
                        <FormSelectInput options={Object.values(Size)} label={'Size'} name="size" control={control} />
                        <FormSelectInput options={Object.values(Color)} label={"Color"} name="color" control={control} />
                        <FormSelectInput options={Object.values(Sleeve)} label={"Sleeve"} name="sleeve" control={control} />
                    </StepWrapper>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onClose(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit(onSubmit)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default EditProductDialoge;