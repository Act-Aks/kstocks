import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getWidgetScriptUrl(
    widget: 'market-overview' | 'market-quotes' | 'stock-heatmap' | 'timeline',
) {
    return `https://s3.tradingview.com/external-embedding/embed-widget-${widget}.js`
}
