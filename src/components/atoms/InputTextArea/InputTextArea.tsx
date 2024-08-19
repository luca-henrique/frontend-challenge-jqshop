import { TextareaAutosize, TextareaAutosizeProps } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

import { Container } from './styled';
import { Controller } from 'react-hook-form';

interface IInput extends TextareaAutosizeProps {
  label: string
  id?: string,
  name: string;
  control: any
}

export const InputTextArea = ({ label, id, required, control, name, minRows }: IInput) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Container item xs={12} md={12}>
          <FormLabel htmlFor={id} required={required}>
            {label}
          </FormLabel>
          <TextareaAutosize
            id={id}
            {...field}
            minRows={minRows}
          />
        </Container>
      )}
    />
  )
}