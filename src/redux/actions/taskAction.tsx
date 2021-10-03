import * as types from "../actionTypes.js";

interface Task {
  title: String;
  description: String;
}

export const loadTasksction = () => {
  return {
    type: types.LOAD_TASKS,
  };
};

export const tasksLoadedAction = (tasks: Task[]) => {
  return {
    type: types.TASKS_LOADED,
    tasks,
  };
};

/**
 *
 * @param {title, description} data
 *
 */
export const addTaskAction = (data: Object) => {
  return {
    type: types.ADD_TASK,
    data,
  };
};

export const taskAddedAction = (task: Object) => {
  return {
    type: types.TASK_ADDED,
    task,
  };
};

export const deleteTaskAction = (id: Number) => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};

export const taskDeletedAction = (id: Number) => {
  return {
    type: types.TASK_DELETED,
    id,
  };
};
