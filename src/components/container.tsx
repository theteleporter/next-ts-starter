import { clsx } from 'clsx'
import * as React from 'react'

type BaseProps = React.ComponentPropsWithoutRef<'div'> & {
  as?: 'div' | 'section'
}

export const Container = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, as = 'div', ...props }, ref) => {
    const Element: React.ElementType = as
    return (
      <Element
        {...props}
        className={clsx(
          // TODO: Put some padding, max width, and margin-x auto in here!
          className
        )}
        ref={ref}
      />
    )
  }
)

Container.displayName = 'Container'

export type ContainerProps = React.ComponentProps<typeof Container>
