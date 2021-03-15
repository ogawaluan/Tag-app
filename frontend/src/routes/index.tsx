import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BookList from '../pages/BookList/index';
import BookDetails from '../pages/BookDetails/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={BookList} />
    <Route path="/book-details" component={BookDetails} />
  </Switch>
);

export default Routes;
