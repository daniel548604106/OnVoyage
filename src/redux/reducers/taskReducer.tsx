import { TASK_ADDED, TASK_DELETED } from "../actionTypes";
import Task from "../../models/taskModel.js";
interface InitialState {
  task: Object;
}

interface Data {
  title: String;
  description: string;
}

interface Action {
  data: Data;
  type: String;
  id: Number;
}

const initialState: InitialState[] = [];

export const taskReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case TASK_ADDED:
      const { data } = action;
      const task = new Task(state.length + 1, data.title, data.description);
      return [...state, task];
    case TASK_DELETED:
      const { id } = action;
      return state.filter((task: { id: Number }) => task.id !== id);
    default:
      return state;
  }
};
