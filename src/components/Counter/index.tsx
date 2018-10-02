import * as React from 'react';
import { connect } from 'react-redux';
import { 
  decrement, 
  increment,
  incrementAsync,
} from '../../store/actions/counterActions';

interface IProps {
  counter: number,
  decrement: any,
  increment: any,
  incrementAsync: any,
};

const Counter: React.SFC<IProps> = (props) => {
  const { counter, increment, incrementAsync, decrement } = props;
  
  return (
    <div>
      <h1>Hello I am the counter</h1>
      <p>Counter: {counter}</p>
      <div>
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button type="button" onClick={incrementAsync}>Increment Async</button>
      </div>
    </div>
  );
}

// Argument is always rootState
const mapStateToProps = (rootState: any) => {
  return {
    counter: rootState.counter.value,
  }
};

export default connect(
  mapStateToProps,
  { increment, incrementAsync, decrement }
)(Counter);