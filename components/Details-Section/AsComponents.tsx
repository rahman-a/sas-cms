import React, { FunctionComponent } from 'react'
import Link from 'next/link'

interface AsComponentsProps {
  className?: string
  href?: string
  children: React.ReactNode
  as?: 'div' | 'a'
}

const AsComponents: FunctionComponent<AsComponentsProps> = ({
  children,
  as,
  className,
  href,
}) => {
  if (as === 'a') {
    return (
      <Link href={href || ''}>
        <a className={className}>{children}</a>
      </Link>
    )
  }
  return <div className={className}>{children}</div>
}

export default AsComponents
