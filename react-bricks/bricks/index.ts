import { types } from 'react-bricks/frontend'
import {
  Announcement,
  Social,
  Footer,
  FooterLink,
  FooterLegalContainer,
  FooterLinksContainer,
  HeaderContainer,
  Header,
  HeaderLogo,
  HeaderNavbar,
  HeaderOption,
  HeaderDropdownMenu,
  HeaderLink,
  HeaderSearch,
  HeaderSubmenu,
  HeaderSubmenuLevel1,
  HeaderSubmenuLevel2,
  HeaderSubmenuLevel3,
  FeaturedPosts,
  FeaturedPost,
  HeaderTerritoriesList,
} from '@components'
import {
  Carousel,
  CarouselItem,
  CarouselTab,
  DetailsSection,
  DetailsSectionImage,
  DetailsSectionVideo,
  DetailsSectionQuote,
  HeroSection,
  HeaderText,
  Accordion,
  AccordionColumn,
  AccordionItem,
  AccordionSubmenuContainer,
  AccordionLink,
} from '@components'
import {
  Button,
  DropdownMenu,
  DropdownListItem,
  Breadcrumbs,
  CopyBox,
} from '@components/ui'
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
// import HeroUnit from './HeroUnit'

/////////////////////////
/// General Bricks
/////////////////////////
const GeneralBricks = [Announcement, Social, HeroSection]

/////////////////////////
/// UI Bricks
/////////////////////////
const UIBricks = [Button, DropdownMenu, DropdownListItem, Breadcrumbs, CopyBox]

/////////////////////////
/// Carousel Bricks
/////////////////////////
const CarouselBricks = [Carousel, CarouselItem, CarouselTab]

/////////////////////////
/// Details Section Bricks
/////////////////////////
const DetailsSectionBricks = [
  DetailsSection,
  DetailsSectionImage,
  DetailsSectionVideo,
  DetailsSectionQuote,
]

/////////////////////////
/// Cards Bricks
/////////////////////////
const CardsBricks = [
  CardsWrapper,
  AdvantageCard,
  FeatureCard,
  ImageCard,
  MainCard,
  MeetCard,
  MoreCard,
  PopularCard,
  StaffCard,
]

/////////////////////////
/// Layout Bricks
/////////////////////////
const LayoutBricks = [Section]

/////////////////////////
/// Header Bricks
/////////////////////////
const HeaderBricks = [
  HeaderContainer,
  Header,
  HeaderLogo,
  HeaderNavbar,
  HeaderDropdownMenu,
  HeaderOption,
  HeaderLink,
  HeaderSearch,
  HeaderSubmenu,
  HeaderSubmenuLevel1,
  HeaderSubmenuLevel2,
  HeaderSubmenuLevel3,
  FeaturedPosts,
  FeaturedPost,
  HeaderTerritoriesList,
]

/////////////////////////
/// Footer Bricks
/////////////////////////
const FooterBricks = [
  Footer,
  FooterLink,
  FooterLegalContainer,
  FooterLinksContainer,
]

/////////////////////////
/// Typography Bricks
/////////////////////////
const TypographyBricks = [HeaderText]

/////////////////////////
/// Accordion Bricks
/////////////////////////
const AccordionBricks = [
  Accordion,
  AccordionColumn,
  AccordionItem,
  AccordionSubmenuContainer as unknown as types.Brick,
  AccordionLink,
]

const bricks: types.Brick[] = [
  // General
  ...GeneralBricks,
  // UI
  ...UIBricks,
  // Carousel,
  ...CarouselBricks,
  // Details Section
  ...DetailsSectionBricks,
  // Cards
  ...CardsBricks,
  // Layout
  ...LayoutBricks,
  // Header
  ...HeaderBricks,
  // Footer
  ...FooterBricks,
  // Typography
  ...TypographyBricks,
  // Accordion
  ...AccordionBricks,
]

export default bricks
