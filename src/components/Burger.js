import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  render() {
    return (
      <div className="flex flex-col items-center space-y-4 w-1/2">
        <h1 className="text-3xl mb-3 font-semibold">
          Cửa hàng burger cybersoft
        </h1>

        <div className="w-[400px] bg-[#e7823e] h-[100px] rounded-t-[50%] shadow-[inset_-15px_4px_0_0_#c15711]"></div>
        <h3>Chọn thức ăn</h3>

        <div className="space-y-1">
          {[...Array(this.props.salad)].map((val, i) => (
            <div
              key={"salad " + i}
              className="bg-[#53a833] w-[600px] h-2 rounded-full"
            ></div>
          ))}
        </div>

        <div className="space-y-1">
          {[...Array(this.props.cheese)].map((val, i) => (
            <div
              key={"cheese " + i}
              className="bg-[#e4c512] w-[500px] h-5 rounded-full"
            ></div>
          ))}
        </div>

        <div className="space-y-1">
          {[...Array(this.props.beef)].map((val, i) => (
            <div
              key={"beef " + i}
              className="bg-[#732f05] w-[400px] h-10 rounded-2xl"
            ></div>
          ))}
        </div>

        <div className="w-[400px] bg-[#e7823e] h-[100px] rounded-b-[50%] shadow-[inset_-15px_-4px_0_0_#c15711]"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    salad: state.burger.salad,
    cheese: state.burger.cheese,
    beef: state.burger.beef,
  };
};

export default connect(mapStateToProps)(Burger);
