import React from 'react';
import Layout from '../hoc/Layout/Layout';
import Task from '../components/Task/Task';

const app = () => {
  return (
    <div>
      <Layout>
        <Task />
      </Layout>
    </div>
  );
}

export default app;
