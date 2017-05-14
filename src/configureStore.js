import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';


export default function configureStore(rootReducer, initialState) {
    const middlewares = applyMiddleware(
      thunk
    );

    const store = createStore(rootReducer, initialState, compose(middlewares));

    return store;
}
