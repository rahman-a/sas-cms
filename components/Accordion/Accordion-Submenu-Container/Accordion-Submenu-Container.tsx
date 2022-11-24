import { useEffect, useRef } from 'react'
import styles from '../Accordion.module.scss'
import { types, Repeater } from 'react-bricks/frontend'
import classnames from 'classnames'

interface AccordionSubmenuContainerProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isEdit?: boolean
}

const AccordionSubmenuContainer: types.Brick<
  AccordionSubmenuContainerProps
> = ({ isOpen, setIsOpen, isEdit, ...rest }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const contentWrapperRef = useRef<HTMLDivElement>(null)
  const accordionContentClasses = classnames(styles.accordion__content, {
    'playground__brick--edit': isEdit,
  })

  const toggleDropdownHandler = () => {
    if (isEdit) return
    if (isOpen) {
      const wrapperHeight = contentWrapperRef.current?.clientHeight
      if (contentRef.current) {
        contentRef.current.style.height = `${wrapperHeight}px`
      }
    } else {
      if (contentRef.current) {
        contentRef.current.style.height = '0px'
      }
    }
  }

  useEffect(() => {
    if (isEdit) {
      const wrapperHeight = contentWrapperRef.current?.clientHeight
      if (contentRef.current) {
        contentRef.current.style.height = `${wrapperHeight}px`
      }
    }
  }, [isEdit])

  useEffect(() => {
    toggleDropdownHandler()
    console.log(
      'AccordionSubmenuContainer',
      contentWrapperRef.current?.clientHeight
    )
  }, [isOpen])
  return (
    <div className={accordionContentClasses} ref={contentRef} {...rest}>
      <div
        className={styles.accordion__content_wrapper}
        ref={contentWrapperRef}
      >
        <Repeater
          propName='accordionitemlink'
          itemProps={{
            isOpen,
            setIsOpen,
            isSubmenu: false,
            submenuLink: true,
          }}
        />
      </div>
    </div>
  )
}

AccordionSubmenuContainer.schema = {
  name: 'accordionsubmenucontainer',
  label: 'Accordion Submenu Container',
  category: 'Accordion',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'accordionitemlink',
      itemLabel: 'Accordion Item Link',
      itemType: 'accordionlink',
      max: 20,
    },
  ],
}

export default AccordionSubmenuContainer
