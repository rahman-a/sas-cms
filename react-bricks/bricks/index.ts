import { types } from 'react-bricks/frontend'
import {
  Announcement,
  Social,
  Footer,
  FooterLink,
  FooterLegalContainer,
  FooterLinksContainer,
} from '@components'
import {
  Carousel,
  CarouselItem,
  CarouselTab,
  DetailsSection,
  DetailsSectionImage,
  DetailsSectionVideo,
  DetailsSectionQuote,
} from '@components'
import { Button } from '@components/ui'
import {
  CardsWrapper,
  AdvantageCard,
  FeatureCard,
  ImageCard,
  MainCard,
  MeetCard,
  MoreCard,
  PopularCard,
  StaffCard,
} from '@components/Cards'
import { Section } from '@components/Layout'
import HeroUnit from './HeroUnit'

const bricks: types.Brick[] = [
  // General
  Announcement,
  Social,
  // UI
  Button,
  // Carousel,
  Carousel,
  CarouselItem,
  CarouselTab,
  // Details Section
  DetailsSection,
  DetailsSectionImage,
  DetailsSectionVideo,
  DetailsSectionQuote,
  // Cards
  CardsWrapper,
  AdvantageCard,
  FeatureCard,
  ImageCard,
  MainCard,
  MeetCard,
  MoreCard,
  PopularCard,
  StaffCard,
  // Layout
  Section,

  // Footer
  Footer,
  FooterLink,
  FooterLegalContainer,
  FooterLinksContainer,
]

export default bricks
