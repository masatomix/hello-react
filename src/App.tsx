import type { FC } from 'react';
import { Global, css } from '@emotion/react'
import normalize from 'normalize.css'
import Providers from './Providers';
import IndexRoutes from './routes';

const styles = css`
  ${normalize}
  body {
    font-size: 16px;
    // color: hotpink; // ここにアプリ固有のベースになるスタイルを書く
  }
`

const App: FC = () => (
  <Providers>
    <Global styles={styles} />
    <IndexRoutes />
  </Providers>
);

export default App;
