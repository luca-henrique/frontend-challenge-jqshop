import { OutlinedInput, InputProps } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

import { Container } from "./styled";
import { Controller } from "react-hook-form";

interface IInput extends InputProps {
  label: string;
  id?: string;
  name: string;
  control: any;
}

export const Input = ({
  label,
  name,
  control,
  id,
  required,

}: IInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Container item xs={12} md={12}>
          <FormLabel htmlFor={id} required={required}>
            {label}
          </FormLabel>
          <OutlinedInput id={id} {...field} />
        </Container>
      )}
    />
  );
};
