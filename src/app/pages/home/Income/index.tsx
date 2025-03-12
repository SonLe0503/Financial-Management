/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageIcon from "@mui/icons-material/Image";
import dayjs from "dayjs";
import { useState } from "react";
import { DatePickerV2 as DatePicker } from "@/app/components/common/DatePickerV2";
import { Button } from "@mui/material";
import income143 from "@/assets/images/income/income_143.png";
import incomeinterestmoney from "@/assets/images/income/income_interestmoney.png";
import incomeother from "@/assets/images/income/income_other.png";
import incomesalary from "@/assets/images/income/income_salary.png";
import ImageFileSelect from "@/app/components/modal/ImageFileSelect";

const SP = [
  { id: 1, image: income143, name: "Tiền chuyển đến" },
  { id: 2, image: incomeinterestmoney, name: "Tiền lãi" },
  { id: 3, image: incomeother, name: "Tiền khác" },
  { id: 4, image: incomesalary, name: "Tiền lương" },
];
const Income = () => {
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
          <div className="f_s20">Thêm khoản thu nhập</div>
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
                  <img className="s_40 b_r50 b_g" src={input.image} />
                  <div className="p_l10">{input.name}</div>
                </div>
                <input
                  className="p_20 b_r15 m_t5"
                  placeholder="Thêm ghi chú"
                  value={input.note}
                  onChange={(e) => setInput({ ...input, note: e.target.value })}
                />
                <div className="b_gw p_10 b_r15 m_t5">
                  <DatePicker
                    className="w_100"
                    value={input.date ? dayjs(input.date) : null}
                    onChange={(date: string) => {
                      if (date) {
                        setInput({
                          ...input,
                          date: dayjs(date).format("YYYY-MM-DD"),
                        });
                      }
                    }}
                  />
                </div>
                <button
                  className="p_20 b_r15 m_t5 b_gw a_i d_f"
                  onClick={() => setOpenImageSelect(true)}
                >
                  <ImageIcon />
                  <div className="p_l10">
                  {input.imageFile === null
                    ? "Thêm hình ảnh"
                    : input.imageFile.name}
                  </div>
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
            <Button variant="contained" className="w_48">
              Lưu
            </Button>
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
export default Income;
