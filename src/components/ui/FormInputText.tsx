import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
type FormInputProps = {
    name:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control:any,
    type?:string
    label?: string
}
export const FormInputText = ({ name, control, label,type }: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <TextField
                    helperText={error ? error.message : null}
                    size="small"
                    error={!!error}
                    type={type}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                />
            )}
        />
    );
};