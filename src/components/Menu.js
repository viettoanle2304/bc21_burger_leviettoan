import React, { Component } from "react";
import { connect } from "react-redux";
import { GIA_TRI_GIAM, GIA_TRI_TANG } from "../constants";
import { thayDoiSoLuongThucAn } from "../redux/actions/burger.action";

class Menu extends Component {
  render() {
    return (
      <div className="w-[40%]">
        <h1 className="text-3xl font-semibold mb-3">Chọn thức ăn</h1>

        <div className="">
          <table className="w-[85%]">
            <thead>
              <tr className="border-y">
                <td className="px-2 py-3">Thức ăn</td>
                <td className="px-24 py-3"></td>
                <td className="px-6 py-3 pr-8">Giá</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-y">
                <td className="px-2 py-3">salad</td>
                <td className="px-24 py-3">
                  <button
                    className="bg-green-600 rounded px-3 py-1 mr-2 text-white active:bg-green-700"
                    onClick={() =>
                      this.props.handleThayDoiSoLuong("salad", GIA_TRI_TANG)
                    }
                  >
                    +
                  </button>
                  <button
                    className="bg-red-600 rounded px-3 py-1 text-white active:bg-red-700"
                    onClick={() =>
                      this.props.handleThayDoiSoLuong("salad", GIA_TRI_GIAM)
                    }
                  >
                    -
                  </button>
                </td>
                <td className="px-6 py-3 pr-8">{this.props.menuSalad}</td>
              </tr>
              <tr className="border-y">
                <td className="px-2 py-3">cheese</td>
                <td className="px-24 py-3">
                  <button
                    className="bg-green-600 rounded px-3 py-1 mr-2 text-white active:bg-green-700"
                    onClick={() =>
                      this.props.handleThayDoiSoLuong("cheese", GIA_TRI_TANG)
                    }
                  >
                    +
                  </button>
                  <button
                    className="bg-red-600 rounded px-3 py-1 text-white active:bg-red-700"
                    onClick={() =>
                      this.props.handleThayDoiSoLuong("cheese", GIA_TRI_GIAM)
                    }
                  >
                    -
                  </button>
                </td>
                <td className="px-6 py-3 pr-8">{this.props.menuCheese}</td>
              </tr>
              <tr className="border-y">
                <td className="px-2 py-3">beef</td>
                <td className="px-24 py-3">
                  <button
                    className="bg-green-600 rounded px-3 py-1 mr-2 text-white active:bg-green-700"
                    onClick={() =>
                      this.props.handleThayDoiSoLuong("beef", GIA_TRI_TANG)
                    }
                  >
                    +
                  </button>
                  <button
                    className="bg-red-600 rounded px-3 py-1 text-white active:bg-red-700"
                    onClick={() =>
                      this.props.handleThayDoiSoLuong("beef", GIA_TRI_GIAM)
                    }
                  >
                    -
                  </button>
                </td>
                <td className="px-6 py-3 pr-8">{this.props.menuBeef}</td>
              </tr>
              <tr>
                <td></td>
                <td className="py-3 text-right font-bold">Tổng tiền</td>
                <td className="px-6 py-3 pr-8 font-bold">{this.props.total}</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end w-[85%] pr-8 py-2">
            <button className="bg-blue-600 text-white rounded px-4 py-2 active:bg-blue-700">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuSalad: state.menu.salad,
    menuCheese: state.menu.cheese,
    menuBeef: state.menu.beef,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleThayDoiSoLuong: (type, giaTri) => {
      dispatch(thayDoiSoLuongThucAn(type, giaTri));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
