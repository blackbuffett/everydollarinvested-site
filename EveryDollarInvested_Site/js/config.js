window.BABYCOINZ_CONFIG = {
  marketProvider: 'demo',
  newsProvider: 'demo',
  apiKeys: { alphavantage:'', finnhub:'', polygon:'', newsapi:'' },
  defaultSymbols: ['VOO','VTI','QQQ','SCHD','SPY','IJR'],

  // ✅ Waitlist wired to ConvertKit
  waitlist: {
    provider: 'convertkit',
    endpoints: {
      convertkit: {
        action: 'https://api.convertkit.com/v3/forms/8494037/subscribe',
        api_key: 'h-8NE1V4SLGUOu6-lJeEyQ'   
      }
    }
  }
};
