import { useState, useEffect, useRef } from "react";
import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemAvatar,
  Checkbox,
  TextField,
  ClickAwayListener,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { ToDoListItemData } from "../../../types/todoList";
import useToDoList from "../../../hooks/useToDoList";

const ListToDoItem = ({
  item,
  isEditing,
  isFocused,
  onSave,
  onFocus,
}: {
  item: ToDoListItemData;
  isEditing: boolean;
  isFocused: boolean;
  onSave: (id: string) => void;
  onFocus: (id: string) => void;
}) => {
  const [itemText, setItemText] = useState(item.text);
  const { setListDetail } = useToDoList();
  const textRef = useRef<HTMLInputElement>(null);
  const id = item.id;

  const checkHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setListDetail((prev) => {
      if (prev) {
        const updItem = {
          ...prev,
          items: prev.items?.map((tdl) =>
            tdl.id === id ? { ...tdl, isChecked: checked } : tdl
          ),
        };

        return updItem;
      }

      return null;
    });
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editTextHandler();
    onSave(id);
  };

  const editTextHandler = () => {
    if (itemText !== "") {
      setListDetail((prev) => {
        if (prev) {
          const updItem = {
            ...prev,
            items: prev.items?.map((tdl) =>
              tdl.id === id ? { ...tdl, text: itemText } : tdl
            ),
          };

          return updItem;
        }

        return null;
      });
    } else {
      setItemText(item.text);
    }
    onFocus("");
  };

  const removeItemHandler = () => {
    setListDetail((prev) => {
      if (prev) {
        const updItem = {
          ...prev,
          items: prev.items?.filter((tdl) => tdl.id !== id),
        };

        return updItem;
      }

      return null;
    });
  };

  useEffect(() => {
    if (isFocused && textRef.current) {
      const len = itemText.length;

      textRef.current.focus();
      textRef.current.setSelectionRange(len, len);
    } else if (!isFocused && itemText === "") {
      onFocus(id);
    }
  }, [isFocused, textRef.current, itemText, id]);

  return (
    <ListItem
      secondaryAction={
        <>
          {isEditing && (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={removeItemHandler}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </>
      }
      sx={{ paddingLeft: 0 }}
    >
      <ListItemAvatar>
        <Checkbox
          size="large"
          checked={item.isChecked}
          onChange={checkHandler}
          color="secondary"
        />
      </ListItemAvatar>
      {isFocused ? (
        <ClickAwayListener onClickAway={editTextHandler}>
          <form onSubmit={formSubmitHandler}>
            <TextField
              variant="standard"
              value={itemText}
              inputRef={textRef}
              onChange={(event) => {
                setItemText(event.currentTarget.value);
              }}
            />
          </form>
        </ClickAwayListener>
      ) : (
        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: "1.2rem",
                textDecoration: item.isChecked ? "line-through" : "inherit",
              }}
            >
              {itemText}
            </Typography>
          }
          sx={{ flex: "none" }}
          onClick={() => onFocus(id)}
        />
      )}
    </ListItem>
  );
};

export default ListToDoItem;
