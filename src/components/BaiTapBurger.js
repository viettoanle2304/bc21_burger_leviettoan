import React, { Component } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container mx-auto py-10 flex justify-between">
        <Burger />
        <Menu />
      </div>
    );
  }
}
