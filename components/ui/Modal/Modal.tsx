import React, {
  FunctionComponent,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react'
import styles from './Modal.module.scss'
import classnames from 'classnames'
import { Close } from '../../icons'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
  className?: string
  style?: React.CSSProperties
}

const Modal: FunctionComponent<ModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
  style,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalClasses = classnames(styles.modal, {
    [styles.modal__open]: isModalOpen,
    [className as string]: className,
  })

  const closeModalHandler = () => {
    setIsModalOpen(false)
    onClose && onClose()
  }

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])
  return (
    <div className={modalClasses} style={style} onClick={closeModalHandler}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={styles.modal__close} onClick={closeModalHandler}>
          <Close />
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
