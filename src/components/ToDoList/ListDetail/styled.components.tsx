import { IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CancelIcon from "@mui/icons-material/Cancel";

export const ListDetailHeader = ({
  title,
  isEditing,
  onClose,
  onEdit,
}: {
  title: string;
  isEditing: boolean;
  onClose: () => void;
  onEdit: (act: boolean) => void;
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ padding: "20px" }}
    >
      <Typography variant="h3" sx={{ fontSize: "1.8rem" }}>
        {title}
      </Typography>
      {isEditing ? (
        <IconButton onClick={() => onEdit(false)}>
          <CancelIcon fontSize="large" />
        </IconButton>
      ) : (
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={() => onEdit(true)}>
            <EditNoteIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};
