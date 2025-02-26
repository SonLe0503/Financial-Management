import logoTotalAssets from "@/assets/images/logo/logo_total_assets.png";
import logo_tichluy from "@/assets/images/logo/logo_tichluy.png";
import logo_chungchiquy from "@/assets/images/logo/logo_chungchiquy.png";
import logo_vang from "@/assets/images/logo/logo_vang.png";
import logo_coin from "@/assets/images/logo/logo_coin.png";
import "@/styles/menuinvest.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MenuInvest = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("total");
  const handleChangeMenuInvest = (menu: string, path: string) => {
    setActive(menu);
    navigate(path);
  };
  return (
    <>
      <div className="d_f j_c b_gw">
        <div className={`d_f p_5 m_r20 menu_invest_item ${active === "total" ? "active" : ""}`} onClick={() => handleChangeMenuInvest("total", "/investment/assets/total")}>
          <img className="s_35" src={logoTotalAssets} />
          <div className="p_l10">
            <div>Tổng Tài Sản</div>
            <div>0đ</div>
          </div>
        </div>
        <div className={`d_f p_5 m_r20 menu_invest_item ${active === "tichluy" ? "active" : ""}`} onClick={() => handleChangeMenuInvest("tichluy", "/investment/assets/accumulate")}>
          <img className="s_35" src={logo_tichluy} />
          <div className="p_l10">
            <div>Tích Luỹ</div>
            <div>0đ</div>
          </div>
        </div>
        <div className={`d_f p_5 m_r20 menu_invest_item ${active === "chungchiquy" ? "active" : ""}`} onClick={() => handleChangeMenuInvest("chungchiquy", "/investment/assets/fundcertificate")}>
          <img className="s_35" src={logo_chungchiquy} />
          <div className="p_l10">
            <div>Chứng Chỉ Quỹ</div>
            <div>0đ</div>
          </div>
        </div>
        <div className={`d_f p_5 m_r20 menu_invest_item ${active === "vang" ? "active" : ""}`} onClick={() => handleChangeMenuInvest("vang", "/investment/assets/gold")}>
          <img className="s_35" src={logo_vang} />
          <div className="p_l10">
            <div>Vàng</div>
            <div>0đ</div>
          </div>
        </div>
        <div className="d_f p_5 m_r20">
          <img className="s_35" src={logo_coin} />
          <div className="p_l10">
            <div>Coin</div>
            <div>0đ</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuInvest;
