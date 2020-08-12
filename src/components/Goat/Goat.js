import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/props/goatShape';

import './Goat.scss';

class Goat extends React.Component {
static propTypes = {
  goat: goatShape.goatShape,
  takeAGoat: PropTypes.func,
  freeAGoat: PropTypes.func,
}

takeGoatEvent = (e) => {
  e.preventDefault();
  const { goat, takeAGoat } = this.props;
  takeAGoat(goat.id);
};

freeGoatEvent = (e) => {
  e.preventDefault();
  const { goat, freeAGoat } = this.props;
  freeAGoat(goat.id);
}

render() {
  const { goat } = this.props;

  return (
        <div className="card goat-card">
        <img className="card-img-top" src={goat.imgUrl} alt="one goat among many" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">This goat is {goat.age} years old</p>
          <p className="card-text">"{goat.description}"</p>
        </div>
        <div className='card-footer'>
          {
            goat.isTaken ? (
              <button onClick ={this.freeGoatEvent}>FREE THE GOAT</button>
            ) : (
              <button onClick ={this.takeGoatEvent}>TAKE THE GOAT</button>
            )
          }
        </div>
      </div>
  );
}
}

export default Goat;
