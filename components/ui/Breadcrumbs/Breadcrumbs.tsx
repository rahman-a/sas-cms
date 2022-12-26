import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SimpleBar from 'simplebar-react'
import classnames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import 'simplebar/dist/simplebar.min.css'
import styles from './Breadcrumbs.module.scss'
import { Home } from '@components/icons'
import Link from 'next/link'
import { types } from 'react-bricks/frontend'

interface BreadcrumbsProps {}

type Breadcrumb = {
  _id: string
  title: string
  href: string
}

const Breadcrumbs: types.Brick<BreadcrumbsProps> = () => {
  const [path, setPath] = useState<Breadcrumb[]>([])
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const router = useRouter()
  const breadcrumbsContainerClasses = classnames('container', {
    'is-hidden': isHidden,
  })

  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split('?')[0]

    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0)
      .map((p) => {
        let idx = p.indexOf('#')
        if (idx > -1) {
          return p.substring(0, idx)
        }
        return p
      })

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/')
      // The title will just be the route string for now
      const title = subpath.split('-').join(' ')
      return { _id: uuidv4(), href, title }
    })

    return crumbList
  }

  useEffect(() => {
    setPath(generateBreadcrumbs())
    if (router.asPath === '/') {
      setIsHidden(true)
    }
  }, [router.asPath])
  return (
    <div className={breadcrumbsContainerClasses}>
      <SimpleBar>
        <div className={styles.breadcrumbs}>
          <Link href='/'>
            <a className={styles.breadcrumbs__item}>
              <Home /> &nbsp; SAS
            </a>
          </Link>
          {path.map((p) => (
            <Link key={p._id} href={p.href}>
              <a className={styles.breadcrumbs__item}>{p.title}</a>
            </Link>
          ))}
        </div>
      </SimpleBar>
    </div>
  )
}

Breadcrumbs.schema = {
  name: 'breadcrumbs',
  label: 'Breadcrumbs',
  category: 'UI',
}

export default Breadcrumbs
