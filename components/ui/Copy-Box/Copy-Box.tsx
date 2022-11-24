import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import styles from './Copy-Box.module.scss'
import classnames from 'classnames'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Close, RightArrow, Check } from '../../icons'
import { types } from 'react-bricks/frontend'

interface CopyBoxProps {
  passedShortLink?: string
  shortLink?: string
  buttonText?: string
  CopiedNotice?: string
  show: boolean
  isEdit?: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const CopyBox: types.Brick<CopyBoxProps> = ({
  shortLink,
  passedShortLink,
  buttonText,
  CopiedNotice,
  show,
  setShow,
  isEdit,
  ...rest
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [copiedLink, setCopiedLink] = useState<string>('')
  const linkRef = useRef<HTMLInputElement>(null)

  const copyContent = (
    <CopyToClipboard text={copiedLink} onCopy={() => setIsCopied(true)}>
      <a className={styles.box__link}>
        <span>{buttonText}</span>
        <RightArrow />
      </a>
    </CopyToClipboard>
  )

  const copiedNotice = (
    <p className={styles.box__copied}>
      <Check />
      {CopiedNotice}
      {/* Link copied to clipboard */}
    </p>
  )

  const boxClasses = classnames(styles.box, {
    [styles['box--visible']]: show || isEdit,
  })

  const closeBoxHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    setShow(false)
    setIsCopied(false)
  }

  useEffect(() => {
    if (isCopied) {
      linkRef.current?.select()
      setTimeout(() => setIsCopied(false), 3000)
    }
  }, [isCopied])

  useEffect(() => {
    if (shortLink) {
      setCopiedLink(shortLink)
    }
  }, [shortLink])

  useEffect(() => {
    if (passedShortLink) {
      setCopiedLink(passedShortLink)
    }
  }, [passedShortLink])
  return (
    <div className={boxClasses} {...rest}>
      <span onClick={closeBoxHandler}>
        <Close />
      </span>

      <input type='text' defaultValue={copiedLink} ref={linkRef} />
      {isCopied ? copiedNotice : copyContent}
    </div>
  )
}

CopyBox.schema = {
  name: 'copy-box',
  label: 'Copy Box',
  category: 'UI',
  getDefaultProps: () => ({
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'shortLink',
      label: 'Short URL',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'buttonText',
      label: 'Button Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'CopiedNotice',
      label: 'Copied Notice Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default CopyBox
