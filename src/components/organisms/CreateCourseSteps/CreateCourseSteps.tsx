import { FormCourse } from "../../molecules/FormCourse/FormCourse";
import PaymentForm from "../../molecules/PaymentForm";
import Review from "../../molecules/Review";

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <FormCourse />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export const CreateCourseSteps = ({ activeStep = 0 }) => {

  return (
    <>
      {getStepContent(activeStep)}
    </>
  )
}