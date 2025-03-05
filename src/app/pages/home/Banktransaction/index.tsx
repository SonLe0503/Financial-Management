import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DatePickerV2 as DatePicker } from "@/app/components/common/DatePickerV2";
import { Button, styled } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import "@/styles/transactionbank.css";
import * as XLSX from "xlsx";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

import fooddrink from "@/assets/images/spends/spend_fooddrink.png";
import spend135 from "@/assets/images/spends/spend_135.png";
import spend136 from "@/assets/images/spends/spend_136.png";
import spend124 from "@/assets/images/spends/spend_124.png";
import spend134 from "@/assets/images/spends/spend_134.png";
import spend125 from "@/assets/images/spends/spend_125.png";
import spend139 from "@/assets/images/spends/spend_139.png";
import income143 from "@/assets/images/income/income_143.png";
import incomeinterestmoney from "@/assets/images/income/income_interestmoney.png";
import incomeother from "@/assets/images/income/income_other.png";
import incomesalary from "@/assets/images/income/income_salary.png";
import lend140 from "@/assets/images/lend/lend_140.png";
import lend141 from "@/assets/images/lend/lend_141.png";
import lenddebt from "@/assets/images/lend/lend_debt.png";
import lendloan from "@/assets/images/lend/lend_loan.png";
import ImageFileSelect from "@/app/components/modal/ImageFileSelect";


const GROUP = [
  { id: 1, name: "Ăn uống", image: fooddrink, category: "spend" },
  { id: 2, name: "Hoá đơn", image: spend135, category: "spend" },
  { id: 3, name: "Tiền nhà", image: spend136, category: "spend" },
  { id: 4, name: "Điện nước", image: spend124, category: "spend" },
  { id: 5, name: "Tiền điện thoại", image: spend134, category: "spend" },
  { id: 6, name: "Internet", image: spend125, category: "spend" },
  { id: 7, name: "Tiền gas", image: spend139, category: "spend" },
  { id: 8, name: "Tiền chuyển đến", image: income143, category: "income" },
  { id: 9, name: "Tiền lãi", image: incomeinterestmoney, category: "income" },
  { id: 10, name: "Tiền khác", image: incomeother, category: "income" },
  { id: 11, name: "Tiền lương", image: incomesalary, category: "income" },
  { id: 12, name: "Cho nợ", image: lend140, category: "lend" },
  { id: 13, name: "Vay nợ", image: lend141, category: "lend" },
  { id: 14, name: "Cho vay", image: lenddebt, category: "lend" },
  { id: 15, name: "Đi vay", image: lendloan, category: "lend" },
];

const Bank = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const [input, setInput] = useState<any>({
    money: "",
    note: "",
    date: "",
    imageFile: null,
    name: "Chọn nhóm",
    image: "",
  });

  const [openImageSelect, setOpenImageSelect] = useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<string>("spend");
  const filterGroup = GROUP.filter(
    (item) => item.category === selectedCategory
  );

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSelectGpup = (image: any, name: string) => {
    setInput({ ...input, image: image, name: name });
  };

  const handleSelectOption = (money: number, date: string) => {
    setInput({ ...input, money: money, date: date });
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFileUpLoad = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const range = worksheet["!ref"];
      console.log("Phạm vi dữ liệu:", range);
      const jsonData = XLSX.utils.sheet_to_json(worksheet, {
        range: "A19:V30",
      });
      setTransactions(jsonData);
      console.log(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };
  const [extention, setExtention] = useState<any>([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2000/data/transactions"
      );
      setExtention(response.data.data.transactions);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
    }
  };

  const downloadExtension = () => {
    const link = document.createElement("a");
    link.href = "http://localhost:2000/TransactionsExtention.zip";
    link.download = "TransactionsExtension.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="p_40">
        <div className="b_gw p_20 b_r20">
          <div className="f_s20 d_f j_cs">
            <div>Cập nhật lịch sử giao dịch từ ngân hàng</div>
            <div className="w_56 d_f j_cs">
              <Button
                variant="contained"
                size="small"
                startIcon={<CloudUploadIcon />}
                component="label"
              >
                <VisuallyHiddenInput
                  type="file"
                  accept=".xlsx"
                  onChange={handleFileUpLoad}
                />
                File UpLoad
              </Button>
              <Button variant="contained" size="small" onClick={downloadExtension}>Tải extention</Button>
            </div>
          </div>
          <div className="d_f p_t20 w_100 j_cs">
            <div className="w_40 b_g b_r20 ">
              <div className="p_20">
                <div className="b_gw b_r15">
                  <div className="d_f">
                    <div
                      className={`p_10 w_50 t_a cate_item ${
                        selectedCategory === "spend" ? "active" : ""
                      }`}
                      onClick={() => handleSelectCategory("spend")}
                    >
                      Khoản chi
                    </div>
                    <div
                      className={`p_10 w_50 t_a cate_item ${
                        selectedCategory === "income" ? "active" : ""
                      }`}
                      onClick={() => handleSelectCategory("income")}
                    >
                      Khoản thu{" "}
                    </div>
                  </div>
                  <div className="b_t">
                    <div className="p_10">
                      <div className="scroll_bank">
                        {filterGroup.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="d_f a_i b_g b_r15 m_t5"
                              onClick={() =>
                                handleSelectGpup(item.image, item.name)
                              }
                            >
                              <img className="s_40" src={item.image} />
                              <div className="p_l10">{item.name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="p_10 t_a b_t">
                    <Button
                      className="w_100"
                      variant="contained"
                      size="small"
                      onClick={() => setSelectedCategory("lend")}
                    >
                      Vay/nợ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w_56 b_g b_r20">
              <div className="p_20">
                <div className="srcoll_bank_right b_r15">
                  {transactions.length > 0 &&
                    transactions.map((item: any) => (
                      <div
                        className="b_gw p_10 b_r15 a_i m_t5"
                        onClick={() =>
                          handleSelectOption(
                            parseFloat(
                              (item["Phát sinh có\r\nCredit"] || "0").replace(
                                /,/g,
                                ""
                              )
                            ) > 0
                              ? item["Phát sinh có\r\nCredit"]
                              : item["Phát sinh nợ\r\nDebit"],
                            item["Ngày giao dịch\r\nTransaction Date"]
                          )
                        }
                      >
                        <div key={item["STT\r\nNo"]}>
                          <div>Thông báo biến động số dư</div>
                          <div>
                            TK: |GD:{" "}
                            {parseFloat(
                              (item["Phát sinh có\r\nCredit"] || "0").replace(
                                /,/g,
                                ""
                              )
                            ) > 0 ? (
                              <span>+{item["Phát sinh có\r\nCredit"]}VND</span>
                            ) : (
                              <span>-{item["Phát sinh nợ\r\nDebit"]}VND</span>
                            )}{" "}
                            | {item["Ngày giao dịch\r\nTransaction Date"]} |ND:{" "}
                            {item["Nội dung\r\nDetails"]}
                          </div>
                        </div>
                      </div>
                    ))}
                  {extention.length > 0 &&
                    extention.map((item: any) => (
                      <div className="b_gw p_10 b_r15 a_i m_t5">
                        <div key={item.id}>
                          <div>Thông báo biến động số dư</div>
                          <div>
                            TK: |GD: {item.amount} | {item.date} |ND:{" "}
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p_t20 w_100">
            <div className="b_g b_r15">
              <div className="p_10 d_f g_20">
                <input
                  className="p_10 b_r15 w_25 t_a"
                  placeholder="Nhập số tiền"
                  value={`${input.money} VND`}
                />
                <div className="p_10 b_r15 d_f a_i b_gw w_25">
                  <img className="s_40 b_r50 b_g" src={input.image} />
                  <div className="p_l10">{input.name}</div>
                </div>
                <input className="p_10 b_r15 w_25" placeholder="Ghi chú" />
                <div className="">
                  <Button variant="contained" size="small" className="w_100">
                    Lưu
                  </Button>
                </div>
              </div>
              <div className="p_l10 p_r10 p_b10 d_f g_20">
                <div className="b_gw p_10 b_r15 w_25 d_f j_c">
                  <DatePicker
                    value={input.date ? dayjs(input.date) : null}
                    onChange={(date: string) => {
                      if (date) {
                        setInput({
                          ...input,
                          date: dayjs(date).format("YYYY-MM-DD HH:mm"),
                        });
                      }
                    }}
                  />
                </div>
                <button
                  className="p_20 b_r15 m_t5 b_gw a_i d_f w_25"
                  onClick={() => setOpenImageSelect(true)}
                >
                  {input.imageFile !== null ? <ImageIcon /> : ""}
                  <div className="p_l10">
                    {input.imageFile === null
                      ? "Thêm hình ảnh"
                      : input.imageFile.name}
                  </div>
                </button>
              </div>
            </div>
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
export default Bank;
