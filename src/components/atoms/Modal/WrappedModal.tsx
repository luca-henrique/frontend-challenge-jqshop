
import { ModalComponent } from './Modal'
import { ModalProps } from '@mui/material'

interface WrappedComponentProps extends ModalProps {

}

export const WrappedComponent = ({
  open,
  children,
  ...props
}: WrappedComponentProps) => {
  if (!open) {
    return <></>
  }

  return (
    <ModalComponent open={open} {...props}>
      {children}
    </ModalComponent>
  )
}
