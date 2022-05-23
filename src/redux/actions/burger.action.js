import { THAY_DOI_SO_LUONG_THUC_AN } from "../constants/burger.constant";

export const thayDoiSoLuongThucAn = (type, giaTri) => ({
  type: THAY_DOI_SO_LUONG_THUC_AN,
  payload: { type, giaTri },
});
