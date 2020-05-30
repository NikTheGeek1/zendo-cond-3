import React from 'react';
import Layout from '../hoc/Layout/Layout';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../store/reducer';

const store = createStore(reducer);
const app = () => {
  return (
    <Provider store={store}>
      <div>
        <Layout>

        </Layout>
      </div>
    </Provider>
  );
}

export default app;
