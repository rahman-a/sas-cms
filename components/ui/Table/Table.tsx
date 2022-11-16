import React, { FunctionComponent } from 'react'
import styles from './Table.module.scss'

interface TableProps {
  children: React.ReactNode
}

const Table: FunctionComponent<TableProps> = ({ children }) => {
  return <table className={styles.table}>{children}</table>
}

export default Table
