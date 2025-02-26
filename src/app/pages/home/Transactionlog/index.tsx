/* eslint-disable @typescript-eslint/no-explicit-any */
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import fooddrink from "@/assets/images/spends/spend_fooddrink.png";
import { Button } from "@mui/material";
const Log = () => {
  const [selectedDate, setSelectedDate] = React.useState<any>(null);
  return (
    <>
      <div className="p_40">
        <div className="b_gw p_20 b_r20">
          <div className="f_s20">Sổ giao dịch</div>
          <div className="p_t20">
            <div className="b_g d_f b_r15 p_10 j_cs">
              <div className="p_10 b_gw b_r15">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["year", "month"]}
                    label="Chọn tháng"
                    value={selectedDate}
                    onChange={(selectedDate) => setSelectedDate(selectedDate)}
                  />
                </LocalizationProvider>
              </div>
              <div className="w_40 p_10 b_gw b_r15 d_f j_cs">
                <div>
                  <div>Số dư đầu</div>
                  <div>Số dư cuối</div>
                </div>
                <div>
                  <div>+(1.000.000 đ)</div>
                  <div className="b_by">+(3.000.000 đ)</div>
                  <div>+(2.000.000 đ)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p_t20 d_f j_cs">
            <div className="b_g w_40 b_r15">
              <div className="p_20">
                <div className="b_gw b_r15 p_10">
                  <div className="scroll_spend">
                    <div className="d_f j_cs a_i">
                      <div className="d_f">
                        <div className="f_s40">14</div>
                        <div className="p_l10">
                          <div>Thứ Sáu</div>
                          <div>tháng 2 2025</div>
                        </div>
                      </div>
                      <div>
                        <div>+(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i">
                      <div className="d_f a_i">
                        <img className="s_40" src={fooddrink} />
                        <div className="p_l10">
                          <div>Thu nợ</div>
                        </div>
                      </div>
                      <div>
                        <div>(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i m_t5">
                      <div className="d_f">
                        <div className="f_s40">14</div>
                        <div className="p_l10">
                          <div>Thứ Sáu</div>
                          <div>tháng 2 2025</div>
                        </div>
                      </div>
                      <div>
                        <div>+(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i">
                      <div className="d_f a_i">
                        <img className="s_40" src={fooddrink} />
                        <div className="p_l10">
                          <div>Thu nợ</div>
                        </div>
                      </div>
                      <div>
                        <div>(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i m_t5">
                      <div className="d_f">
                        <div className="f_s40">14</div>
                        <div className="p_l10">
                          <div>Thứ Sáu</div>
                          <div>tháng 2 2025</div>
                        </div>
                      </div>
                      <div>
                        <div>+(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i">
                      <div className="d_f a_i">
                        <img className="s_40" src={fooddrink} />
                        <div className="p_l10">
                          <div>Thu nợ</div>
                        </div>
                      </div>
                      <div>
                        <div>(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i m_t5">
                      <div className="d_f">
                        <div className="f_s40">14</div>
                        <div className="p_l10">
                          <div>Thứ Sáu</div>
                          <div>tháng 2 2025</div>
                        </div>
                      </div>
                      <div>
                        <div>+(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i">
                      <div className="d_f a_i">
                        <img className="s_40" src={fooddrink} />
                        <div className="p_l10">
                          <div>Thu nợ</div>
                        </div>
                      </div>
                      <div>
                        <div>(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i m_t5">
                      <div className="d_f">
                        <div className="f_s40">14</div>
                        <div className="p_l10">
                          <div>Thứ Sáu</div>
                          <div>tháng 2 2025</div>
                        </div>
                      </div>
                      <div>
                        <div>+(20.000)</div>
                      </div>
                    </div>
                    <div className="d_f j_cs a_i">
                      <div className="d_f a_i">
                        <img className="s_40" src={fooddrink} />
                        <div className="p_l10">
                          <div>Thu nợ</div>
                        </div>
                      </div>
                      <div>
                        <div>(20.000)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="b_g w_56 b_r15">
              <div className="p_20">
                <div className="b_gw p_10 b_r15 h_328p ">
                  <div className="f_s20">Chi tiết giao dịch </div>
                  <div>
                    <div className="d_f a_i">
                      <img src={fooddrink} className="s_40" />
                      <div className="p_l10">Ăn uống</div>
                    </div>
                    <div className="m_t5">Số tiền: </div>
                    <div className="m_t5">Loại tiền: </div>
                    <div className="m_t5">Ghi chú: </div>
                    <div className="m_t5 d_f">
                      <div>Hình ảnh: </div>
                      <div>
                        <img src={fooddrink} className="s_image_log p_l10" />
                      </div>
                    </div>
                  </div>
                  <div className="p_t20 d_f j_cs">
                    <Button className="w_48" variant="contained">Sửa</Button>
                    <Button className="w_48" variant="outlined" color="error">Xoá</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Log;
