import React from 'react'
import styles from './Accordion.module.scss'
import classnames from 'classnames'
import { types, Repeater } from 'react-bricks/frontend'

interface AccordionProps {
  isEdit?: boolean
}

const Accordion: types.Brick<AccordionProps> = ({ isEdit }) => {
  const accordionClasses = classnames(styles.accordion, {
    'playground__brick--edit': isEdit,
  })
  return (
    <div className={accordionClasses}>
      <div className={styles.accordion__wrapper}>
        <Repeater propName='accordioncolumns' />
      </div>
    </div>
  )
}

Accordion.schema = {
  name: 'accordion',
  label: 'Accordion',
  category: 'Accordion',
  getDefaultProps: () => ({
    isEdit: false,
    accordioncolumns: [
      {
        isEdit: false,
        accordionitems: [
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Aerospace, defense & security',
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Automotive',
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Capital projects & infrastructure',
              },
            ],
          },
          {
            isSubmenu: true,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Energy, utilities & resources',
              },
            ],
            accordionitemscontainer: [
              {
                isEdit: false,
                accordionitemlink: [
                  {
                    isEdit: false,
                    linkText: 'Chemicals',
                  },
                  {
                    isEdit: false,
                    linkText: 'Mining & Metals',
                  },
                  {
                    isEdit: false,
                    linkText: 'Oil & Gas',
                  },
                  {
                    isEdit: false,
                    linkText: 'Power & Utilities',
                  },
                ],
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Forest, paper & packaging',
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Consumer markets',
              },
            ],
          },
          {
            isSubmenu: true,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Government & public services',
              },
            ],
            accordionitemscontainer: [
              {
                isEdit: false,
                accordionitemlink: [
                  {
                    isEdit: false,
                    linkText: 'Defense',
                  },
                  {
                    isEdit: false,
                    linkText: 'Education',
                  },
                  {
                    isEdit: false,
                    linkText: 'International development',
                  },
                  {
                    isEdit: false,
                    linkText: 'Security',
                  },
                ],
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Healthcare',
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Industrial manufacturing',
              },
            ],
          },
        ],
      },
      {
        isEdit: false,
        accordionitems: [
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Insurance',
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Pharmaceuticals & life sciences',
              },
            ],
          },
          {
            isSubmenu: true,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Private equity',
              },
            ],
            accordionitemscontainer: [
              {
                isEdit: false,
                accordionitemlink: [
                  {
                    isEdit: false,
                    linkText: 'Sovereign investment funds',
                  },
                ],
              },
            ],
          },
          {
            isSubmenu: true,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Technology, media & Telecommunications',
              },
            ],
            accordionitemscontainer: [
              {
                isEdit: false,
                accordionitemlink: [
                  {
                    isEdit: false,
                    linkText: 'Communications',
                  },
                  {
                    isEdit: false,
                    linkText: 'Media',
                  },
                  {
                    isEdit: false,
                    linkText: 'Technology',
                  },
                ],
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Transportation & logistics',
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Hospitality & leisure',
              },
            ],
          },
          {
            isSubmenu: true,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Financial services',
              },
            ],
            accordionitemscontainer: [
              {
                isEdit: false,
                accordionitemlink: [
                  {
                    isEdit: false,
                    linkText: 'Banking & capital markets',
                  },
                  {
                    isEdit: false,
                    linkText: 'Asset & wealth management',
                  },
                  {
                    isEdit: false,
                    linkText: 'Insurance',
                  },
                ],
              },
            ],
          },
          {
            isSubmenu: false,
            accordionitemlink: [
              {
                isEdit: false,
                linkText: 'Engineering & construction',
              },
            ],
          },
        ],
      },
    ],
  }),
  sideEditProps: [
    {
      name: 'isEdit',
      label: 'Edit Mode',
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: 'accordioncolumns',
      itemLabel: 'Accordion Column',
      itemType: 'accordioncolumn',
      max: 3,
    },
  ],
}

export default Accordion
