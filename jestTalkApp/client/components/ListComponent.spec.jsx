import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import List from './ListComponent.jsx';
import * as dependency from '../service/httpService';

describe('ListComponent', () => {
  it('renders using mock fn', () => {
    dependency.getPosts = jest.fn();
    const testArray = ['1', '2'];
    const renderedList = renderer.create(<List values={testArray} />).toJSON();

    expect(renderedList).toMatchSnapshot();
    expect(dependency.getPosts).toHaveBeenCalled();
  });

  
  it('shallow renders', () => {
    const testArray = ['1', '2'];
    const renderer = new ShallowRenderer();
    const rendered = renderer.render(<List values={testArray} />);
    const shallowRendered = renderer.getRenderOutput();
    expect(shallowRendered).toMatchSnapshot();
  });
});
