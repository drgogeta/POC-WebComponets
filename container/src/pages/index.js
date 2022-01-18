import React from 'react';
import { Route } from 'react-router-dom';

import { Component1 } from './Component-1';


const Pages = () => (
  <main className="flex-grow-1 p-5">
    <Route exact path="/" component={Component1} />
    <Route path="/component-1" component={Component1} />
  </main>
);

export default Pages;
