import App from './App.jsx';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders', () => {
    const renderedApp = renderer.create(<App />).toJSON();
    expect(renderedApp).toMatchSnapshot();
  });
});
