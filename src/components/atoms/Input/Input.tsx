import { OutlinedInput, InputProps } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

import { Container } from './styled';

interface IInput extends InputProps {
  label: string
  id?: string,
}

export const Input = ({ label, id, required, ...props }: IInput) => {
  return (
    <Container item xs={12} md={12}>
      <FormLabel htmlFor={id} required={required}>
        {label}
      </FormLabel>
      <OutlinedInput
        id={id}
        {...props}
      />
    </Container>
  )
}