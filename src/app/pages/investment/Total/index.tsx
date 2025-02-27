import { DatePickerV2 as DatePicker } from "@/app/components/common/DatePickerV2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { Button } from "@mui/material";
const Total = () => {
  const [selectedDateStart, setSelectedDateStart] = useState<string>("");
  const [selectedDateEnd, setSelectedDateEnd] = useState<string>("");
  return (
    <>
      <div className="p_20">
        <div className="b_gw d_f j_cs b_r15">
          <div className="p_10 ">
            <div className="f_s20">Tổng tài sản đầu tư</div>
            <div className="d_f p_t8">
              <div>250.000đ</div>
              &nbsp;
              <div className="c_y f_s15">0đ</div>
            </div>
          </div>
          <div className=" p_10 d_f">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDateStart ? dayjs(selectedDateStart) : null}
                onChange={(date: string) => {
                  if (date) {
                    setSelectedDateStart(dayjs(date).format("YYYY-MM-DD"));
                  }
                }}
              />
            </LocalizationProvider>
            &nbsp;
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDateEnd ? dayjs(selectedDateEnd) : null}
                onChange={(date: string) => {
                  if (date) {
                    setSelectedDateEnd(dayjs(date).format("YYYY-MM-DD"));
                  }
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div className="p_lr20 f_1 ">
        <div className="b_gw p_10 b_r15 d_f g_10">
          <div className="b_1 b_r15 f_1">
            <div className="p_10 b_by">
              <div className="">Tài sản tích luỹ</div>
              <div className="d_f p_t8">
                <div>250.000đ</div>
                &nbsp;
                <div className="c_y f_s15">0đ</div>
              </div>
            </div>
            <div className="p_10">
              <div className="scroll">
                <div className="b_g p_10 b_r15">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
                <div className="b_g p_10 b_r15 m_t5">
                  <div>Home</div>
                </div>
              </div>
              <div className="p_t8">
                <div className="b_r15 t_a">
                  <Button variant="outlined" size="small">Xem tất cả </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="b_1 b_r15 f_1">
            <div className="p_10 b_by">
              <div className="">Tài sản Chứng chỉ quỹ</div>
              <div className="d_f p_t8">
                <div>250.000đ</div>
                &nbsp;
                <div className="c_y f_s15">0đ</div>
              </div>
            </div>
          </div>
          <div className="b_1 b_r15 f_1">
            <div className="p_10 b_by">
              <div className=""> Tài sản Vàng</div>
              <div className="d_f p_t8">
                <div>250.000đ</div>
                &nbsp;
                <div className="c_y f_s15">0đ</div>
              </div>
            </div>
          </div>
          <div className="b_1 b_r15 f_1">
            <div className="p_10 b_by">
              <div className="">Tài sản Coin</div>
              <div className="d_f p_t8">
                <div>250.000đ</div>
                &nbsp;
                <div className="c_y f_s15">0đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Total;
