import React from 'react'
import TabbedNavbarContextProvider from '@context/Tabbed-Navbar-Context'
import { types, Repeater } from 'react-bricks/frontend'

const TabbedNavbarContextWrapper: types.Brick = () => {
  return (
    <TabbedNavbarContextProvider>
      <Repeater propName='tabbednavbarwrapper' />
    </TabbedNavbarContextProvider>
  )
}

TabbedNavbarContextWrapper.schema = {
  name: 'tabbednavbarcontextwrapper',
  label: 'Tabbed Navbar Context',
  category: 'Tabbed Navbar',
  getDefaultProps: () => ({
    tabbednavbarwrapper: [
      {
        isEdit: false,
        tabbednavbaritemwrapper: [
          {
            isEdit: false,
            isImage: true,
            activeTabId: 'tab-one',
            labelText: 'prepare',
            tabbednavbaritemicon: {
              src: 'https://images.reactbricks.com/original/1b9b987b-75a2-4c05-b3db-b1d269962e36.svg',
              placeholderSrc:
                'https://images.reactbricks.com/original/1b9b987b-75a2-4c05-b3db-b1d269962e36.svg',
              srcSet: '',
              width: 132,
              height: 132,
              alt: 'prepare tab',
              seoName: 'prepare-tab',
            },
          },
          {
            isEdit: false,
            isImage: true,
            activeTabId: 'tab-two',
            labelText: 'Respond',
            tabbednavbaritemicon: {
              src: 'https://images.reactbricks.com/original/060f87ed-6ee5-493a-856a-2b49e8c71d13.svg',
              placeholderSrc:
                'https://images.reactbricks.com/original/060f87ed-6ee5-493a-856a-2b49e8c71d13.svg',
              srcSet: '',
              width: 132,
              height: 132,
              alt: 'tab respond',
              seoName: 'respond-tab',
            },
          },
          {
            isEdit: false,
            isImage: true,
            activeTabId: 'tab-three',
            labelText: 'emerge resilient',
            tabbednavbaritemicon: {
              src: 'https://images.reactbricks.com/original/47f8d30d-6a62-4c10-bace-7bee9c106924.svg',
              placeholderSrc:
                'https://images.reactbricks.com/original/47f8d30d-6a62-4c10-bace-7bee9c106924.svg',
              srcSet: '',
              width: 132,
              height: 132,
              alt: 'emerge resilient',
              seoName: 'emerge-resilient',
            },
          },
        ],
        tabbednavbarcontentwrapper: [
          {
            isEdit: false,
            tabcontentid: 'tab-one',
            tabbednavbarcontent: [
              {
                isTitle: true,
                isDescription: true,
                halfWidth: false,
                reverse: false,
                title: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Build Resilience Before A Crisis Hits',
                      },
                    ],
                  },
                ],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'The more prepared an organisation is to manage a crisis, the more confidently it can avert existential threats in an emergency. PwC can support you with numerous measures to ensure you have all the tools you need in a crisis – from developing crisis plans and holding crisis training to creating an integrated crisis management program.',
                      },
                    ],
                  },
                ],
                'details-button': [
                  {
                    variant: 'gray-outlined',
                    text: 'Find out more',
                    disabled: false,
                    rounded: false,
                  },
                ],
                'details-image': [
                  {
                    'details image': {
                      fallbackSrc:
                        'https://images.reactbricks.com/original/48b39a14-4c58-42fa-a9e5-adc447ab54b4.jpg',
                      fallbackSrcSet:
                        'https://images.reactbricks.com/src_set/48b39a14-4c58-42fa-a9e5-adc447ab54b4-670.jpg 670w,\nhttps://images.reactbricks.com/src_set/48b39a14-4c58-42fa-a9e5-adc447ab54b4-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/48b39a14-4c58-42fa-a9e5-adc447ab54b4-200.jpg 200w',
                      fallbackType: 'image/jpeg',
                      src: 'https://images.reactbricks.com/original/48b39a14-4c58-42fa-a9e5-adc447ab54b4.webp',
                      placeholderSrc:
                        'https://images.reactbricks.com/placeholder/48b39a14-4c58-42fa-a9e5-adc447ab54b4.jpg',
                      srcSet:
                        'https://images.reactbricks.com/src_set/48b39a14-4c58-42fa-a9e5-adc447ab54b4-670.webp 670w,\nhttps://images.reactbricks.com/src_set/48b39a14-4c58-42fa-a9e5-adc447ab54b4-400.webp 400w,\nhttps://images.reactbricks.com/src_set/48b39a14-4c58-42fa-a9e5-adc447ab54b4-200.webp 200w',
                      width: 670,
                      height: 377,
                      alt: 'Resilience Before A Crisis ',
                      seoName: 'resilience-before-crisis',
                    },
                  },
                ],
              },
            ],
          },
          {
            isEdit: false,
            tabbednavbarcontent: [
              {
                isTitle: true,
                isDescription: true,
                halfWidth: false,
                reverse: false,
                title: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Build Confidence And Take Control',
                      },
                    ],
                  },
                ],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'The right planning, targeted initiatives, and a clear strategy form the basis for coordinated and effective crisis management. PwC reviews, assesses, and refines your strategy and equips you with all the capabilities you need to respond effectively in times of crisis. These measures include setting up a crisis management group and leveraging the right data for making decisions. Core elements in a successful crisis response include:',
                      },
                    ],
                  },
                ],
                'details-button': [
                  {
                    variant: 'gray-outlined',
                    text: 'Find out more',
                    disabled: false,
                    rounded: false,
                  },
                ],
                'details-image': [
                  {
                    'details image': {
                      fallbackSrc:
                        'https://images.reactbricks.com/original/1747fa07-ea61-4ff1-982e-e16cb302c046.jpg',
                      fallbackSrcSet:
                        'https://images.reactbricks.com/src_set/1747fa07-ea61-4ff1-982e-e16cb302c046-670.jpg 670w,\nhttps://images.reactbricks.com/src_set/1747fa07-ea61-4ff1-982e-e16cb302c046-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/1747fa07-ea61-4ff1-982e-e16cb302c046-200.jpg 200w',
                      fallbackType: 'image/jpeg',
                      src: 'https://images.reactbricks.com/original/1747fa07-ea61-4ff1-982e-e16cb302c046.webp',
                      placeholderSrc:
                        'https://images.reactbricks.com/placeholder/1747fa07-ea61-4ff1-982e-e16cb302c046.jpg',
                      srcSet:
                        'https://images.reactbricks.com/src_set/1747fa07-ea61-4ff1-982e-e16cb302c046-670.webp 670w,\nhttps://images.reactbricks.com/src_set/1747fa07-ea61-4ff1-982e-e16cb302c046-400.webp 400w,\nhttps://images.reactbricks.com/src_set/1747fa07-ea61-4ff1-982e-e16cb302c046-200.webp 200w',
                      width: 670,
                      height: 377,
                      alt: 'Confidence And Take Control',
                      seoName: 'confidenece-and-take-control',
                    },
                  },
                ],
              },
            ],
            tabcontentid: 'tab-two',
          },
          {
            isEdit: false,
            tabbednavbarcontent: [
              {
                isTitle: true,
                isDescription: true,
                halfWidth: false,
                reverse: false,
                title: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Emerge From A Crisis Stronger, Sooner, And More Resilient',
                      },
                    ],
                  },
                ],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'There should always be an eye to the future.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'In the wake of any crisis, the most successful organisations are those that invested in learning lessons, implementing changes, and leveraging opportunities.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'The effects of a crisis can often be long-lasting. As you recover, you stabilise your operations and adapt to a new “business as usual”. Your recovery from a crisis can become an opportunity for new growth. In order to seize these opportunities, you develop and implement new business strategies, reflecting and taking actions on the lessons learned. These actions will help your organisation become more resilient and have stronger capabilities for crisis management in the future.',
                      },
                    ],
                  },
                ],
                'details-button': [
                  {
                    variant: 'gray-outlined',
                    text: 'Find out more',
                    disabled: false,
                    rounded: false,
                  },
                ],
                'details-image': [
                  {
                    'details image': {
                      fallbackSrc:
                        'https://images.reactbricks.com/original/ab94306b-4117-4bc2-9289-a00371c0642b.jpg',
                      fallbackSrcSet:
                        'https://images.reactbricks.com/src_set/ab94306b-4117-4bc2-9289-a00371c0642b-670.jpg 670w,\nhttps://images.reactbricks.com/src_set/ab94306b-4117-4bc2-9289-a00371c0642b-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/ab94306b-4117-4bc2-9289-a00371c0642b-200.jpg 200w',
                      fallbackType: 'image/jpeg',
                      src: 'https://images.reactbricks.com/original/ab94306b-4117-4bc2-9289-a00371c0642b.webp',
                      placeholderSrc:
                        'https://images.reactbricks.com/placeholder/ab94306b-4117-4bc2-9289-a00371c0642b.jpg',
                      srcSet:
                        'https://images.reactbricks.com/src_set/ab94306b-4117-4bc2-9289-a00371c0642b-670.webp 670w,\nhttps://images.reactbricks.com/src_set/ab94306b-4117-4bc2-9289-a00371c0642b-400.webp 400w,\nhttps://images.reactbricks.com/src_set/ab94306b-4117-4bc2-9289-a00371c0642b-200.webp 200w',
                      width: 670,
                      height: 377,
                      alt: 'Emerge From A Crisis Stronger',
                      seoName: 'emerge-crisis-stronger-resilient',
                    },
                  },
                ],
              },
            ],
            tabcontentid: 'tab-three',
          },
        ],
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'tabbednavbarwrapper',
      itemLabel: 'Tabbed Navbar',
      itemType: 'tabbednavbar',
      max: 1,
    },
  ],
}

export default TabbedNavbarContextWrapper
