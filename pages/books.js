require('es6-promise').polyfill();
require('isomorphic-fetch');
import Head from 'next/head';
import React, { Component } from 'react';
import List from '../components/list/List';
import Layout from '../components/layout/Layout';
class Books extends Component {
  static getInitialProps = async ({ req }) => {
    const res = await fetch(
      'https://api.nytimes.com/svc/books/v3/lists.json?api-key=fpVr9yGGdyLl2RgxGz7ox9uy1szrzRXV&list=hardcover-fiction'
    );
    const json = await res.json();
    return { data: json };
  };
  render() {
    return (
      <div>
        <Head>
          <title>My Collection</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout>
          <div>
            <List
              resultList={this.props.data.results}
              count={this.props.data.num_results}
              fromArticles={false}
            />
          </div>
        </Layout>
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
}
export default Books;
