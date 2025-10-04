import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine class name inputs into a single, normalized string and resolve Tailwind utility conflicts.
 *
 * @param inputs - One or more class name values (strings, arrays, objects) to be combined
 * @returns A single className string with normalized values and Tailwind utility conflicts merged
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Build the external TradingView widget script URL for the given widget type.
 *
 * @param widget - The widget identifier to embed: 'market-overview', 'market-quotes', 'stock-heatmap', or 'timeline'
 * @returns The full URL string for the corresponding TradingView external-embedding script
 */
export function getWidgetScriptUrl(
    widget: 'market-overview' | 'market-quotes' | 'stock-heatmap' | 'timeline',
) {
    return `https://s3.tradingview.com/external-embedding/embed-widget-${widget}.js`
}