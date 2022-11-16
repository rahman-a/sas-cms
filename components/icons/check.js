import React from 'react'

const Check = (props) => {
  return (
    <svg
      {...props}
      width='1em'
      height='1em'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='48' height='48' fill='currentColor' fillOpacity='0.01' />
      <path
        d='M43 11L16.875 37L5 25.1818'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Check
