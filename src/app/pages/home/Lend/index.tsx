/* eslint-disable @typescript-eslint/no-explicit-any */
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { DatePickerV2 as DatePicker } from "@/app/components/common/DatePickerV2";
import { Button } from "@mui/material";
import lend140 from "@/assets/images/lend/lend_140.png";
import lend141 from "@/assets/images/lend/lend_141.png";
import lenddebt from "@/assets/images/lend/lend_debt.png";
import lendloan from "@/assets/images/lend/lend_loan.png";


const LEND = [
  { id: 1, image: lend140, name: "Cho nợ" },
  { id: 2, image: lend141, name: "Vay nợ" },
  { id: 3, image: lenddebt, name: "Cho vay" },
  { id: 4, image: lendloan, name: "Đi vay" },
];
const Lend = () => {
  const [input, setInput] = useState<any>({
    money: "",
    note: "",
    date: "",
    imageFile: null,
    name: "Chọn nhóm",
    image: "",
  });
  const handleSelectOption = (name: string, image: any) => {
    setInput({...input, name, image});
  }
  return (
    <>
      <div className="p_40">
        <div className="b_gw p_20 b_r20">
          <div className="f_s20">Thêm khoản cho vay/nợ</div>
          <div className="d_f p_t20 w_100 j_cs">
            <div className="w_48 b_g b_r20 ">
              <div className="p_20 d_fc">
                <div className="b_gw p_20 b_r15">
                  <input className=" w_100" placeholder="Nhập số tiền" value={input.money} onChange={(e) => setInput({...input, money: e.target.value})} />
                </div>
                <div className="p_10 b_r15 m_t5 d_f a_i b_gw">
                  <img className="s_40" src={input.image} />
                  <div className="p_l10">{input.name}</div>
                </div>
                <div className="b_gw p_20 b_r15 m_t5">
                  <input className=" w_100" placeholder="Thêm ghi chú" value={input.note} onChange={(e) => setInput({...input, note: e.target.value})} />
                </div>
                <div className="b_gw p_10 b_r15 m_t5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={input.date ? dayjs(input.date) : null}
                      onChange={(date: string) => {
                        if (date) {
                          setInput({...input, date: dayjs(date).format("YYYY-MM-DD")});
                        }
                      }}
                    />
                  </LocalizationProvider>
                </div>
                <input
                  className="p_20 b_r15 m_t5 b_gw"
                  type="file"
                  onChange={(e: any) => {
                    setInput({...input, imageFile: e.target.files[0]});
                  }}
                  placeholder="Thêm hình ảnh"
                />
                {input.imageFile && (
                  <div>
                    <img
                      src={URL.createObjectURL(input.imageFile)}
                      alt="not found"
                      width={"250px"}
                    />
                    <br /> <br />
                    <button onClick={() => setInput({...input, imageFile: null})}>
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="w_48 b_g b_r20">
              <div className="p_20">
                <div className="scroll_spend b_r15">
                  {LEND.map((item) => (
                    <div
                      className="b_gw p_10 b_r15 d_f a_i m_t5"
                      onClick={() => handleSelectOption(item.name, item.image)}
                    >
                      <img className="s_40" src={item.image} />
                      <div className="p_l10">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p_t20">
            <Button variant="contained">Lưu</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lend;
