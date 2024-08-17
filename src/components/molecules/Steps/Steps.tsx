import { Step, StepLabel, Stepper, StepperProps } from "@mui/material"

interface ISteps extends StepperProps {
  steps: string[]
}

export const Steps = ({ activeStep, steps = [] }: ISteps) => {
  return (
    <Stepper
      id="desktop-stepper"
      activeStep={activeStep}
      sx={{ width: '100%', height: 40 }}
    >
      {steps.map((label) => (
        <Step
          sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }}
          key={label}
        >
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

