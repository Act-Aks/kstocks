import { useEffect, useRef } from 'react'

/**
 * Creates a ref for mounting a TradingView widget and ensures the widget script and configuration are injected once.
 *
 * @param scriptUrl - URL of the external TradingView script to load into the container
 * @param config - Configuration object to pass to the widget script
 * @param height - Desired widget height in pixels (defaults to 600)
 * @returns A React ref to attach to the div that will host the TradingView widget
 */
export function useTradingViewWidget(
    scriptUrl: string,
    config: Record<string, unknown>,
    height: number = 600,
) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return
        if (containerRef.current.dataset.loaded) return

        containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget style="width: 100%; height: ${height}px;"></div>`

        const script = document.createElement('script')
        script.src = scriptUrl
        script.async = true
        script.innerHTML = JSON.stringify(config)

        containerRef.current.appendChild(script)
        containerRef.current.dataset.loaded = 'true'

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = ''
                delete containerRef.current.dataset.loaded
            }
        }
    }, [config, scriptUrl, height])

    return containerRef
}