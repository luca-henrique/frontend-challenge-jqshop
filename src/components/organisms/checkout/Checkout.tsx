import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

import ToggleColorMode from './ToggleColorMode';
import { useTheme } from '../../../hook/useTheme';
import { CreateCourseSteps } from '../CreateCourseSteps/CreateCourseSteps';
import { Button } from '../../atoms/Button/Button';
import { Steps } from '../../molecules/Steps/Steps';
import { MobileSteps } from '../../molecules/MobileSteps/MobileSteps';


const steps = ['Informações do curso', 'Informações das lições', 'Review your order'];

export default function Checkout() {
  const { mode, onChangeThemeMode } = useTheme()

  const [activeStep, setActiveStep] = React.useState(0);

  const stepsSize = steps.length - 1

  const isFinish = stepsSize > activeStep

  const handleNext = () => {
    isFinish && setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
      <Grid
        item
        sm={12}
        md={7}
        lg={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          width: '100%',
          backgroundColor: { xs: 'transparent', sm: 'background.default' },
          alignItems: 'start',
          pt: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 10 },
          gap: { xs: 4, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: { sm: 'space-between', md: 'flex-end' },
            alignItems: 'center',
            width: '100%',
            maxWidth: { sm: '100%', md: '100%' },
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'end',
            }}
          >
            <ToggleColorMode />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexGrow: 1,
            }}
          >
            <ToggleColorMode
              data-screenshot="toggle-mode"

            />
            <Steps steps={steps} activeStep={activeStep} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '100%',
            gap: { xs: 5, md: 'none' },
          }}
        >
          <MobileSteps steps={steps} activeStep={activeStep} />
          <React.Fragment>
            <CreateCourseSteps activeStep={activeStep} />
            <Box
              sx={[
                {
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', sm: 'row' },
                  alignItems: 'end',
                  flexGrow: 1,
                  gap: 1,
                  pb: { xs: 12, sm: 0 },
                  mt: { xs: 2, sm: 0 },
                },
                activeStep !== 0
                  ? { justifyContent: 'space-between' }
                  : { justifyContent: 'flex-end' },
              ]}
            >
              {activeStep !== 0 && (
                <Button
                  startIcon={<ChevronLeftRoundedIcon />}
                  onClick={handleBack}
                  variant="text"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  Voltar
                </Button>
              )}
              {activeStep !== 0 && (
                <Button
                  startIcon={<ChevronLeftRoundedIcon />}
                  onClick={handleBack}
                  variant="outlined"
                  fullWidth
                  sx={{ display: { xs: 'flex', sm: 'none' } }}
                >
                  Voltar
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
              >
                {activeStep === steps.length - 1 ? 'Cadastrar' : 'Proximo'}
              </Button>
            </Box>
          </React.Fragment>
        </Box>
      </Grid>
    </Grid>
  );
}
