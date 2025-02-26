/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
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
// import spend84 from "@/assets/images/spends/spend_84.png";
// import spend126 from "@/assets/images/spends/spend_126.png";
// import spend138 from "@/assets/images/spends/spend_138.png";
// import shopping from "@/assets/images/spends/spend_shopping.png";
// import spend41 from "@/assets/images/spends/spend_41.png";
// import spend107 from "@/assets/images/spends/spend_107.png";
// import spend63 from "@/assets/images/spends/spend_63.png";
// import family from "@/assets/images/spends/spend_family.png";
// import spend29 from "@/assets/images/spends/spend_29.png";
// import spend8 from "@/assets/images/spends/spend_8.png";
// import spend53 from "@/assets/images/spends/spend_53.png";
// import transport from "@/assets/images/spends/spend_transport.png";
// import spend130 from "@/assets/images/spends/spend_130.png";
// import medical from "@/assets/images/spends/spend_medical.png";
// import doctor from "@/assets/images/spends/spend_doctor.png";
// import spend70 from "@/assets/images/spends/spend_70.png";
// import educatiion from "@/assets/images/spends/spend_education.png";
// import entertainment from "@/assets/images/spends/spend_entertainment.png";
// import spend94 from "@/assets/images/spends/spend_94.png";
// import spend49 from "@/assets/images/spends/spend_49.png";
// import donation from "@/assets/images/spends/spend_donations.png"
// import spend137 from "@/assets/images/spends/spend_137.png";
// import invest from "@/assets/images/spends/spend_invest.png";
// import expense from "@/assets/images/spends/spend_other_expense.png";
// import spend142 from "@/assets/images/spends/spend_142.png";
// import spend4 from "@/assets/images/spends/spend_4.png";

const SP = [
  {id: 1, image: fooddrink, name: "Ăn uống"},
  {id: 2, image: spend135, name: "Hoá đơn"},
  {id: 3, image: spend136, name: "Tiền nhà"},
  {id: 4, image: spend124, name: "Điện nước"},
  {id: 5, image: spend134, name: "Tiền điện thoại"},
  {id: 6, image: spend125, name: "Internet"},
  {id: 7, image: spend139, name: "Tiền gas"},
];
const Spend = () => {
  const [input, setInput] = useState<any>(
    {
      money: "",
      name: "Chọn nhóm",
      image: null,
      note: "",
      date: "",
      imageFile: null
    }
  );
  const handleSelectOption = (name: string, image: any) => {
    setInput({...input, name, image});
  }
  return (
    <>
      <div className="p_40">
        <div className="b_gw p_20 b_r20">
          <div className="f_s20">Thêm giao dịch chi tiêu</div>
          <div className="d_f p_t20 w_100 j_cs">
            <div className="w_48 b_g b_r20 ">
              <div className="p_20 d_fc">
                <input className="p_20 b_r15" placeholder="Nhập số tiền" value={input.money} onChange={(e) => setInput({...input, money: e.target.value})} />
                <div className="p_10 b_r15 m_t5 d_f a_i b_gw">
                  <img className="s_40" src={input.image} />
                  <div className="p_l10">{input.name}</div>
                </div>
                <input
                  className=" p_20 b_r15 m_t5"
                  placeholder="Thêm ghi chú" 
                  value={input.note}
                  onChange={(e) => setInput({...input, note: e.target.value})}
                />
                <div className="b_gw p_10 b_r15 m_t5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={input.date ? dayjs(input.date) : null}
                      onChange={(date: string) => {
                        if (date) {
                          setInput(dayjs(date).format("YYYY-MM-DD"));
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
                  {SP.map((item) => (
                    <div className="b_gw p_10 b_r15 d_f a_i m_t5" onClick={() => handleSelectOption(item.name, item.image)}>
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
export default Spend;
{
  /*
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend84} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend126} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend138} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={shopping} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend41} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend107} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend63} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={family} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend29} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend8} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend53} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={transport} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend130} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={medical} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={doctor} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend70} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={educatiion} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={entertainment} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend94} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend49} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={donation} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend137} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={invest} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={expense} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend142} />
<div className="p_l10">Hoá đơn</div>
</div>
<div className="b_gw p_10 b_r15 d_f a_i m_t5">
<img className="s_40" src={spend4} />
<div className="p_l10">Hoá đơn</div>
</div> */
}
