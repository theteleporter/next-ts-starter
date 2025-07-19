import type { UrlObject } from 'node:url'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import * as React from 'react'

import { canPrefetch as defaultCanPrefetch } from '~/lib/utils/can-prefetch'
import { checkIsExternal } from '~/lib/utils/router'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type LinkProps = {
  children: React.ReactNode
  canPrefetch?: (href: string | UrlObject) => boolean
} & Omit<AnchorProps, 'children'> &
  Omit<NextLinkProps, 'as' | 'passHref' | 'children'>

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, ...restProps }, ref) => {
    const {
      href,
      canPrefetch = defaultCanPrefetch,
      replace,
      scroll = false,
      shallow,
      prefetch,
      ...aProps
    } = restProps

    const isExternal = checkIsExternal(href)
    const canPrefetchHref = href && canPrefetch(href)
    const shouldPrefetch = prefetch && canPrefetchHref

    const anchorProps = {
      ...(isExternal ? { rel: 'noopener noreferrer', target: '_blank' } : {}),
      ...aProps
    }

    if (!href) {
      console.warn('Link component is missing an href prop.')
      return null
    }

    return (
      <NextLink
        className={className}
        href={href}
        prefetch={shouldPrefetch ? undefined : false}
        ref={ref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        {...anchorProps}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'
export default Link
