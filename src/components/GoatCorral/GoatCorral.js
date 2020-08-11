import React from 'react';
import Goat from '../Goat/Goat';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  render() {
    const { goats } = this.props;

    const goatCards = goats.map((goat) => (
    <Goat key={goat.id} goat={goat}/>
    ));

    return (
        <div className="goat-corral">
          { goatCards }
        </div>
    );
  }
}

export default GoatCorral;
