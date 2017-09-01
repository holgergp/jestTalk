import React from 'react';
import List from './ListComponent';
const App = class App extends React.Component {
  render() {
    const myArray = ['1', '2', '3', '4'];
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Hello World</h1>
        <List values = {myArray} />
      </div>
    );
  }
};
export default App;
