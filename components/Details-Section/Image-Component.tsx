/* eslint-disable @next/next/no-img-element */

import React, { FunctionComponent } from 'react'
import styles from './Details-Section.module.scss'
import { types, Image } from 'react-bricks/frontend'

// type ImageComponentProps = {
//   image: types.IImageSource
// }

const ImageComponent: types.Brick = ({ ...rest }) => {
  return (
    <div className={styles.details__row} {...rest}>
      <Image
        propName='details image'
        alt='details graph'
        renderWrapper={({ children }) => (
          <figure className={styles.details__figure}>{children}</figure>
        )}
      />
    </div>
  )
}

ImageComponent.schema = {
  name: 'details-section-image',
  label: 'Details Section Image',
  category: 'Details Section',
  hideFromAddMenu: true,
}

export default ImageComponent
