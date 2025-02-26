import "@/styles/header.css"
import { AccountCircle, KeyboardArrowDown, Menu, Notifications } from "@mui/icons-material";
const Header = () => {

  return (
    <div className="header b_b">
      <div className="header-item">
        <div className="header-item-left">
          <Menu style={{fontSize: "30px"}}/>
        </div>
        <div className="header-item-right">
          <div className="header-notification">
            <Notifications style={{fontSize: "30px"}}/>
          </div>
          <div className="header-account">
            <AccountCircle style={{fontSize: "30px", color: "rgba(255, 175, 0, 1)"}}/>
            <KeyboardArrowDown style={{fontSize: "15px", marginLeft: "10px"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;
