import Head from 'next/head';
import React from 'react';

import { HomeComponent } from '../components/home.component';
import { WithExchangeComponent } from '../components/with-exchange.component';

const Home = () => {
  return (
    <>
      <Head>
        <title>NextJS + Safe-Cex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WithExchangeComponent>
          {(exchange) => <HomeComponent exchange={exchange} />}
        </WithExchangeComponent>
      </main>
    </>
  );
};

export default Home;
