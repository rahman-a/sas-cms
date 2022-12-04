import { types } from 'react-bricks/frontend'

const pageTypes: types.IPageType[] = [
  {
    name: 'page',
    pluralName: 'pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  {
    name: 'industry',
    pluralName: 'industries',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Draft,
    getDefaultContent: () => [],
  },
  {
    name: 'service',
    pluralName: 'services',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Draft,
    getDefaultContent: () => [],
  },
  {
    name: 'issue',
    pluralName: 'issues',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Draft,
    getDefaultContent: () => [],
  },
  {
    name: 'career',
    pluralName: 'careers',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Draft,
    getDefaultContent: () => [],
  },
  {
    name: 'legal',
    pluralName: 'legal pages',
    defaultLocked: false,
    defaultStatus: types.PageStatus.Draft,
    getDefaultContent: () => [],
  },
]

export default pageTypes
