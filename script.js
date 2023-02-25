// Select DOM Elements
const counterEl = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// Action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// Action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// Initial state
let initialState = {
  value: 0,
};

// Reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// Create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// Initial render
render();

// Subscribe to the store
store.subscribe(render);

// Event listeners
incrementBtn.addEventListener("click", () => {
  store.dispatch(increment(3));
});

decrementBtn.addEventListener("click", () => {
  store.dispatch(decrement(1));
});
