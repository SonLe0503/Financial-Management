/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { DatePickerV2 as DatePicker } from "@/app/components/common/DatePickerV2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import fooddrink from "@/assets/images/spends/spend_fooddrink.png";
import spend135 from "@/assets/images/spends/spend_135.png";
import spend136 from "@/assets/images/spends/spend_136.png";
import spend124 from "@/assets/images/spends/spend_124.png";
import spend134 from "@/assets/images/spends/spend_134.png";
import spend125 from "@/assets/images/spends/spend_125.png";
import spend139 from "@/assets/images/spends/spend_139.png";
import ImageFileSelect from "@/app/components/modal/ImageFileSelect";

const SP = [
  { id: 1, image: fooddrink, name: "Ăn uống" },
  { id: 2, image: spend135, name: "Hoá đơn" },
  { id: 3, image: spend136, name: "Tiền nhà" },
  { id: 4, image: spend124, name: "Điện nước" },
  { id: 5, image: spend134, name: "Tiền điện thoại" },
  { id: 6, image: spend125, name: "Internet" },
  { id: 7, image: spend139, name: "Tiền gas" },
];
const Spend = () => {
  const [input, setInput] = useState<any>({
    money: "",
    name: "Chọn nhóm",
    image: null,
    note: "",
    date: "",
    imageFile: null,
  });
  console.log(input.imageFile);

  const [openImageSelect, setOpenImageSelect] = useState<boolean>(false);

  const handleSelectOption = (name: string, image: any) => {
    setInput({ ...input, name, image });
  };
  return (
    <>
      <div className="p_40">
        <div className="b_gw p_20 b_r20">
          <div className="f_s20">Thêm giao dịch chi tiêu</div>
          <div className="d_f p_t20 w_100 j_cs">
            <div className="w_48 b_g b_r20 ">
              <div className="p_20 d_fc">
                <input
                  className="p_20 b_r15"
                  placeholder="Nhập số tiền"
                  value={input.money}
                  onChange={(e) =>
                    setInput({ ...input, money: e.target.value })
                  }
                />
                <div className="p_10 b_r15 m_t5 d_f a_i b_gw">
                  <img className="s_40 b_r50 b_g" src={input.image}  />
                  <div className="p_l10">{input.name}</div>
                </div>
                <input
                  className=" p_20 b_r15 m_t5"
                  placeholder="Thêm ghi chú"
                  value={input.note}
                  onChange={(e) => setInput({ ...input, note: e.target.value })}
                />
                <div className="b_gw p_10 b_r15 m_t5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="w_100"
                      value={input.date ? dayjs(input.date) : null}
                      onChange={(date: string) => {
                        if (date) {
                          setInput(dayjs(date).format("YYYY-MM-DD"));
                        }
                      }}
                    />
                  </LocalizationProvider>
                </div>
                <button
                  className="p_20 b_r15 m_t5 b_gw a_i d_f"
                  onClick={() => setOpenImageSelect(true)}
                >
                  {
                    input.imageFile !== null ? <ImageIcon /> : ("")
                  }
                  Thêm hình ảnh
                </button>
              </div>
            </div>
            <div className="w_48 b_g b_r20">
              <div className="p_20">
                <div className="scroll_spend b_r15">
                  {SP.map((item) => (
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
            <Button variant="contained" className="w_48">Lưu</Button>
          </div>
        </div>
      </div>
      <ImageFileSelect
        open={openImageSelect}
        setOpen={setOpenImageSelect}
        input={input}
        setInput={setInput}
      />
    </>
  );
};
export default Spend;
