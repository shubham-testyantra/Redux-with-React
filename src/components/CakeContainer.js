import React from "react";
import { buyCake } from "../redux/index";

//Connect Function
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes : {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy a Cake</button>
    </div>
  );
}

//Dispatch: It defines the function(buyCake) to dispatch the action(BUY_CAKE)
//General Name: mapStatetoProps ---> state as a parameter & return the object

//to pass state as a props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//Only in Redux Dispatch: store.dispatch(buyCake())
//In react-redux, A function name, mapDispatchToProps
//mapDispatchToProps, it takes dispatc as a parameter and returns a object
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//(mapStateToProps, mapDispatchToProps)----->Redux
//(CakeContainer)----->React
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
