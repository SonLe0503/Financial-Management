import { Box, IconButton, Typography, Button } from "@mui/material";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DatePickerV2 as DatePicker } from "@/app/components/common/DatePickerV2";
import dayjs from "dayjs";
import { useState } from "react";

interface ModifileGoldProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModifileGold = (props: ModifileGoldProps) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          borderRadius: 2,
          width: "350px",
          height: "600px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          Thêm sản phẩm vàng
        </Typography>
        <div className="d_fc w_100 ">
          <input
            className=" b_1 p_20 b_r15 m_t20"
            type="text"
            placeholder="Số tiền đầu tư"
          />
          <input
            className=" b_1 p_20 b_r15 m_t5"
            type="text"
            placeholder="Dơn vị phân phối"
          />
          <input
            className=" b_1 p_20 b_r15 m_t5"
            type="text"
            placeholder="Tên vàng"
          />
          <input
            className=" b_1 b_r15 p_20 b_r15 m_t5"
            type="text"
            placeholder="Loại vàng"
          />
          <input
            className=" b_1 b_r15 p_20 b_r15 m_t5"
            type="text"
            placeholder="Số lượng"
          />
          <input
            className=" b_1 b_r15 p_20 b_r15 m_t5"
            type="text"
            placeholder="Giá trị"
          />
          <div className="b_1 p_10 b_r15 m_t5">
            <DatePicker
              className="w_100"
              value={selectedDate ? dayjs(selectedDate) : null}
              onChange={(date: string) => {
                if (date) {
                  setSelectedDate(dayjs(date).format("YYYY-MM-DD HH:mm"));
                }
              }}
            />
          </div>
          <div className="d_f m_t20 j_cs">
            <Button className="w_48" variant="contained" color="success">
              Sửa
            </Button>
            <Button className="w_48" variant="contained" color="error">
              Xoá
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModifileGold;
