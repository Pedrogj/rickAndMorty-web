import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { RickMortyApp } from './RickMortyApp';
import {
  ApolloProvider,
} from "@apollo/client";
import { client } from './services/client';


ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <RickMortyApp />
    </BrowserRouter>
    </ApolloProvider>,
  document.getElementById('root')
);
