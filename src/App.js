import React from 'react'
import './App.css';
import Layout from './containers/Layout/Layout';
import {TheProvider} from './ContextManager';

class App extends React.Component {
  

  render() {
    return (
      <TheProvider>
        <div className="App">
          <Layout />
        </div>
      </TheProvider>
    );
  }
}

export default App;
