import React, { FunctionComponent } from 'react'
import styles from './Details-Section.module.scss'
import ReactPlayer from 'react-player'
import { types, RichText } from 'react-bricks/frontend'

interface VideoComponentProps {
  url: string
  title: string
  duration: number
  isDescription: boolean
}

const VideoComponent: types.Brick<VideoComponentProps> = ({
  url,
  title,
  duration,
  isDescription,
  ...rest
}) => {
  const renderDuration = (duration: number): string => {
    const minutes = duration / 60
    if (minutes <= 1) return `${minutes.toFixed(2)} Minute`
    return `${minutes.toFixed(2)} Minutes`
  }
  return (
    <div className={styles.details__video} {...rest}>
      {url && (
        <ReactPlayer url={url} width='100%' height='35rem' controls light />
      )}
      {(title || duration) && (
        <div className={styles.details__video_meta}>
          {title && <p>{title}</p>}
          {duration && <p>Duration | {renderDuration(duration)}</p>}
        </div>
      )}
      {isDescription && (
        <RichText
          propName='video description'
          placeholder='Type video description here...'
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
          ]}
          renderBlock={({ children }) => (
            <div className={styles.details__video_description}>
              <p>{children}</p>
            </div>
          )}
        />
      )}
    </div>
  )
}

VideoComponent.schema = {
  name: 'details-section-video',
  label: 'Details Section Video',
  category: 'Details Section',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    isDescription: false,
  }),
  sideEditProps: [
    {
      name: 'url',
      label: 'Video URL',
      type: types.SideEditPropType.Text,
      validate: (value) =>
        !value ||
        value.startsWith('https://') ||
        value.startsWith('http://') ||
        'Link must start with http:// or https://',
    },
    {
      name: 'title',
      label: 'Video Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'duration',
      label: 'Video Duration in seconds',
      type: types.SideEditPropType.Number,
    },
    {
      name: 'isDescription',
      label: 'show video Description',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default VideoComponent
