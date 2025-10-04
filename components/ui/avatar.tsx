'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'

/**
 * Avatar container component that renders a styled AvatarPrimitive.Root.
 *
 * Merges the provided `className` with the component's default avatar styles and forwards remaining props to the underlying Root element.
 *
 * @param className - Additional CSS classes appended to the default avatar styles.
 * @returns The AvatarPrimitive.Root element with composed classes and forwarded props.
 */
function Avatar({
    className,
    ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
    return (
        <AvatarPrimitive.Root
            data-slot='avatar'
            className={cn(
                'relative flex size-8 shrink-0 overflow-hidden rounded-full',
                className,
            )}
            {...props}
        />
    )
}

/**
 * Renders the avatar image element with default sizing and optional className overrides.
 *
 * @returns The AvatarPrimitive.Image element configured for avatar display
 */
function AvatarImage({
    className,
    ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
    return (
        <AvatarPrimitive.Image
            data-slot='avatar-image'
            className={cn('aspect-square size-full', className)}
            {...props}
        />
    )
}

/**
 * Renders the avatar fallback element used when the avatar image is not available.
 *
 * @returns An AvatarPrimitive.Fallback element with centered, rounded styling that displays fallback content.
 */
function AvatarFallback({
    className,
    ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
    return (
        <AvatarPrimitive.Fallback
            data-slot='avatar-fallback'
            className={cn(
                'bg-muted flex size-full items-center justify-center rounded-full',
                className,
            )}
            {...props}
        />
    )
}

export { Avatar, AvatarImage, AvatarFallback }