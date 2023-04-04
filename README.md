# NextJS + Safe-Cex

> This repo is a simple example of implementing Safe-Cex into your React application

## Setup

- Edit `API_KEY` and `API_SECRET` from `components/with-exchange.component.tsx`
- Start a terminal and run `$ npm run dev`
- Open in your browser: http://localhost:3000

## Documentation

- Check file `pages/index.tsx`

```tsx
<WithExchangeComponent>
  {(exchange) => <HomeComponent exchange={exchange} />}
</WithExchangeComponent>
```

- Check file `components/home.component.tsx`

```tsx
import { useSnapshot } from "@iam4x/valtio";

const Component = () => {
  const snap = useSnapshot(exchange.store);
  return <div>{JSON.stringify(snap.balance, null, 4)}</div>;
};
```
