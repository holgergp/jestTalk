import App from './App.jsx';
import React from 'react';
import renderer from 'react-test-renderer';
import * as dependency from '../service/serviceUser.js';


describe('App', () => {
    it('renders', () => {
        const renderedApp = renderer.create(<App/>).toJSON();
        expect(renderedApp).toMatchSnapshot();
    });

    it('renders using mock fn', () => {
        dependency.doSomethingWithRemoteData = jest.fn();
        const renderedList = renderer.create(<App />).toJSON();

        expect(dependency.doSomethingWithRemoteData).toHaveBeenCalled();
    });
});
