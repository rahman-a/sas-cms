import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import classnames from 'classnames'
import Link from 'next/link'
import CookiesTypes from './Cookies-Types'
import { types } from 'react-bricks/frontend'

const CookiePolicy: types.Brick = () => {
  const headerClasses = classnames(
    styles.legal__header,
    'scroll-article-content'
  )
  const subheaderClasses = classnames(
    styles.legal__subheader,
    'scroll-article-content'
  )

  return (
    <div className={styles.legal__cookie}>
      <div className={styles.legal__cookie_content}>
        <article className={styles.legal__article} data-bg>
          <div className={styles.legal__content}>
            <h2 className={headerClasses} id='what-are-cookies'>
              What are cookies?
            </h2>
            <p className={styles.legal__par}>
              Cookies are small text files that are placed on your computer by
              the websites that you visit. They are widely used in order to make
              websites work, or work more efficiently, as well as to provide
              information to the owners of the site. The use of cookies is now
              standard for most websites.
            </p>
          </div>
        </article>
        <article className={styles.legal__article}>
          <div className={styles.legal__content}>
            <h2 className={headerClasses} id='use-of-cookies-on-sas-websites'>
              Use of cookies on SAS websites
            </h2>
            <p className={styles.legal__par}>
              We utilise cookies, and other online identification technologies
              such as web beacons, or pixels to provide users with an improved
              user experience. By using this website or application you consent
              to the deployment of such identification technologies.
            </p>
            <h3 className={subheaderClasses} id='registered-users'>
              Registered users
            </h3>
            <p className={styles.legal__par}>
              We use these technologies to make navigation of the Websites
              easier for you and to better deliver tailored content to you. If
              you choose to become a Registered User, we will use cookies to
              facilitate your registration and remember your preferences. If you
              choose to become a Registered User, you will receive the benefits
              of registration only if you accept the strictly necessary cookies,
              which include those cookies used as part of registration.
            </p>
            <h3 className={subheaderClasses} id='analytics-site-statistics'>
              Analytics and site statistics
            </h3>
            <p className={styles.legal__par}>
              We also use these technologies to gather usage information and
              statistics regarding use of the Websites. For example, we collect
              information about page visits and navigation to determine what
              articles and topics are of greatest interest and if users are able
              to find content easily. Likewise, we collect information about
              which articles and videos are viewed and whether videos are viewed
              in their entirety to determine what content is of most interest to
              users. We also use usage information to generate various reports
              regarding use of the Websites. These reports contain aggregated
              information about users and do not single out users individually.
              If you are a Registered User we may also collect information on
              what specific interests you have, including what articles you have
              viewed on the site in order to understand what content interests
              you most.
            </p>
            <p className={styles.legal__par}>
              Information about the cookies used on our Websites can be found
              <Link href='/legal-notices/cookie-policy#cookie-disclosure'>
                <a className={styles.legal__link}> below</a>
              </Link>
              . Individual SAS sites may use additional cookies or third-party
              analytics tools. For more information about the cookies and
              third-party tools used on individual sites, please review the
              cookie information on the individual sites you visit
            </p>
            <h3 className={subheaderClasses} id='marketing-activities'>
              Measuring effectiveness of our activities
            </h3>
            <p className={styles.legal__par}>
              We may utilise online identification technologies from marketing
              partners, third party sites and social media platforms. These
              technologies help us measure the efficacy of our marketing and
              awareness campaigns and to understand how visitors navigate to the
              Websites from a SAS ad. We use these technologies to compile
              statistics about visitors who interact with the Websites and other
              SAS online content, to gauge the effectiveness of our ads, and to
              provide more pertinent information to our visitors.
            </p>
          </div>
        </article>
        <article className={styles.legal__article} data-bg>
          <div className={styles.legal__content}>
            <h2 className={headerClasses} id='managing-cookies-on-your-device'>
              Managing cookies on your device
            </h2>
            <p className={styles.legal__par}>
              You can control and manage cookies using your browser. Please note
              that removing or blocking cookies can impact your user experience
              and some functionality may no longer be available.
            </p>
            <h3 className={styles.legal__subheader}>
              Using your browser to control cookies
            </h3>
            <p className={styles.legal__par}>
              Most browsers allow you to view, manage, delete and block cookies
              for a website. Be aware that if you delete all cookies then any
              preferences you have set will be lost, including the ability to
              opt-out from cookies as this function itself requires placement of
              an opt out cookie on your device. Guidance on how to control
              cookies for common browsers is linked below.
            </p>
            <p className={styles.legal__par}>
              <Link href='https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en'>
                <a className={styles.legal__link} target='_blank'>
                  Google Chrome
                </a>
              </Link>
              <br />
              <br />
              <Link href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences'>
                <a className={styles.legal__link} target='_blank'>
                  Mozilla Firefox
                </a>
              </Link>
              <br />
              <br />
              <Link href='https://support.apple.com/kb/ph21411?locale=en_US'>
                <a className={styles.legal__link} target='_blank'>
                  MacOS Safari
                </a>
              </Link>
              <br />
              <br />
              <Link href='https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies'>
                <a className={styles.legal__link} target='_blank'>
                  Microsoft Internet Explorer
                </a>
              </Link>
            </p>
            <p className={styles.legal__par}>
              For information on additional browsers and device types please see
              <Link href='http://www.aboutcookies.org/'>
                <a className={styles.legal__link} target='_blank'>
                  http://www.aboutcookies.org/
                </a>
              </Link>
              or
              <Link href='http://www.cookiecentral.com/faq/'>
                <a className={styles.legal__link} target='_blank'>
                  http://www.cookiecentral.com/faq/.
                </a>
              </Link>
            </p>
            <h3 className={styles.legal__subheader}>
              Managing Analytics cookies
            </h3>
            <p className={styles.legal__par}>
              You can opt-out of having your anonymised browsing history within
              our websites or applications recorded by analytics cookies. We use
              the following service providers and you can learn more about their
              privacy policies and how to opt-out of their analytics cookies by
              clicking on following links:
            </p>
            <p className={styles.legal__par}>
              Adobe:
              <Link href='https://www.adobe.com/privacy/opt-out.html'>
                <a className={styles.legal__link} target='_blank'>
                  https://www.adobe.com/privacy/opt-out.html
                </a>
              </Link>
            </p>
            <p className={styles.legal__par}>
              Google Analytics:
              <Link href='https://www.google.com/analytics/learn/privacy.html'>
                <a className={styles.legal__link} target='_blank'>
                  https://www.google.com/analytics/learn/privacy.html
                </a>
              </Link>
            </p>
          </div>
        </article>
        <article className={styles.legal__article}>
          <div className={styles.legal__content}>
            <h2 className={styles.legal__header}>Cookie disclosure</h2>
            <p className={styles.legal__par}>
              The following section explains the types, categories, and purpose
              of cookies on the Websites. By using these Websites you consent to
              the deployment of cookies for the stated purpose.
            </p>
            <h3 className={styles.legal__subheader}>Types of cookies:</h3>
            <p className={styles.legal__par}>
              <strong>Session cookies: </strong>
              these cookies remain in your browser during your browser session
              only, i.e. until you leave the website.
            </p>
            <p className={styles.legal__par}>
              <strong>Persistent cookies: </strong>
              these cookies remain in your browser for a set period of time
              after the browser session (unless deleted by you).
            </p>
            <h3 className={styles.legal__subheader}>Categories of cookies:</h3>
            <p className={styles.legal__par}>
              <strong>Strictly Necessary Cookies: </strong>
              These cookies are fundamental to website functionality and cannot
              be switched off without blocking features on the site. They are
              usually set in response to your actions on the site, such as
              filling in forms, setting preferences, or logging in.
            </p>
            <p className={styles.legal__par}>
              <strong>Performance Cookies: </strong>
              These cookies allow us to gather analytics to improve the
              performance and functionality of our site. These analytics can
              include measurements on the popularity of a page, common patterns
              of how people browse around the site, and how frequently a certain
              feature is used. We usually aggregate the data for review but in
              some cases we may collect information on content you have viewed
              in order to understand what interests you most.
            </p>
            <p className={styles.legal__par}>
              <strong>Customization cookies: </strong>
              These cookies help us to understand how effective our marketing
              campaigns are, and enhance your online experiences with SAS with
              customization.
            </p>
            <p className={styles.legal__par}>
              <strong>Advertising cookies: </strong>
              SAS may present ads to you on sites that are not owned or operated
              by SAS to promote SAS services, articles or events. The cookies
              are used to make advertising messages more relevant to you and
              your interests. They also perform functions like preventing the
              same ad from continuously re-appearing. These advertisements are
              solely intended to make you aware of relevant SAS promotions. SAS
              does not sell your data to any third parties. Please see our
              <Link href='/legal-notices/privacy-policy'>
                <a className={styles.legal__link}>privacy policy</a>
              </Link>
              for more details.
            </p>
          </div>
        </article>
      </div>
      <CookiesTypes />
    </div>
  )
}

CookiePolicy.schema = {
  name: 'cookie-policy',
  label: 'Cookie Policy',
  category: 'Legal',
}

export default CookiePolicy
