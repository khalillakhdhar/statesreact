import React from 'react'
class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      nom:'Khalil',
      prenom:'lakhdhar'
    }
  }
    render()
    {
      return(
        <div>
Bienvenu {this.state.nom} {this.state.prenom}
        </div>
      )
    }

  }


export default App;
