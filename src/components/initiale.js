import React from 'react';
class Initiale extends React.Component
{
constructor()
{
    super();
    this.state={
        nom:'Khalil',
        prenom:'lakhdhar',
    }
}
render()
    {
      return(
        <div>
Bienvenu {this.state.nom} &nbsp; {this.state.prenom}
<br></br>
Email: {this.props.email} 

<br></br>

        </div>
      )
    }


}
export default Initiale;