export interface ToDoListItem {
  id: string;
  title: string;
  created: Date;
}

export type ToDoListItemData = {
  id: string;
  text: string;
  isChecked: boolean;
};

export interface ToDoListData extends ToDoListItem {
  items: ToDoListItemData[];
}

export type ToDoListListingsResponse = {
  items: ToDoListItem[];
};

export type ToDoListListDetailResponse = ToDoListData;

export type ToDoListCtxType = {
  lists: ToDoListItem[];
  activeList: string;
  listDetail: ToDoListData | null;
  setActiveList: React.Dispatch<React.SetStateAction<string>>;
  getListDetail: (listId: string) => void;
  setListDetail: React.Dispatch<React.SetStateAction<ToDoListData | null>>;
};
