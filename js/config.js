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
        action: 'https://api.convertkit.com/v3/forms/FORM_ID_HERE/subscribe', // <-- replace FORM_ID_HERE
        api_key: 'API_KEY_HERE'                                               // <-- replace API_KEY_HERE
      }
    }
  }
};
