import 'dotenv/config';
import * as Sentry from '@sentry/node';

const sentry = Sentry.init({
    dsn: process.env.SENTRY_DSN,
  
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

export default sentry;
