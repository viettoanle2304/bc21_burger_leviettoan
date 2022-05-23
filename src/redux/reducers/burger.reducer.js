import { THAY_DOI_SO_LUONG_THUC_AN } from "../constants/burger.constant";

let initialState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 10,
    beef: 10,
  },

  total: 30,
};

export const burgerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case THAY_DOI_SO_LUONG_THUC_AN: {
      let newSoLuong = state.burger[payload.type] + payload.giaTri;
      if (newSoLuong >= 0) {
        state.burger[payload.type] = newSoLuong;
        state.menu[payload.type] = newSoLuong * 10;
        state.total = Object.values(state.menu).reduce(
          (tong, curVal) => tong + curVal,
          0
        );
        return { ...state };
      } else return state;
    }
    default:
      return state;
  }
};
