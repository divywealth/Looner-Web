import { applyMiddleware } from "redux";
import loggerMiddleware from "./Auth";


const middleware = applyMiddleware(loggerMiddleware);

export default middleware;