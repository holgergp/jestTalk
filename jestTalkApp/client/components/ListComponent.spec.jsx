import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import List from './ListComponent.jsx';
import * as dependency from '../service/httpService';

describe('ListComponent', () => {
  xit('renders using mock fn', () => {
    //dependency.default = jest.fn();
    const testArray = ['1', '2'];
    const renderedList = renderer.create(<List values={testArray} />).toJSON();

    expect(renderedList).toMatchSnapshot();
    expect(dependency.default).toHaveBeenCalled();
  });

  it('renders using module mock', () => {
    //jest.mock('../service/httpService', () => ({ default: jest.fn() }));
    const testArray = ['1', '2'];
    const renderedList = renderer.create(<List values={testArray} />).toJSON();

    expect(renderedList).toMatchSnapshot();
    expect(dependency.default).toHaveBeenCalled();
  });

  it('renders using module stub', () => {
    jest.mock('../service/httpService', () => ({
      default: () => ['mocked', 'data']
    }));

    const testArray = ['1', '2'];
    const renderedList = renderer.create(<List values={testArray} />).toJSON();

    expect(renderedList).toMatchSnapshot();
  });

  it('shallow renders', () => {
    const testArray = ['1', '2'];
    const renderer = new ShallowRenderer();
    const rendered = renderer.render(<List values={testArray} />);
    const shallowRendered = renderer.getRenderOutput();
    expect(shallowRendered).toMatchSnapshot();
  });
});
