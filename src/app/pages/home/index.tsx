import "@/styles/home.css";
import logo_tichluy from "@/assets/images/logo/logo_tichluy.png";
import logo_chungchiquy from "@/assets/images/logo/logo_chungchiquy.png";
import logo_coin from "@/assets/images/logo/logo_coin.png";
import logo_vang from "@/assets/images/logo/logo_vang.png";
import { Button } from "@mui/material";
// import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// const data = {
//   labels: ["1/2", "2/2", "3/2", "4/2", "5/2", "6/2"],
//   datasets: [
//     {
//       label: "Tổng chi tiêu tháng",
//       data: [0, 1000000, 400, 700, 600, 900],
//       borderColor: " rgba(255, 42, 0, 1)",
//       backgroundColor: "rgba(75, 192, 192, 0.2)",
//       tension: 0.4,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: { position: "top" },
//     title: { display: true, text: "Biểu đồ chi tiêu" },
//   },
// };
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home_content">
        <div className="hone_content_item">
          <div className="first_item">
            <div className="first_item_element b_r20">
              <div className="p_20">
                <div>
                  <div className="f_s20">Tổng tài sản</div>
                  <div className="d_f p_t8">
                    <div className="f_s20">250.000đ</div>
                    &nbsp;
                    <div className="c_y">10.000đ</div>
                  </div>
                </div>
                <div className="p_t20 d_fc">
                  <div className="d_f p_b20">
                    <div className="d_f w_50">
                      <img className="s_40" src={logo_tichluy} />
                      <div className="p_l10">
                        <div>Tích luỹ</div>
                        <div className="d_f">
                          <div className="p_r10 ">0đ</div>
                          <div className="c_y">0đ (0%)</div>
                        </div>
                      </div>
                    </div>
                    <div className="d_f">
                      <img className="s_40" src={logo_chungchiquy} />
                      <div className="p_l10">
                        <div>Chứng chỉ quỹ</div>
                        <div className="d_f">
                          <div className="p_r10">0đ</div>
                          <div className="c_y">0đ (0%)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d_f">
                    <div className="d_f w_50">
                      <img className="s_40" src={logo_vang} />
                      <div className="p_l10">
                        <div>Vàng</div>
                        <div className="d_f">
                          <div className="p_r10 ">0đ</div>
                          <div className="c_y">0đ (0%)</div>
                        </div>
                      </div>
                    </div>
                    <div className="d_f">
                      <img className="s_40" src={logo_coin} />
                      <div className="p_l10">
                        <div>Coin</div>
                        <div className="d_f">
                          <div className="p_r10">0đ</div>
                          <div className="c_y">0đ (0%)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="first_item_element b_r20">
              <div className="p_20">
                <div className="f_s20">Tổng số dư tài khoản</div>
                <div className="d_f p_t8">
                  <div className="f_s20">250.000đ</div>
                  &nbsp;
                  <div className="c_y">10.000đ</div>
                </div>
                <div className="p_t20 t_a">
                  <Button variant="contained" size="small" onClick={() => navigate("/home/bank_transaction")}>
                    Cập nhật giao dịch
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="second_item">
            <div className="second_item_element b_r20">
              <div className="p_20">
                <div className=" t_a">Khoản Chi</div>
                <div className="p_t8">
                  <div className="scroll_home">
                    <div className="b_g b_r15 p_10">home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                  </div>
                </div>
                <div className="t_a p_t8">
                  <Button variant="contained" size="small" onClick={() => navigate("/home/spend")}>
                    Thêm giao dịch
                  </Button>
                </div>
              </div>
            </div>
            <div className="second_item_element b_r20">
              <div className="p_20">
                <div className="t_a">Khoản Thu</div>
                <div className="p_t8">
                  <div className="scroll_home">
                    <div className="b_g b_r15 p_10">home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                  </div>
                </div>
                <div className="t_a p_t8">
                  <Button variant="contained" size="small" onClick={() => navigate("/home/income")}>
                    Thêm giao dịch
                  </Button>
                </div>
              </div>
            </div>
            <div className="second_item_element b_r20">
              <div className="p_20">
                <div className="t_a">Vay/Nợ</div>
                <div className="p_t8">
                  <div className="scroll_home">
                    <div className="b_g b_r15 p_10">home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                    <div className="b_g b_r15 p_10 m_t5">Home</div>
                  </div>
                </div>
                <div className="t_a p_t8">
                  <Button variant="contained" size="small" onClick={() => navigate("/home/lend")}>
                    Thêm giao dịch
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="third_item">
            <div className="third_item_element b_r20">
              <div className="p_20 w_100">
                <div className="d_f a_i">
                  <div className="f_s20 p_r10">Đầu tư cùng TideSquare</div>
                  <div className="d_f g_10 p_l10">
                    <div>
                      <Button variant="outlined" size="small">
                        Tích luỹ
                      </Button>
                    </div>
                    <div>
                      <Button variant="contained" size="small">
                        Chứng chỉ quỹ
                      </Button>
                    </div>
                    <div>
                      <Button variant="outlined" size="small">
                        Vàng
                      </Button>
                    </div>
                    <div>
                      <Button variant="outlined" size="small">
                        Coin
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="d_f p_t8">
                  <div className="w_100 b_gx b_r15 ">
                    <div className="h_130p m_tb20 b_gw ">
                      <div
                        className="p_20 h_90p d_f g_20 "
                        style={{ maxWidth: "500px" }}
                      >
                        <Swiper>
                          <SwiperSlide>
                            <div className="b_g h_90p w_150p b_r15">
                              <div className="p_20">
                                <div>Tích luỹ</div>
                                <div>Kỳ hạn 18 tháng</div>
                                <div>7%/năm</div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="b_g h_90p w_150p b_r15">
                              <div className="p_20">
                                <div>Tích luỹ</div>
                                <div>Kỳ hạn 18 tháng</div>
                                <div>7%/năm</div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fourth_item">
            <div className="fourth_item_element b_r20">
              <div className="p_20 d_fc w_100">
                <div className="d_f w_100">
                  <div className="w_50 t_a b_s">Tổng chi</div>
                  <div className="w_50 t_a">Tổng thu</div>
                </div>
                <div className="h_100 p_t8">
                  <div className="h_100 b_r15">
                    <div className="p_10">
                      {/* <Line data={data} options={options} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fourth_item_element b_r20">
              <div className="p_20 w_100">
                <div>Sổ giao dịch</div>
                <div className=" p_t8">
                  <div className="scroll_log">
                    <div className="w_100 b_g b_r15">
                      <div className="p_10">Home</div>
                    </div>
                    <div className="w_100 b_g b_r15 m_t5">
                      <div className="p_10">Home</div>
                    </div>
                    <div className="w_100 b_g b_r15 m_t5">
                      <div className="p_10">Home</div>
                    </div>
                    <div className="w_100 b_g b_r15 m_t5">
                      <div className="p_10">Home</div>
                    </div>
                    <div className="w_100 b_g b_r15 m_t5">
                      <div className="p_10">Home</div>
                    </div>
                    <div className="w_100 b_g b_r15 m_t5">
                      <div className="p_10">Home</div>
                    </div>
                    <div className="w_100 b_g b_r15 m_t5">
                      <div className="p_10">Home</div>
                    </div>
                    <div className="w_100 b_g b_r15 m_t5">
                      <div className="p_10">Home</div>
                    </div>
                  </div>
                </div>
                <div className="d_f j_c p_t8">
                  <div className="b_1 d_f c_y p_10 b_gx b_r20" onClick={() => navigate("/home/transaction_log")}>
                    <div className="">Xem chi tiết</div>
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
export default Home;
