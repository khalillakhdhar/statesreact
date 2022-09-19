import React from "react";
class Incrementation extends React.Component{
    constructor()
    {
      // bloc d'initialisation
      super(); // charger les paramétre par défault states et props
      this.state={
      
        clicks:0
      }
      this.increment=this.increment.bind(this);
      this.decrement=this.decrement.bind(this);
    }
    increment()
    {
      // eslint-disable-next-line react/no-direct-mutation-state
      let valn=this.state.clicks + 1;
      this.setState({ clicks:valn  });
    }
    decrement()
    {
      // eslint-disable-next-line react/no-direct-mutation-state
      let valn=this.state.clicks - 1;
      this.setState({ clicks:valn  });
    }
      render()
      {
        return(
          <div>
  {this.state.clicks} clicks 
  <button onClick={this.increment}>+</button>&nbsp;
  <button onClick={this.decrement}>-</button>
          </div>
        )
      }
  
    
}
export default Incrementation;