import { useContext } from "react";
import { ToDoListActionsContext } from "../context/ToDoListActions";
import type { ToDoListCtxType } from "../types/todoList";

const useToDoList = (): ToDoListCtxType => {
  const ctx = useContext(ToDoListActionsContext);

  return ctx;
};

export default useToDoList;
