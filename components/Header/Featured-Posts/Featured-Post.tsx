import React from 'react'
import styles from './Featured-Posts.module.scss'
import { types, Image, Text } from 'react-bricks/frontend'
import classnames from 'classnames'

interface FeaturedPostProps {
  link?: string
  isEdit?: boolean
}

const FeaturedPost: types.Brick<FeaturedPostProps> = ({
  link,
  isEdit,
  ...rest
}) => {
  const postClasses = classnames(styles.posts__featured, {
    'playground__brick--edit': isEdit,
  })

  return (
    <div className={postClasses} {...rest}>
      <a href={link} className={styles.posts__link}>
        <Image propName='Post image' alt='feature post image' />
        <Text
          propName='post title'
          placeholder='Type post title...'
          softLineBreak={true}
          renderBlock={({ children }) => <p>{children}</p>}
        />
      </a>
    </div>
  )
}

FeaturedPost.schema = {
  name: 'featured-post',
  label: 'Featured Post',
  category: 'Header',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'link',
      label: 'Post Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default FeaturedPost
