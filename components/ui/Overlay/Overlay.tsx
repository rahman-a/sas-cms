import React, { FunctionComponent } from 'react'
import styles from './Overlay.module.scss'

interface OverlayProps {
  show: boolean
  style?: React.CSSProperties
}

const Overlay: FunctionComponent<OverlayProps> = ({ show, style }) => {
  return (
    <div
      className={styles.overlay}
      style={{ display: show ? 'block' : 'none', ...style }}
    ></div>
  )
}

export default Overlay
