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
  TabbedInterfaceContext,
  TabbedInterface,
  TabbedInterfaceTabsContainer,
  TabbedInterfaceContentContainer,
  TabbedInterfaceContent,
  TabbedInterfaceItem,
  TabbedNavbarContext,
  TabbedNavbar,
  TabbedNavbarContent,
  TabbedNavbarItem,
} from '@components'
import {
  FilterContext,
  FilterTab,
  FilterContent,
  FilterItem,
  WebTile,
  CareerHeroSection,
  StaffMeetSection,
  JobSearchSection,
  ContactUsSection,
  Sitemap,
  SitemapColumn,
  SitemapLink,
  Paragraph,
  CookiePolicy,
  Map,
} from '@components'
import {
  Button,
  DropdownMenu,
  DropdownListItem,
  Breadcrumbs,
  CopyBox,
  List,
  ListItem,
  NestedList,
  NestedListItem,
  FlatList,
  FlatListItem,
  DetailsList,
  DetailsListItem,
  ImageCube,
  FloatPageIndex,
  FloatPageIndexItem,
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
import {
  Section,
  Spacer,
  FloatContainer,
  FloatContent,
  Row,
  Column,
} from '@components/Layout'
// import HeroUnit from './HeroUnit'

/////////////////////////
/// General Bricks
/////////////////////////
const GeneralBricks = [
  Announcement,
  Social,
  HeroSection,
  WebTile,
  CareerHeroSection,
  StaffMeetSection,
  JobSearchSection,
  ContactUsSection,
  Map,
]

/////////////////////////
/// UI Bricks
/////////////////////////
const UIBricks = [
  Button,
  DropdownMenu,
  DropdownListItem,
  Breadcrumbs,
  CopyBox,
  List,
  ListItem,
  NestedList,
  NestedListItem,
  FlatList,
  FlatListItem,
  DetailsList,
  DetailsListItem,
  ImageCube,
  FloatPageIndex,
  FloatPageIndexItem,
]

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
const LayoutBricks = [
  Section,
  Spacer,
  FloatContainer,
  FloatContent,
  Row,
  Column,
]

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
const TypographyBricks = [HeaderText, Paragraph]

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

/////////////////////////
/// Tabbed Interface Bricks
/////////////////////////
const TabbedInterfaceBricks = [
  TabbedInterfaceContext,
  TabbedInterface,
  TabbedInterfaceTabsContainer,
  TabbedInterfaceContentContainer,
  TabbedInterfaceContent,
  TabbedInterfaceItem,
]

/////////////////////////
/// Tabbed Navbar Bricks
/////////////////////////
const TabbedNavbarBricks = [
  TabbedNavbarContext,
  TabbedNavbar,
  TabbedNavbarContent,
  TabbedNavbarItem,
]

/////////////////////////
/// Filter List Bricks
/////////////////////////
const FilterBricks = [FilterContext, FilterTab, FilterContent, FilterItem]

/////////////////////////
/// Sitemap Bricks
/////////////////////////
const SitemapBricks = [Sitemap, SitemapColumn, SitemapLink]

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
  // Tabbed Interface Bricks
  ...TabbedInterfaceBricks,
  // Tabbed Navbar Bricks
  ...TabbedNavbarBricks,
  // Filter List Bricks
  ...FilterBricks,
  // Sitemap Bricks
  ...SitemapBricks,
  // Legal Bricks
  CookiePolicy,
]

export default bricks
