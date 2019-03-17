import Head from 'next/head';
import Layout from '../components/layout/Layout';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My Collection</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout />
      <style global jsx>
        {`
          html,
          body {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
            background: #fafafa;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-weight: 400;
            color: #444;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          #app {
            height: 100%;
          }
          * ul {
            list-style: none;
          }
          * a {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}

export default IndexPage;
