/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { createExchange } from 'safe-cex';
import type { Exchange } from 'safe-cex/dist/exchanges/base';
import type { OrderFillEvent } from 'safe-cex/dist/types';

const EXCHANGE: 'binance' | 'bybit' | 'woo' = 'bybit';
const API_KEY = '';
const API_SECRET = '';
const TESTNET = true;

if (!API_KEY || !API_SECRET) {
  throw new Error(
    'Please set API_KEY and API_SECRET in `components/with-exchange.component.tsx`'
  );
}

export const WithExchangeComponent = ({
  children,
}: {
  children: (exchange: Exchange) => JSX.Element;
}) => {
  const [exchange, setExchange] = useState<Exchange | null>(null);

  useEffect(() => {
    const _exchange = createExchange(EXCHANGE, {
      key: API_KEY,
      secret: API_SECRET,
      testnet: TESTNET,
    });

    _exchange.start();
    _exchange.on('error', (err: string) => console.error(err));
    _exchange.on('fill', (event: OrderFillEvent) => console.log(event));

    setExchange(_exchange);

    return () => {
      _exchange.dispose();
    };
  }, []);

  if (!exchange) {
    return <div>Loading...</div>;
  }

  return children(exchange);
};
