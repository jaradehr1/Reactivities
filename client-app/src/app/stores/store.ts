import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
    activityStore: ActivityStore

}

export const store: Store = {
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store);

// React hook to allow us to use stores within components
export function useStore() {
    return useContext(StoreContext);
}