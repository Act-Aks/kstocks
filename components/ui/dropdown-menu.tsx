'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

/**
 * Renders the dropdown menu root element and forwards all received props.
 *
 * @returns The dropdown menu root element with data-slot 'dropdown-menu'
 */
function DropdownMenu({
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
    return <DropdownMenuPrimitive.Root data-slot='dropdown-menu' {...props} />
}

/**
 * Renders a Portal configured for dropdown menu content and attaches the `data-slot='dropdown-menu-portal'` attribute.
 *
 * @returns A Portal element configured for rendering dropdown menu content
 */
function DropdownMenuPortal({
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
    return (
        <DropdownMenuPrimitive.Portal
            data-slot='dropdown-menu-portal'
            {...props}
        />
    )
}

/**
 * Renders the dropdown menu trigger element with standardized attributes and forwarded props.
 *
 * @returns The DropdownMenu trigger element with `data-slot='dropdown-menu-trigger'` and all provided props applied.
 */
function DropdownMenuTrigger({
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
    return (
        <DropdownMenuPrimitive.Trigger
            data-slot='dropdown-menu-trigger'
            {...props}
        />
    )
}

/**
 * Renders dropdown menu content inside a portal with consistent styling and an adjustable side offset.
 *
 * @param className - Additional CSS classes to apply to the content container.
 * @param sideOffset - Distance in pixels between the trigger and the content (default: 4).
 * @returns The dropdown menu content element wrapped in a portal.
 */
function DropdownMenuContent({
    className,
    sideOffset = 4,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
    return (
        <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
                data-slot='dropdown-menu-content'
                sideOffset={sideOffset}
                className={cn(
                    'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
                    className,
                )}
                {...props}
            />
        </DropdownMenuPrimitive.Portal>
    )
}

/**
 * Renders a grouped container for dropdown menu items and forwards all props.
 *
 * @param props - Props forwarded to the underlying dropdown group element
 * @returns The dropdown menu group element with data-slot 'dropdown-menu-group'
 */
function DropdownMenuGroup({
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
    return (
        <DropdownMenuPrimitive.Group
            data-slot='dropdown-menu-group'
            {...props}
        />
    )
}

/**
 * Renders a styled dropdown menu item with optional inset spacing and a destructive variant.
 *
 * @param inset - When true, applies inset spacing to align content (typically used for items with icons).
 * @param variant - Visual variant of the item; 'default' uses standard styling, 'destructive' indicates a destructive action.
 * @returns A React element representing a dropdown menu item, ready to be used within the dropdown composition.
 */
function DropdownMenuItem({
    className,
    inset,
    variant = 'default',
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
    variant?: 'default' | 'destructive'
}) {
    return (
        <DropdownMenuPrimitive.Item
            data-slot='dropdown-menu-item'
            data-inset={inset}
            data-variant={variant}
            className={cn(
                "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            {...props}
        />
    )
}

/**
 * Renders a styled dropdown menu checkbox item with a left-aligned check indicator.
 *
 * @param className - Additional CSS classes applied to the root item.
 * @param children - Content displayed inside the item.
 * @param checked - Whether the checkbox item is checked.
 * @returns A dropdown menu checkbox item React element.
 */
function DropdownMenuCheckboxItem({
    className,
    children,
    checked,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
    return (
        <DropdownMenuPrimitive.CheckboxItem
            data-slot='dropdown-menu-checkbox-item'
            className={cn(
                "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            checked={checked}
            {...props}
        >
            <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
                <DropdownMenuPrimitive.ItemIndicator>
                    <CheckIcon className='size-4' />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.CheckboxItem>
    )
}

/**
 * Renders a RadioGroup wrapper that forwards all props and adds data-slot 'dropdown-menu-radio-group'.
 *
 * @param props - Props forwarded to the underlying Radix RadioGroup component.
 * @returns The rendered RadioGroup element with data-slot 'dropdown-menu-radio-group'.
 */
function DropdownMenuRadioGroup({
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
    return (
        <DropdownMenuPrimitive.RadioGroup
            data-slot='dropdown-menu-radio-group'
            {...props}
        />
    )
}

/**
 * Render a styled dropdown radio item with a left-positioned radio indicator.
 *
 * This component wraps Radix's RadioItem, applies consistent styling and data-slot attributes,
 * and renders a circular item indicator to represent the selected state.
 *
 * @returns A React element representing a dropdown menu radio item with an integrated radio indicator.
 */
function DropdownMenuRadioItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
    return (
        <DropdownMenuPrimitive.RadioItem
            data-slot='dropdown-menu-radio-item'
            className={cn(
                "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className,
            )}
            {...props}
        >
            <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
                <DropdownMenuPrimitive.ItemIndicator>
                    <CircleIcon className='size-2 fill-current' />
                </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
        </DropdownMenuPrimitive.RadioItem>
    )
}

/**
 * Styling wrapper for the Radix DropdownMenu Label that applies consistent spacing and optional inset padding.
 *
 * @param inset - When true, applies additional left padding to align the label with inset items
 * @returns The rendered dropdown menu label element with composed classes and data attributes
 */
function DropdownMenuLabel({
    className,
    inset,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
}) {
    return (
        <DropdownMenuPrimitive.Label
            data-slot='dropdown-menu-label'
            data-inset={inset}
            className={cn(
                'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
                className,
            )}
            {...props}
        />
    )
}

/**
 * Renders a horizontally-styled separator for dropdown menus with consistent default styling.
 *
 * @param className - Additional CSS classes to append to the default separator styles; merged with the component's base classes.
 * @returns The rendered separator element for use inside a dropdown menu.
 */
function DropdownMenuSeparator({
    className,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
    return (
        <DropdownMenuPrimitive.Separator
            data-slot='dropdown-menu-separator'
            className={cn('bg-border -mx-1 my-1 h-px', className)}
            {...props}
        />
    )
}

/**
 * Renders a right-aligned shortcut label for a dropdown menu item.
 *
 * @param className - Additional CSS classes appended to the default shortcut styling
 */
function DropdownMenuShortcut({
    className,
    ...props
}: React.ComponentProps<'span'>) {
    return (
        <span
            data-slot='dropdown-menu-shortcut'
            className={cn(
                'text-muted-foreground ml-auto text-xs tracking-widest',
                className,
            )}
            {...props}
        />
    )
}

/**
 * Renders a dropdown submenu element with data-slot 'dropdown-menu-sub'.
 *
 * @param props - Props forwarded to the underlying DropdownMenuPrimitive.Sub element.
 * @returns The submenu element configured with data-slot 'dropdown-menu-sub'.
 */
function DropdownMenuSub({
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
    return (
        <DropdownMenuPrimitive.Sub data-slot='dropdown-menu-sub' {...props} />
    )
}

/**
 * Render a submenu trigger that displays its children with a trailing chevron and optional inset spacing.
 *
 * @param inset - When `true`, applies inset padding to the start of the trigger.
 * @returns The rendered Radix `SubTrigger` element with applied styling and data attributes.
 */
function DropdownMenuSubTrigger({
    className,
    inset,
    children,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
}) {
    return (
        <DropdownMenuPrimitive.SubTrigger
            data-slot='dropdown-menu-sub-trigger'
            data-inset={inset}
            className={cn(
                'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
                className,
            )}
            {...props}
        >
            {children}
            <ChevronRightIcon className='ml-auto size-4' />
        </DropdownMenuPrimitive.SubTrigger>
    )
}

/**
 * Renders the submenu content element for dropdown menus with consistent styling and behavior.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @returns The submenu content element with applied styling and data-slot 'dropdown-menu-sub-content'
 */
function DropdownMenuSubContent({
    className,
    ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
    return (
        <DropdownMenuPrimitive.SubContent
            data-slot='dropdown-menu-sub-content'
            className={cn(
                'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
                className,
            )}
            {...props}
        />
    )
}

export {
    DropdownMenu,
    DropdownMenuPortal,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
}