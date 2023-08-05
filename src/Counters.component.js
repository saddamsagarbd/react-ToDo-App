import React from 'react';

import Button from './common/button.componenet';
import Counter from './common/counter.component';
import Header from './common/header.component';


class Counters extends React.Component {

  state= {
    counters: []
  }
  
  addCounter = () => {
    const addCounter = [...this.state.counters]; // array destruction [...Array]
    addCounter.push(0);
    this.setState({ counters:  addCounter});
  } 

  increament = (index) => {
    const counters = [...this.state.counters];
    counters[index]++;
    this.setState({ counters });
  }

  decreament = (index) => {
    const counters = [...this.state.counters];
    counters[index]--;
    this.setState({ counters });
  }

  resetCount = (index) => {
    const counters = [...this.state.counters];
    counters[index] = 0;
    this.setState({ counters });
  }

  delete = (index) => {
    const counters = [...this.state.counters];
    counters.splice(index, 1);
    this.setState({ counters });
  }

  render(){
    return (
      <div className="card container">

        <Header />              
        
        <div className="card-body">

          <Button
              event={this.addCounter}
              className="btn btn-primary mx-2"
              text="Add Counter"
          />

          <hr></hr>

          {
            this.state.counters.map((number, index) => {
                return (
                  // react fregment
                    <React.Fragment key={index}>
                      <Counter
                        index={index}
                        onIncreament={this.increament}
                        onDecreament={this.decreament}
                        onReset={this.resetCount}
                        number={this.state.counters[index]}
                        onDelete={this.delete}  // props drilling
                      />
                      <br />
                    </React.Fragment>
                );
              }
            ) // ex of first class or higher function
          }

        </div>
      
      </div>
    );
  }
}

export default Counters;
