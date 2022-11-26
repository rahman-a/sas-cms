import React from 'react'
import FilterListContextProvider from '@context/Filter-List'
import { types, Repeater } from 'react-bricks/frontend'
const FilterContext: types.Brick = () => {
  return (
    <FilterListContextProvider>
      <Repeater propName='filterlistwrapper' />
    </FilterListContextProvider>
  )
}
FilterContext.schema = {
  name: 'filterlistcontext',
  label: 'Filter List Context',
  category: 'Filter List',
  getDefaultProps: () => ({
    filterlistwrapper: [
      {
        'filter title': [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Learn more about risk and regulatory risks by industry',
              },
            ],
          },
        ],
        filtertabwrapper: [
          {
            isEdit: false,
            filteritembutton: [
              {
                variant: 'gray-outlined',
                text: 'financial services',
                disabled: false,
                rounded: true,
              },
            ],
            tabId: 'tab-one',
          },
          {
            isEdit: false,
            filteritembutton: [
              {
                variant: 'gray-outlined',
                text: 'health industries',
                disabled: false,
                rounded: true,
              },
            ],
            tabId: 'tab-two',
          },
          {
            isEdit: false,
            filteritembutton: [
              {
                variant: 'gray-outlined',
                text: 'energy, utilities & resources',
                disabled: false,
                rounded: true,
              },
            ],
            tabId: 'tab-three',
          },
          {
            isEdit: false,
            filteritembutton: [
              {
                variant: 'gray-outlined',
                text: 'technology, media & telecom',
                disabled: false,
                rounded: true,
              },
            ],
            tabId: 'tab-four',
          },
        ],
        filteritemwrapper: [
          {
            isEdit: false,
            'list title': [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Financial Services',
                  },
                ],
              },
            ],
            filteritemlist: [
              {
                isEdit: false,
                listitemwrapper: [
                  {
                    isEdit: false,
                    itemtext: 'AML',
                    itemlink: 'https://www.sas.com',
                  },
                  {
                    isEdit: false,
                    itemtext: 'LIBOR',
                    itemlink: 'link',
                  },
                  {
                    isEdit: false,
                    itemtext: 'BASEL IV',
                    itemlink: 'link',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Tax Compliance',
                    itemlink: 'link',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Customer Authentication',
                    itemlink: 'link',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Data Protection',
                    itemlink: 'link',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Contract Compliance',
                    itemlink: 'link',
                  },
                ],
              },
            ],
            tabId: 'tab-one',
          },
          {
            isEdit: false,
            'list title': [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Health Industries',
                  },
                ],
              },
            ],
            tabId: 'tab-two',
            filteritemlist: [
              {
                isEdit: false,
                listitemwrapper: [
                  {
                    isEdit: false,
                    itemtext: 'Privacy & Security',
                    itemlink: 'link',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Data',
                    itemlink: 'Data',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Regulatory Reform',
                    itemlink: 'Regulatory Reform',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Pharmacovigilance',
                    itemlink: 'Pharmacovigilance',
                  },
                  {
                    isEdit: false,
                    itemtext: 'GxP',
                    itemlink: 'GxP',
                  },
                ],
              },
            ],
          },
          {
            isEdit: false,
            'list title': [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Energy, Utilities & Resources',
                  },
                ],
              },
            ],
            tabId: 'tab-three',
            filteritemlist: [
              {
                isEdit: false,
                listitemwrapper: [
                  {
                    isEdit: false,
                    itemtext: 'ESG',
                    itemlink: 'ESG',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Supply Chain',
                    itemlink: 'Supply Chain',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Market And Rate Regulations',
                    itemlink: 'Market And Rate Regulations',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Utilities Consumer Protection',
                    itemlink: 'Utilities Consumer Protection',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Infrastructure Security & Incident Management',
                    itemlink: 'Infrastructure ',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Transfer Pricing',
                    itemlink: 'Transfer Pricing',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Land And Mineral Rights Use',
                    itemlink: 'Mineral ',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Hazard & Safety',
                    itemlink: 'Hazard & Safety',
                  },
                ],
              },
            ],
          },
          {
            isEdit: false,
            'list title': [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Technology, Media & Telecom',
                  },
                ],
              },
            ],
            filteritemlist: [
              {
                isEdit: false,
                listitemwrapper: [
                  {
                    isEdit: false,
                    itemtext: 'Privacy',
                    itemlink: 'Privacy',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Piracy/Intellectual Property',
                    itemlink: 'Piracy/Intellectual Property',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Telecom Regulation',
                    itemlink: 'Telecom Regulation',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Net Neutrality',
                    itemlink: 'Net Neutrality',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Contract Compliance',
                    itemlink: 'Contract Compliance',
                  },
                  {
                    isEdit: false,
                    itemtext: 'Channel Partner Compliance',
                    itemlink: 'Channel Partner Compliance',
                  },
                  {
                    isEdit: false,
                    itemtext: 'PCI Compliance',
                    itemlink: 'PCI Compliance',
                  },
                  {
                    isEdit: false,
                    itemtext: 'IoT Regulation',
                    itemlink: 'IoT Regulation',
                  },
                ],
              },
            ],
            tabId: 'tab-four',
          },
        ],
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'filterlistwrapper',
      itemLabel: 'Filter List',
      itemType: 'filterlist',
      max: 1,
    },
  ],
}
export default FilterContext
