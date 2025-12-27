import { Dialog, Box, Button } from "@mui/material";

const Confirmation = ({
  isOpen,
  children,
  onConfirm,
  onClose,
  buttons = { no: "Cancel", yes: "Confirm" },
  confirmColor = "primary",
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onConfirm: () => void;
  onClose: () => void;
  buttons?: { no: string; yes: string };
  confirmColor?: "primary" | "error" | "warning";
}) => {
  return (
    <Dialog maxWidth="xs" open={isOpen} fullWidth closeAfterTransition={false}>
      <Box sx={{ padding: 0, backgroundColor: "#FFF" }}>
        {children}
        <Box sx={{ padding: "10px", textAlign: "right" }}>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={onClose}
            sx={{ marginRight: "10px" }}
          >
            {buttons.no}
          </Button>
          <Button
            variant="contained"
            size="small"
            color={confirmColor}
            onClick={onConfirm}
          >
            {buttons.yes}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Confirmation;
