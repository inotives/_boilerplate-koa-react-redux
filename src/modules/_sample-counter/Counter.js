import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from './counterActions'

export class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props
    return (
      <div>
        <h2 className="">
          Counter:
          { ' ' }
          <span className=""> {counter} </span>
        </h2>
        <button className="btn btn-default" onClick={(e) => increment()}> + </button>
        <button className="btn btn-default" onClick={(e) => decrement()}> - </button>
      </div>
    )
  }// end render func

}// end class


/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => {
  console.log(actions)
  return bindActionCreators(actions, dispatch);
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })
    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
