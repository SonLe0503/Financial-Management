/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IconButton,
  Typography,
  Box,
  Modal,
  Button,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface ImageFileSelectProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  input: any;
  setInput: (input: any) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ImageFileSelect = (props: ImageFileSelectProps) => {
  const { open, setOpen, input, setInput } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
            width: "500px",
            height: "400px",
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
            Xem ảnh
          </Typography>
          <Button
          className="w_100"
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event: any) =>
                setInput({ ...input, imageFile: event.target.files[0] })
              }
              multiple
            />
          </Button>
          {input.imageFile && (
            <>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "250px",
                  overflow: "hidden",
                  mt: 2,
                }}
              >
                <img
                  src={URL.createObjectURL(input.imageFile)}
                  alt="not found"
                  width={"100%"}
                />
                <br /> <br />
              </Box>
              <div className="m_t20 w_100">
                <Button
                className="w_100"
                  variant="contained"
                  size="small"
                  onClick={() => setInput({ ...input, imageFile: null })}
                >
                  Remove
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};
export default ImageFileSelect;
