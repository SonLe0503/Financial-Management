import "@/styles/index.css";
import { Button, Input } from '@mui/material';

const Login = () => {
  return (
    <div className="d_fc">
      <div className="d_f j_c a_i h_100vh">
        <div className="b_gw w_40 b_r20 b_sx">
          <div className="p_20">
            <div className="d_fc p_20">
              <div className="text_red f_s40">
              TIDE SQUARE
              </div>
            </div>
            <div className="d_fc m_t20">
              <Input className="b_r15 p_10" type="text" />
            </div>
            <div className="d_fc m_t5">
              <Input className="b_r15 p_10 " type="text" />
            </div>
            <div className="d_fc m_t40">
              <Button className="b_r15 p_10" variant="contained" type="submit">Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
