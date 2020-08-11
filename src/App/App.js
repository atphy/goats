import React from 'react';

import GoatCorral from '../components/GoatCorral/GoatCorral';

import goatData from '../helpers/data/goatData';

import './App.scss';

class App extends React.Component {
   state = {
     goats: [],
   }

   componentDidMount() {
     const goats = goatData.thatReallyGetsMyGoat();
     this.setState({ goats });
   }

   render() {
     const { goats } = this.state;

     return (
      <div className="App">
        <h1>Totes My Goats</h1>
        <GoatCorral goats={goats}/>
      </div>
     );
   }
}

export default App;
