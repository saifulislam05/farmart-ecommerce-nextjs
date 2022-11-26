/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["i0.wp.com"],
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyAfMd7JnA_jf3mwNCfY_S_-24hJgbbwlok",
    FIREBASE_AUTH_DOMAIN: "farmart-grocery-ec385.firebaseapp.com",
    FIREBASE_PROJECT_ID: "farmart-grocery-ec385",
    FIREBASE_STORAGE_BUCKET: "farmart-grocery-ec385.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "942951269338",
    FIREBASE_APP_ID: "1:942951269338:web:2fbacaf018f997296e76e3",
  },
};

module.exports = nextConfig
