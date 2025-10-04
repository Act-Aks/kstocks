'use client'

import { memo } from 'react'
import { useTradingViewWidget } from '@/components/widgets/TradingViewWidget/TradingViewWidget.logic'
import { cn } from '@/lib/utils'

interface TradingViewProps {
    title?: string
    scriptUrl: string
    config: Record<string, unknown>
    height?: number
    className?: string
}

export const TradingViewWidget = memo<TradingViewProps>(
    ({ title, scriptUrl, config, height, className }) => {
        const containerRef = useTradingViewWidget(scriptUrl, config, height)

        return (
            <div className={'w-full'}>
                {title && (
                    <h3 className={'mb-5 font-semibold text-2xl text-gray-100'}>
                        {title}
                    </h3>
                )}
                <div
                    className={cn('tradingview-widget-container', className)}
                    ref={containerRef}
                >
                    <div
                        className='tradingview-widget-container__widget'
                        style={{ height, width: '100%' }}
                    />
                </div>
            </div>
        )
    },
)
