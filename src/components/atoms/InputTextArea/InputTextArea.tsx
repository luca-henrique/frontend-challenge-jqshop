import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

import { Container } from './styled';

interface IInput extends TextareaAutosizeProps {
  label: string
  id?: string,
}

export const InputTextArea = ({ label, id, required, ...props }: IInput) => {
  return (
    <Container item xs={12} md={12}>
      <FormLabel htmlFor={id} required={required}>
        {label}
      </FormLabel>
      <TextareaAutosize
        id={id}
        {...props}
      />
    </Container>
  )
}