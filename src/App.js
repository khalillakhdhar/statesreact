import React from 'react'
class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      nom:'Khalil',
      prenom:'lakhdhar',
      clicks:0
    }
  }
    render()
    {
      return(
        <div>
Bienvenu {this.state.nom} {this.state.prenom}
<br></br>
{this.state.clicks}
        </div>
      )
    }

  }


export default App;
