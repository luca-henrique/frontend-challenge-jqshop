import { Step, StepLabel, Stepper, StepperProps } from "@mui/material"

interface ISteps extends StepperProps {
  steps: string[]
}

export const MobileSteps = ({ activeStep, steps = [] }: ISteps) => {
  return (
    <Stepper
      id="mobile-stepper"
      activeStep={activeStep}
      alternativeLabel
      sx={{ display: { sm: 'flex', md: 'none' } }}
    >
      {steps.map((label) => (
        <Step
          sx={{
            ':first-child': { pl: 0 },
            ':last-child': { pr: 0 },
            '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
          }}
          key={label}
        >
          <StepLabel
            sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

