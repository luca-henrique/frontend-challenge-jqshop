

import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import { Input } from '../../atoms/Input/Input';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const FormCourse = () => {
  return (
    <Grid container spacing={2}>
      <FormGrid item xs={12} md={6}>
        <Input label="Nome do curso" id='course-name' name={''} control={undefined} />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <Input label="Descrição do curso" id='course-description' name={''} control={undefined} />
      </FormGrid>
    </Grid>
  );
}
