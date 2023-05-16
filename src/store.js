import { rootReducer } from "./reducers";

import { createStoreHook } from "react-redux";

export const store =createStoreHook(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
