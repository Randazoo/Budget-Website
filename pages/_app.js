import '../../lib/db'; // Correct relative path from pages/_app.js to lib/db.js

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;