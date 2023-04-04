import { useSnapshot } from '@iam4x/valtio';
import orderBy from 'lodash.orderby';
import React from 'react';
import type { Exchange } from 'safe-cex/dist/exchanges/base';

export const HomeComponent = ({ exchange }: { exchange: Exchange }) => {
  const snap = useSnapshot(exchange.store);

  return (
    <div className="w-full max-w-[720px] mx-auto px-2">
      <h1 className="text-center my-12 text-3xl uppercase">
        ReactJS + Safe-Cex
      </h1>
      <table className="table table-fixed w-full">
        <thead>
          <tr>
            <th className="text-left pb-2">Ticker</th>
            <th className="text-right pb-2">Last price</th>
            <th className="text-right pb-2">24hr change</th>
            <th className="text-right pb-2">24hr volume</th>
          </tr>
        </thead>
        <tbody>
          {orderBy(snap.tickers, ['quoteVolume'], ['desc']).map((ticker) => (
            <tr key={ticker.symbol}>
              <td className="text-left text-sm">{ticker.symbol}</td>
              <td className="text-right font-mono text-sm">${ticker.last}</td>
              <td className="text-right font-mono text-sm">
                {(Math.round(ticker.percentage * 100) / 100).toFixed(2)}%
              </td>
              <td className="text-right font-mono text-sm">
                ${(Math.round(ticker.quoteVolume * 100) / 100).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
