import { Button as Container, ButtonProps } from "@mui/material/"

interface IButton extends ButtonProps { }

export const Button = ({ children, ...props }: IButton) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}