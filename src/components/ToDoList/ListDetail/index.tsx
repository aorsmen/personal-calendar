import { useState } from "react";
import {
  Dialog,
  List,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Box,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useToDoList from "../../../hooks/useToDoList";
import { ListDetailHeader } from "./styled.components";
import ListToDoItem from "../ListToDoItem";
import { NOTES_YELLOW } from "../../../config/theme";
import { v7 } from "uuid";

const ListDetail = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [focused, setFocused] = useState("");
  const { listDetail, setListDetail } = useToDoList();
  const activeItems = listDetail?.items
    ? listDetail.items.filter((i) => !i.isChecked)
    : [];
  const checkedItems = listDetail?.items
    ? listDetail.items.filter((i) => i.isChecked)
    : [];

  const editHandler = (act: boolean) => {
    setIsEditing(act);
  };

  const saveItemHandler = (id: string) => {
    setListDetail((prev) => {
      if (prev) {
        const actItms = prev.items.filter((i) => !i.isChecked);
        const fInx = actItms.findIndex((i) => i.id === id);
        const updItem = {
          ...prev,
        };

        if (fInx + 1 === actItms.length) {
          updItem.items.push({ id: v7(), isChecked: false, text: "" });
        }

        return updItem;
      }

      return null;
    });
  };

  const focusHandler = (id: string) => {
    setFocused(id);
  };

  const addHandler = () => {
    setListDetail((prev) => {
      if (prev) {
        const updItem = {
          ...prev,
          items: [...prev.items, { id: v7(), isChecked: false, text: "" }],
        };

        return updItem;
      }

      return null;
    });
  };

  return (
    <Dialog
      fullScreen
      open={isOpen}
      slotProps={{ paper: { sx: { backgroundColor: NOTES_YELLOW } } }}
    >
      {listDetail !== null && (
        <>
          <ListDetailHeader
            title={listDetail?.title}
            onClose={onClose}
            isEditing={isEditing}
            onEdit={editHandler}
          />
          {activeItems.length === 0 && (
            <Box sx={{ paddingInline: "20px" }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: "130px" }}
                onClick={addHandler}
              >
                <AddIcon fontSize="small" />
                <Typography sx={{ marginLeft: "10px" }}>Add Item</Typography>
              </Button>
            </Box>
          )}
          <List sx={{ padding: "0 20px 20px" }}>
            {listDetail.items.map((itm) => {
              return itm.isChecked ? (
                <span key={itm.id} />
              ) : (
                <ListToDoItem
                  key={itm.id}
                  item={itm}
                  isEditing={isEditing}
                  isFocused={focused === itm.id}
                  onSave={saveItemHandler}
                  onFocus={focusHandler}
                />
              );
            })}
          </List>
          {checkedItems.length > 0 && (
            <Accordion
              slotProps={{
                heading: {
                  sx: {
                    "& button": {
                      border: "none",
                      display: "inline-flex",
                      width: "auto",
                      paddingInline: "26px",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      marginRight: "10px",
                    },
                  },
                },
              }}
              sx={{
                opacity: 0.6,
                background: "none",
                border: "none",
                "&::before": { display: "none" },
              }}
              elevation={0}
            >
              <AccordionSummary
                sx={{ fontSize: "1rem", flexDirection: "row-reverse" }}
                expandIcon={<ExpandMoreIcon />}
              >
                {`${checkedItems.length} Checked Items`}
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ padding: 0 }}>
                  {listDetail.items.map((itm) => {
                    return itm.isChecked ? (
                      <ListToDoItem
                        key={itm.id}
                        item={itm}
                        isEditing={isEditing}
                        isFocused={focused === itm.id}
                        onSave={saveItemHandler}
                        onFocus={focusHandler}
                      />
                    ) : (
                      <span key={itm.id} />
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          )}
        </>
      )}
    </Dialog>
  );
};

export default ListDetail;
