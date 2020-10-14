import React from 'react';
import Feedback from './components/Feedback'
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component
{

  render(){
    return(
      <Provider store={store}>
      <div>
       
        <Feedback/>
      </div>
      </Provider>
    )
  }
}


export default App;
