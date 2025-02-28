/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { Button } from "@mui/material";
import fooddrink from "@/assets/images/spends/spend_fooddrink.png";
import spend135 from "@/assets/images/spends/spend_135.png";
import spend136 from "@/assets/images/spends/spend_136.png";
import income143 from "@/assets/images/income/income_143.png";
import incomeinterestmoney from "@/assets/images/income/income_interestmoney.png";
import incomeother from "@/assets/images/income/income_other.png";
import lend140 from "@/assets/images/lend/lend_140.png";
import lend141 from "@/assets/images/lend/lend_141.png";
import lenddebt from "@/assets/images/lend/lend_debt.png";

const data = [
  {
    id: 1,
    image: fooddrink,
    money: 100000,
    name: "Ăn uống",
    date: "2025-02-14",
    type: "spend",
  },
  {
    id: 2,
    image: spend135,
    money: 100000,
    name: "Hoá đơn",
    date: "2025-02-13",
    type: "spend",
  },
  {
    id: 3,
    image: spend136,
    money: 100000,
    name: "Tiền nhà",
    date: "2025-02-15",
    type: "spend",
  },
  {
    id: 4,
    image: income143,
    money: 100000,
    name: "Tiền chuyển đến",
    date: "2025-02-12",
    type: "income",
  },
  {
    id: 5,
    image: incomeinterestmoney,
    money: 100000,
    name: "Tiền lãi",
    date: "2025-02-14",
    type: "income",
  },
  {
    id: 6,
    image: incomeother,
    money: 100000,
    name: "Tiền khác",
    date: "2025-02-11",
    type: "income",
  },
  {
    id: 7,
    image: lend140,
    money: 100000,
    name: "Cho nợ",
    date: "2025-02-11",
    type: "lend",
  },
  {
    id: 8,
    image: lend141,
    money: 100000,
    name: "Vay nợ",
    date: "2025-02-12",
    type: "lend",
  },
  {
    id: 9,
    image: lenddebt,
    money: 100000,
    name: "Cho vay",
    date: "2025-02-14",
    type: "lend",
  },
];

const groupByDate = (transactions: any) => {
  return transactions.reduce((acc: any, transaction: any) => {
    if (!acc[transaction.date]) {
      acc[transaction.date] = {
        items: [],
        totalIncome: 0,
        totalSpend: 0,
        totalLendMinus: 0, // Tổng tiền cho vay, cho nợ (trừ tiền)
        totalLendPlus: 0, // Tổng tiền vay nợ, đi vay (cộng tiền)
      };
    }
    acc[transaction.date].items.push(transaction);
    if (transaction.type === "income") {
      acc[transaction.date].totalIncome += transaction.money;
    } else if (transaction.type === "spend") {
      acc[transaction.date].totalSpend += transaction.money;
    } else if (transaction.type === "lend") {
      if (["Cho vay", "Cho nợ"].includes(transaction.name)) {
        acc[transaction.date].totalLendMinus += transaction.money; // Trừ tiền
      } else if (["Vay nợ", "Đi vay"].includes(transaction.name)) {
        acc[transaction.date].totalLendPlus += transaction.money; // Cộng tiền
      }
    }
    acc[transaction.date].total =
        acc[transaction.date].totalIncome -
        acc[transaction.date].totalSpend +
        acc[transaction.date].totalLendPlus -
        acc[transaction.date].totalLendMinus;
    return acc;
  }, {}as Record<
  string,
  {
    items: typeof transactions;
    totalIncome: number;
    totalSpend: number;
    totalLendMinus: number;
    totalLendPlus: number;
    total: number;
  }
>);
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("vi-VN", { month: "long" });
  const year = date.getFullYear();
  const weekday = date.toLocaleString("vi-VN", { weekday: "long" });
  return { day, month, year, weekday };
};
const Log = () => {
  const groupedData = groupByDate(data);
  const sortedDates = Object.keys(groupedData).sort(
    (a: string, b: string) => new Date(b).getTime() - new Date(a).getTime()
  );

  const [selectedDate, setSelectedDate] = React.useState<any>(null);
  return (
    <>
      <div className="p_40">
        <div className="b_gw p_20 b_r20">
          <div className="f_s20">Sổ giao dịch</div>
          <div className="p_t20">
            <div className="b_g d_f b_r15 p_10 j_cs">
              <div className="p_10 b_gw b_r15">
                <DatePicker
                  views={["year", "month"]}
                  label="Chọn tháng"
                  value={selectedDate}
                  onChange={(selectedDate) => setSelectedDate(selectedDate)}
                />
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
                    {sortedDates.map((date) => {
                      const { day, month, year, weekday } = formatDate(date);
                      return (
                        <div key={date} className="p_t20">
                          <div className="d_f j_cs a_i p_b10 ">
                            <div className="d_f">
                              <div className="f_s40">{day}</div>
                              <div className="p_l10">
                                <div>{weekday}</div>
                                <div>{`${month} ${year}`}</div>
                              </div>
                            </div>
                            <div>
                              <div>{groupedData[date].total}</div>
                            </div>
                          </div>
                          {groupedData[date].items.map((transaction: any) => (
                            <div
                              key={transaction.id}
                              className="d_f j_cs a_i p_b10"
                            >
                              <div className="d_f a_i">
                                <img
                                  className="s_40"
                                  src={transaction.image}
                                  alt={transaction.name}
                                />
                                <div className="p_l10">
                                  <div>{transaction.name}</div>
                                </div>
                              </div>
                              <div>
                                <div className={transaction.type === "spend" || transaction.name === "Cho nợ" || transaction.name === "Cho vay" ? "text_red" : "text_green"}>{transaction.money}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
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
                    <div className="m_t5 d_fc">
                      <div>Hình ảnh: </div>
                      <div className="b_r15 b_1 w_50 t_a">
                        <img src={fooddrink} className="s_image_log b_g" />
                      </div>
                    </div>
                  </div>
                  <div className="p_t20 d_f j_cs">
                    <Button
                      className="w_48"
                      variant="contained"
                      color="success"
                    >
                      Sửa
                    </Button>
                    <Button className="w_48" variant="contained" color="error">
                      Xoá
                    </Button>
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
