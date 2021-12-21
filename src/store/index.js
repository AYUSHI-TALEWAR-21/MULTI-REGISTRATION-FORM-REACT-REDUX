import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import thunkMiddleware from "redux-thunk";
import {
    createLogger
} from "redux-logger";
import RegUserReducer from "../reducer/regUserReducer";
import KycUserDataReducer from "../reducer/kycUserDataReducer";
const loggerMiddleware = createLogger();
export default createStore(
    combineReducers({
        RegUserReducer,
        KycUserDataReducer,
    }),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);