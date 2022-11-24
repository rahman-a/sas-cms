import React, { useContext } from 'react'
import styles from './Featured-Posts.module.scss'
import classnames from 'classnames'
import { HeaderContext } from '@context/Header-Context'
import { types, Repeater } from 'react-bricks/frontend'

interface FeaturedPostsProps {
  title?: string
  postsId?: string
  isEdit?: boolean
}

const FeaturedPosts: types.Brick<FeaturedPostsProps> = ({
  title,
  postsId,
  isEdit,
  ...rest
}) => {
  const { subMenuId } = useContext(HeaderContext)
  const postsClasses = classnames(styles.posts, {
    [styles.posts__hide]: subMenuId !== postsId && !isEdit,
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={postsClasses} {...rest}>
      <h2 className={styles.posts__title}>{title}</h2>
      <Repeater propName='featured-post-wrapper' />
    </div>
  )
}

FeaturedPosts.schema = {
  name: 'featured-posts',
  label: 'Featured Posts',
  category: 'Header',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: 'Featured Posts',
    isEdit: true,
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Featured Posts Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'postsId',
      label: 'Link Posts to Sub Menu',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'featured-post-wrapper',
      itemType: 'featured-post',
      itemLabel: 'Featured Post',
      max: 3,
    },
  ],
}

export default FeaturedPosts
