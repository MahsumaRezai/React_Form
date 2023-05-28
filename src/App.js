import React, { Fragment } from 'react';
import Head from "./Componet/Head";
import Lisdata from './Componet/Listdata';
import Card from './Componet/Card';
function App() {
  return (
    <Fragment>
      <Head />
      <Card />
      <Lisdata users={[]} />
    </Fragment>
  );
}

export default App;