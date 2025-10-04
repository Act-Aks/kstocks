import { TradingViewWidget } from '@/components/widgets/TradingViewWidget/TradingViewWidget'
import {
    HEATMAP_WIDGET_CONFIG,
    MARKET_DATA_WIDGET_CONFIG,
    MARKET_OVERVIEW_WIDGET_CONFIG,
    TOP_STORIES_WIDGET_CONFIG,
} from '@/lib/constants'
import { getWidgetScriptUrl } from '@/lib/utils'

/**
 * Render the home page containing a responsive grid of TradingView widgets.
 *
 * @returns A JSX.Element with two grid sections that together display four configured TradingViewWidget components (Market Overview, Stock Heatmap, Top Stories timeline, and Market Quotes).
 */
export default function HomePage() {
    return (
        <div className='home-wrapper flex min-h-screen'>
            <section className={'home-section grid w-full gap-8'}>
                <div className={'md:col-span-1 xl:col-span-1'}>
                    <TradingViewWidget
                        title={'Market Overview'}
                        scriptUrl={getWidgetScriptUrl('market-overview')}
                        config={MARKET_OVERVIEW_WIDGET_CONFIG}
                        className={'custom-chart'}
                        height={600}
                    />
                </div>
                <div className={'md:col-span-1 xl:col-span-2'}>
                    <TradingViewWidget
                        title={'Stock Heatmap'}
                        scriptUrl={getWidgetScriptUrl('stock-heatmap')}
                        config={HEATMAP_WIDGET_CONFIG}
                        className={'custom-chart'}
                        height={600}
                    />
                </div>
            </section>
            <section className={'home-section grid w-full gap-8'}>
                <div className={'h-full md:col-span-1 xl:col-span-1'}>
                    <TradingViewWidget
                        scriptUrl={getWidgetScriptUrl('timeline')}
                        config={TOP_STORIES_WIDGET_CONFIG}
                        className={'custom-chart'}
                        height={600}
                    />
                </div>
                <div className={'h-full md:col-span-1 xl:col-span-2'}>
                    <TradingViewWidget
                        scriptUrl={getWidgetScriptUrl('market-quotes')}
                        config={MARKET_DATA_WIDGET_CONFIG}
                        className={'custom-chart'}
                        height={600}
                    />
                </div>
            </section>
        </div>
    )
}