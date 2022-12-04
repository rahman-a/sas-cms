import React, { ReactNode } from 'react'
interface LayoutProps {
  children?: ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main className='mb-auto'>{children}</main>
)

export default Layout
