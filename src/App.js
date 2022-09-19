import React from 'react'
import Incrementation from './components/incrementation';
import Initiale from './components/initiale';
class App extends React.Component
{
    render()
    {
      return(
        <div>
          <h2>{this.props.appName}</h2>
<Initiale email="khalillakhdhar@gmail.com"></Initiale>
<Incrementation></Incrementation>
        </div>
      )
    }

  }


export default App;
