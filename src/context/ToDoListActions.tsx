import { createContext, useState, useEffect } from "react";
import type {
  ToDoListCtxType,
  ToDoListListingsResponse,
  ToDoListListDetailResponse,
} from "../types/todoList";
import { useQueryRequest } from "../hooks/useQueryRequest";
import { TO_DO_LIST_API } from "../config/api";

const INIT_STATE: ToDoListCtxType = {
  lists: [],
  activeList: "",
  listDetail: null,
  setActiveList: () => {},
  getListDetail: () => {},
  setListDetail: () => {},
};

export const ToDoListActionsContext = createContext(INIT_STATE);

function ToDoListActionsActions({ children }: { children: React.ReactNode }) {
  const [lists, setLists] = useState(INIT_STATE.lists);
  const [activeList, setActiveList] = useState(INIT_STATE.activeList);
  const [listDetail, setListDetail] = useState(INIT_STATE.listDetail);

  const { data: listingsData } = useQueryRequest<ToDoListListingsResponse>({
    queryKeys: `todo-list-listings`,
    url: TO_DO_LIST_API.getLists,
    queryConfig: {
      refetchInterval: 0,
    },
  });

  const { refetch: getListDetailData } =
    useQueryRequest<ToDoListListDetailResponse>({
      queryKeys: `todo-list-detail-${activeList}`,
      url: TO_DO_LIST_API.getListDetail.replace("{LIST_ID}", activeList),
      queryConfig: {
        refetchInterval: 0,
        enabled: false,
      },
      onSuccess(data) {
        if (data) {
          setListDetail(data);
        }
      },
    });

  const getListDetail = (listId: string) => {
    setActiveList(listId);
  };

  useEffect(() => {
    if (listingsData?.items) {
      setLists(listingsData.items);
    }
  }, [listingsData]);

  useEffect(() => {
    if (activeList !== "") {
      getListDetailData();
    }
  }, [activeList]);

  return (
    <ToDoListActionsContext
      value={{
        lists,
        activeList,
        listDetail,
        setActiveList,
        getListDetail,
        setListDetail,
      }}
    >
      {children}
    </ToDoListActionsContext>
  );
}

export default ToDoListActionsActions;
