import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'
import { Close, UpArrow, UpArrowCircle } from '@components/icons'
import { useInView } from 'react-intersection-observer'
import styles from './Float-Container.module.scss'
import { Overlay } from '@components/ui'
import { types, Repeater } from 'react-bricks/frontend'

interface FloatContainerProps {
  titleText?: string
  hideText?: string
  direction?: 'row' | 'column'
  flexGap?: string
  isWrap?: boolean
  background?: string
  textColor?: string
}

const FloatContainer: types.Brick<FloatContainerProps> = ({
  titleText,
  hideText,
  direction,
  flexGap,
  isWrap,
  background,
  textColor,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShrink, setIsShrink] = useState(false)
  const [elementHeight, setElementHeight] = useState(0)
  const staffRef = useRef<HTMLDivElement>(null)
  const { ref: detectRef, inView: isInputVisible, entry } = useInView()
  const floatClasses = classnames(styles.float__container, {
    [styles.float__visible]: isInputVisible || elementHeight < 0,
    [styles.float__open]: isOpen,
    [styles.float__shrink]: isShrink && !isOpen,
  })
  const toggleClasses = classnames(styles.float__header_toggle, {
    [styles['float__header_toggle-open']]: isOpen,
  })
  const wrapperClasses = classnames(styles.float__wrapper, {
    [styles['float__wrapper-row']]: direction === 'row',
    [styles['float__wrapper-column']]: direction === 'column',
    [styles['float__wrapper-wrap']]: isWrap,
    [styles['float__wrapper_gap--sm']]: flexGap === 'small',
    [styles['float__wrapper_gap--md']]: flexGap === 'medium',
    [styles['float__wrapper_gap--lg']]: flexGap === 'large',
    [styles['float__wrapper_gap--xl']]: flexGap === 'larger',
  })
  const toggleContainerHandler = () => {
    if (isInputVisible) return
    isShrink && setIsShrink(false)
    setIsOpen(!isOpen)
  }

  const hideContainerHandler = () => {
    if (isInputVisible) return

    if (isOpen) {
      setIsOpen(false)
      return
    }
    setIsShrink(!isShrink)
  }

  useEffect(() => {
    if (isOpen || isShrink) {
      staffRef.current!.style.transition = 'transform 0.5s ease-in-out'
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isShrink])

  useEffect(() => {
    if (isInputVisible) {
      setElementHeight(entry?.boundingClientRect.top!)
      setIsOpen(false)
      setIsShrink(false)
    } else {
      staffRef.current!.style.transition = 'none'
      setElementHeight(entry?.boundingClientRect.top!)
    }
  }, [isInputVisible, entry])
  return (
    <>
      <Overlay show={isOpen} />
      <section className={styles.float}>
        <div
          ref={detectRef}
          id='hidden'
          style={{ height: '100%', position: 'absolute' }}
        />
        <div className={floatClasses} ref={staffRef}>
          <div
            className={styles.float__header}
            style={{ backgroundColor: background }}
          >
            <h3 style={{ color: textColor }}>{titleText}</h3>
            <span
              style={{ color: textColor }}
              className={styles.float__header_close}
              onClick={hideContainerHandler}
            >
              <Close />
              {hideText}
            </span>
            <span
              className={styles['float__header_toggle-mobile']}
              onClick={toggleContainerHandler}
            >
              <UpArrowCircle />
            </span>
            <span
              style={{ backgroundColor: background }}
              className={toggleClasses}
              onClick={toggleContainerHandler}
            >
              <UpArrow />
            </span>
          </div>
          <div className={wrapperClasses}>
            <Repeater propName='staffcardswrapper' />
          </div>
        </div>
      </section>
    </>
  )
}

FloatContainer.schema = {
  name: 'floatcontainer',
  label: 'Float Container',
  category: 'Layout',
  getDefaultProps: () => ({
    titleText: 'Get in touch',
    hideText: 'hide',
    direction: 'row',
    flexGap: 'medium',
    isWrap: true,
    background: 'rgb(30, 149, 224)',
    textColor: '#c9ecfc',
    staffcardswrapper: [
      {
        textColor: '#2d2d2d',
        name: 'Ryan Hawk',
        role: 'Global Industrial Manufacturing & Automotive Leader, PwC United States',
        tel: '+1 (312) 543 4098',
        email: 'staff@sas.com',
        linkedin: 'http://localhost:5000/industries/aerospace-defense#',
        cardSize: 'large',
      },
      {
        textColor: '#2d2d2d',
        name: 'Harald Wimmer',
        role: 'Global Automotive Leader, Partner, PwC Germany',
        tel: '+49 221 2084-240',
        email: 'staff@sas.com',
        cardSize: 'large',
      },
      {
        textColor: '#2d2d2d',
        name: 'Jeff Sorensen',
        role: 'Global Industrial Manufacturing & Automotive Assurance Leader, PwC United States',
        email: 'staff@sas.com',
        twitter: 'http://localhost:5000/industries/aerospace-defense#',
        linkedin: 'http://localhost:5000/industries/aerospace-defense#',
        cardSize: 'large',
      },
      {
        textColor: '#2d2d2d',
        name: 'John Livingstone',
        role: 'Global Industrial Manufacturing & Automotive Tax Leader, PwC United States',
        email: 'staff@sas.com',
        linkedin: 'http://localhost:5000/industries/aerospace-defense#',
        cardSize: 'large',
      },
      {
        textColor: '#2d2d2d',
        name: 'Paul Harvey',
        role: 'Industry Executive, Industrial Manufacturing & Automotive, PwC United Kingdom',
        tel: '+44 (0) 7738 845 605',
        linkedin: 'http://localhost:5000/industries/aerospace-defense#',
        email: 'staff@sas.com',
        twitter: 'http://localhost:5000/industries/aerospace-defense#',
        cardSize: 'large',
      },
    ],
  }),
  sideEditProps: [
    {
      name: 'titleText',
      label: 'Container Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'hideText',
      label: 'Hide Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'direction',
      label: 'Container Items Direction',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'row', label: 'Row' },
          { value: 'column', label: 'Column' },
        ],
      },
    },
    {
      name: 'isWrap',
      label: 'Flex Wrap',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'flexGap',
      label: 'Gap between items',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'larger', label: 'Larger' },
        ],
      },
    },
    {
      name: 'background',
      label: 'Section Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: 'rgb(242, 242, 242)', label: 'Light Grey' },
          { value: 'rgb(30, 149, 224)', label: 'Primary Blue' },
          { value: '#2d2d2d', label: 'Light Dark' },
        ],
      },
    },
    {
      name: 'textColor',
      label: 'Section Title Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: '#2d2d2d', label: 'Soft Black' },
          { value: 'rgb(30, 149, 224)', label: 'Primary Blue' },
          { value: '#c9ecfc', label: 'Light Blue' },
        ],
      },
    },
  ],
  repeaterItems: [
    {
      name: 'staffcardswrapper',
      itemLabel: 'Staff Cards',
      itemType: 'staff card',
    },
  ],
}

export default FloatContainer
