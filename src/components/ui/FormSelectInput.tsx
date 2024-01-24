import { Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
type FormInputProps = {
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any,
    type?: string
    label?: string
    options: string[] | number[]
}
export const FormSelectInput = ({ name, control, options, label }: FormInputProps) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { value, onChange }
                }) => (
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        {options.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
                    </Select>
                )}
            />
        </FormControl>
    );
};