import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'
import TabbedInterfaceContextProvider from '@context/Tabbed-Interface-Context'

const TabbedInterfaceContextWrapper: types.Brick = () => {
  return (
    <TabbedInterfaceContextProvider>
      <Repeater propName='tabbedinterfacewrapper' />
    </TabbedInterfaceContextProvider>
  )
}

TabbedInterfaceContextWrapper.schema = {
  name: 'tabbedinterfacecontextwrapper',
  label: 'Tabbed Interface Context',
  category: 'Tabbed Interface',
  getDefaultProps: () => ({
    tabbedinterfacewrapper: [
      {
        isEdit: false,
        tabtitlewrapper: [
          {
            headerType: 'h1',
            bold: 'lighter',
            textColor: '#2d2d2d',
            padding: '0.5rem',
            margin: '0.5rem',
            titleText: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'How SAS can help',
                  },
                ],
              },
            ],
            font: 'font1',
          },
        ],
        tabscontainerwrapper: [
          {
            isEdit: false,
            tabbedlistitemwrapper: [
              {
                isEdit: false,
                linkId: 'tab-one',
                tabTitle: 'End-to end value chain agility',
              },
              {
                isEdit: false,
                linkId: 'tab-two',
                tabTitle: 'Efficiency achieved. Workforce transformed',
              },
              {
                isEdit: false,
                linkId: 'tab-three',
                tabTitle: 'Command of local regulations',
              },
              {
                isEdit: false,
                linkId: 'tab-four',
                tabTitle: 'Electric or autonomous—we’re good to go',
              },
            ],
          },
        ],
        contentcontainerwrapper: [
          {
            isEdit: false,
            tabcontentwrapper: [
              {
                isEdit: false,
                tabcontenttitle: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'End-to end value chain agility',
                      },
                    ],
                  },
                ],
                tabcontentdescription: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Emerging transportation models will pose new demands on product development, supply chain efficiency, sustainability and local regulations. But they also present new ways to create value.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'We convene knowledge, expertise and unique capabilities from across PwC to identify new opportunities across the value chain, and help you bring them to life. Together, we can help you enter new sub-industries, reduce risk,digitise your supply chain and implement agile operating systems. And our digital insights, experience and proprietary tools help you reshape your value chain to excel today and in the future.',
                      },
                    ],
                  },
                ],
                linkContentId: 'tab-one',
              },
              {
                isEdit: false,
                tabcontenttitle: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Efficiency achieved. Workforce transformed',
                      },
                    ],
                  },
                ],
                tabcontentdescription: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'We help keep you prepared for the curves ahead by improving operational efficiency, building flexibility and reducing costs. These moves help to achieve profitability and growth—however the market evolves.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'To stay competitive, you need to bring your workforce along on this journey. Our comprehensive, targeted workforce strategies fill talent gaps through upskilling and digital capability building—and help you achieve lasting change through a culture of performance and excellence.',
                      },
                    ],
                  },
                ],
                spacerwrapper: [
                  {
                    isEdit: false,
                    marginTop: 'large',
                    marginBottom: 'small',
                    height: 'medium',
                  },
                ],
                tabcontentbutton: [
                  {
                    variant: 'gray-outlined',
                    text: 'Learn more from our specialists blogs',
                    disabled: false,
                    rounded: false,
                    icon: 'arrow',
                  },
                ],
                linkContentId: 'tab-two',
              },
              {
                isEdit: false,
                tabcontenttitle: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Command of local regulations',
                      },
                    ],
                  },
                ],
                tabcontentdescription: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'The Smart Mobility ecosystem holds promise for faster, safer, cleaner and digitally connected transportation models. These models can benefit economies and transform societies for the better. But they also come with new risks, regulations and legal considerations. Legislation governing these changes is evolving at different speeds from one country to the next.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'We bring our global connections and resources, local legislative and customer insights and deep industry experience to navigate this changing terrain. Paired with our understanding of risk, regulatory and legal environments in target markets, we’re ready to help you identify the right strategic decisions, investments and priorities.',
                      },
                    ],
                  },
                ],
                linkContentId: 'tab-three',
              },
              {
                isEdit: false,
                tabcontenttitle: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Electric or autonomous—we’re good to go',
                      },
                    ],
                  },
                ],
                tabcontentdescription: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'The Smart Mobility ecosystem holds promise for faster, safer, cleaner and digitally connected transportation models. These models can benefit economies and transform societies for the better. But they also come with new risks, regulations and legal considerations. Legislation governing these changes is evolving at different speeds from one country to the next.',
                      },
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'We bring our global connections and resources, local legislative and customer insights and deep industry experience to navigate this changing terrain. Paired with our understanding of risk, regulatory and legal environments in target markets, we’re ready to help you identify the right strategic decisions, investments and priorities.',
                      },
                    ],
                  },
                ],
                linkContentId: 'tab-four',
              },
            ],
          },
        ],
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'tabbedinterfacewrapper',
      itemLabel: 'Tabbed Interface',
      itemType: 'tabbedinterface',
      max: 1,
    },
  ],
}

export default TabbedInterfaceContextWrapper
