import { combineReducers } from "redux";

import ResumeReducer from "./Resume.reducer";
import IntroReducer from "./Introduction.reducer";

const reducers = combineReducers({
  intro: IntroReducer,
  resume: ResumeReducer
});

export default reducers;
