import React from "react";
import { buyIceCream } from "../redux/index";

//Connect Function
import { connect } from "react-redux";

function IcecreamContainer(props) {
  return (
    <div>
      <h2>IceCream</h2>
      <div>
        <h2>Number of IceCream : {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy a IceCream</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.icecream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
