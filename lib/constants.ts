export const routes = {
    Dashboard: '/',
    Search: '/search',
    SignIn: '/sign-in',
    SignUp: '/sign-up',
    Watchlist: '/watchlist',
} as const

export const navItems = [
    { href: routes.Dashboard, label: 'Dashboard' },
    { href: routes.Search, label: 'Search' },
    { href: routes.Watchlist, label: 'Watchlist' },
] as const

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { label: 'Growth', value: 'Growth' },
    { label: 'Income', value: 'Income' },
    { label: 'Balanced', value: 'Balanced' },
    { label: 'Conservative', value: 'Conservative' },
] as const

export const RISK_TOLERANCE_OPTIONS = [
    { label: 'Low', value: 'Low' },
    { label: 'Medium', value: 'Medium' },
    { label: 'High', value: 'High' },
] as const

export const PREFERRED_INDUSTRIES = [
    { label: 'Technology', value: 'Technology' },
    { label: 'Healthcare', value: 'Healthcare' },
    { label: 'Finance', value: 'Finance' },
    { label: 'Energy', value: 'Energy' },
    { label: 'Consumer Goods', value: 'Consumer Goods' },
] as const

export const ALERT_TYPE_OPTIONS = [
    { label: 'Upper', value: 'upper' },
    { label: 'Lower', value: 'lower' },
] as const

export const CONDITION_OPTIONS = [
    { label: 'Greater than (>)', value: 'greater' },
    { label: 'Less than (<)', value: 'less' },
] as const

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    backgroundColor: '#141414', // background color
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    colorTheme: 'dark', // dark mode
    dateRange: '12M', // last 12 months
    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color
    height: 600, // height in px
    isTransparent: true, // makes background transparent
    largeChartUrl: '', // link to a large chart if needed
    locale: 'en', // language
    plotLineColorFalling: '#0FEDBE', // line color when price falls
    plotLineColorGrowing: '#0FEDBE', // line color when price goes up
    scaleFontColor: '#DBDBDB', // font color for scale
    showChart: true, // display mini chart
    showFloatingTooltip: true, // show tooltip on hover
    showSymbolLogo: true, // show logo next to symbols
    support_host: 'https://www.tradingview.com', // TradingView host
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol
    tabs: [
        {
            symbols: [
                { d: 'JPMorgan Chase', s: 'NYSE:JPM' },
                { d: 'Wells Fargo Co New', s: 'NYSE:WFC' },
                { d: 'Bank Amer Corp', s: 'NYSE:BAC' },
                { d: 'Hsbc Hldgs Plc', s: 'NYSE:HSBC' },
                { d: 'Citigroup Inc', s: 'NYSE:C' },
                { d: 'Mastercard Incorporated', s: 'NYSE:MA' },
            ],
            title: 'Financial',
        },
        {
            symbols: [
                { d: 'Apple', s: 'NASDAQ:AAPL' },
                { d: 'Alphabet', s: 'NASDAQ:GOOGL' },
                { d: 'Microsoft', s: 'NASDAQ:MSFT' },
                { d: 'Meta Platforms', s: 'NASDAQ:FB' },
                { d: 'Oracle Corp', s: 'NYSE:ORCL' },
                { d: 'Intel Corp', s: 'NASDAQ:INTC' },
            ],
            title: 'Technology',
        },
        {
            symbols: [
                { d: 'Amazon', s: 'NASDAQ:AMZN' },
                { d: 'Alibaba Group Hldg Ltd', s: 'NYSE:BABA' },
                { d: 'At&t Inc', s: 'NYSE:T' },
                { d: 'Walmart', s: 'NYSE:WMT' },
                { d: 'Visa', s: 'NYSE:V' },
            ],
            title: 'Services',
        },
    ],
    width: '100%', // full width
} as const

export const HEATMAP_WIDGET_CONFIG = {
    blockColor: 'change',
    blockSize: 'market_cap_basic',
    colorTheme: 'dark',
    dataSource: 'SPX500',
    exchanges: [],
    grouping: 'sector',
    hasSymbolTooltip: true,
    hasTopBar: false,
    height: '600',
    isDataSetEnabled: false,
    isMonoSize: false,
    isTransparent: true,
    isZoomEnabled: true,
    locale: 'en',
    symbolUrl: '',
    width: '100%',
} as const

export const TOP_STORIES_WIDGET_CONFIG = {
    colorTheme: 'dark',
    displayMode: 'regular',
    feedMode: 'market',
    height: '600',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
} as const

export const MARKET_DATA_WIDGET_CONFIG = {
    backgroundColor: '#0F0F0F',
    colorTheme: 'dark',
    height: 600,
    isTransparent: false,
    locale: 'en',
    showSymbolLogo: true,
    symbolsGroups: [
        {
            name: 'Financial',
            symbols: [
                { displayName: 'JPMorgan Chase', name: 'NYSE:JPM' },
                { displayName: 'Wells Fargo Co New', name: 'NYSE:WFC' },
                { displayName: 'Bank Amer Corp', name: 'NYSE:BAC' },
                { displayName: 'Hsbc Hldgs Plc', name: 'NYSE:HSBC' },
                { displayName: 'Citigroup Inc', name: 'NYSE:C' },
                { displayName: 'Mastercard Incorporated', name: 'NYSE:MA' },
            ],
        },
        {
            name: 'Technology',
            symbols: [
                { displayName: 'Apple', name: 'NASDAQ:AAPL' },
                { displayName: 'Alphabet', name: 'NASDAQ:GOOGL' },
                { displayName: 'Microsoft', name: 'NASDAQ:MSFT' },
                { displayName: 'Meta Platforms', name: 'NASDAQ:FB' },
                { displayName: 'Oracle Corp', name: 'NYSE:ORCL' },
                { displayName: 'Intel Corp', name: 'NASDAQ:INTC' },
            ],
        },
        {
            name: 'Services',
            symbols: [
                { displayName: 'Amazon', name: 'NASDAQ:AMZN' },
                { displayName: 'Alibaba Group Hldg Ltd', name: 'NYSE:BABA' },
                { displayName: 'At&t Inc', name: 'NYSE:T' },
                { displayName: 'Walmart', name: 'NYSE:WMT' },
                { displayName: 'Visa', name: 'NYSE:V' },
            ],
        },
    ],
    title: 'Stocks',
    width: '100%',
} as const

const withSymbol =
    <T = never>(config: T) =>
    (symbol: string): T & { symbol: string } => ({
        ...config,
        symbol: symbol.toUpperCase(),
    })

export const SYMBOL_INFO_WIDGET_CONFIG = withSymbol({
    colorTheme: 'dark',
    height: 170,
    isTransparent: true,
    locale: 'en',
    width: '100%',
})

export const CANDLE_CHART_WIDGET_CONFIG = withSymbol({
    allow_symbol_change: false,
    backgroundColor: '#141414',
    calendar: false,
    compareSymbols: [],
    details: true,
    gridColor: '#141414',
    height: 600,
    hide_legend: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    studies: [],
    style: 1,
    theme: 'dark',
    timezone: 'Etc/UTC',
    watchlist: [],
    width: '100%',
    withdateranges: false,
})

export const BASELINE_WIDGET_CONFIG = withSymbol({
    allow_symbol_change: false,
    backgroundColor: '#141414',
    calendar: false,
    compareSymbols: [],
    details: false,
    gridColor: '#141414',
    height: 600,
    hide_legend: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    studies: [],
    style: 10,
    theme: 'dark',
    timezone: 'Etc/UTC',
    watchlist: [],
    width: '100%',
    withdateranges: false,
})

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = withSymbol({
    colorTheme: 'dark',
    height: 400,
    interval: '1h',
    isTransparent: 'true',
    largeChartUrl: '',
    locale: 'en',
    width: '100%',
})

export const COMPANY_PROFILE_WIDGET_CONFIG = withSymbol({
    colorTheme: 'dark',
    height: 440,
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
})

export const COMPANY_FINANCIALS_WIDGET_CONFIG = withSymbol({
    colorTheme: 'dark',
    displayMode: 'regular',
    height: 464,
    isTransparent: 'true',
    largeChartUrl: '',
    locale: 'en',
    width: '100%',
})

export const POPULAR_STOCK_SYMBOLS = [
    // Tech Giants (the big technology companies)
    'AAPL',
    'MSFT',
    'GOOGL',
    'AMZN',
    'TSLA',
    'META',
    'NVDA',
    'NFLX',
    'ORCL',
    'CRM',

    // Growing Tech Companies
    'ADBE',
    'INTC',
    'AMD',
    'PYPL',
    'UBER',
    'ZOOM',
    'SPOT',
    'SQ',
    'SHOP',
    'ROKU',

    // Newer Tech Companies
    'SNOW',
    'PLTR',
    'COIN',
    'RBLX',
    'DDOG',
    'CRWD',
    'NET',
    'OKTA',
    'TWLO',
    'ZM',

    // Consumer & Delivery Apps
    'DOCU',
    'PTON',
    'PINS',
    'SNAP',
    'LYFT',
    'DASH',
    'ABNB',
    'RIVN',
    'LCID',
    'NIO',

    // International Companies
    'XPEV',
    'LI',
    'BABA',
    'JD',
    'PDD',
    'TME',
    'BILI',
    'DIDI',
    'GRAB',
    'SE',
] as const

export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>'

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
] as const
