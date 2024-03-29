import React from 'react'

const LocationSymbol = (props) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 21 21'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        fill='none'
        fillRule='evenodd'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        transform='translate(4 2)'
      >
        <path d='m6.5 16.5407715.6311176-.7118691c.71585099-.8191184 1.36011688-1.5983525 1.93279767-2.3377022l.4733382-.6239608c1.97516433-2.6615039 2.96274653-4.77276704 2.96274653-6.33378943 0-3.33218241-2.6862915-6.03344997-6-6.03344997s-6 2.70126756-6 6.03344997c0 1.56102239.98758218 3.67228553 2.96274653 6.33378943l.4733382.6239608c.73630387.9505925 1.5909423 1.9671163 2.56391527 3.0495713z' />
        <circle cx='6.5' cy='6.5' r='2.5' />
      </g>
    </svg>
  )
}

export default LocationSymbol
