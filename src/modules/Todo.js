const initialTodo = {
  newTodo: {
    title: "",
    processType: 1,
    priority: 1,
  },
};

const state = {
  newTodo: {
    title: "",
    processType: 1,
    priority: 1,
  },
  todoList: [],
};
const getters = {
  newTodo: (state) => state.newTodo,
};
const mutations = {
  initTodo(state) {
    state.newTodo = JSON.parse(JSON.stringify(initialTodo.newTodo));
  },
  setTitle(state, title) {
    state.newTodo.title = title;
  },
  setPriority(state, value) {
    state.newTodo.priority = value;
  },
  addTodo(state) {
    state.todoList.push(state.newTodo);
  },
  logState(state) {
    console.log("state:", state);
    console.log("state:", state.newTodo);
    console.log("initialTodo:", initialTodo.newTodo);
    // console.log("initialTodo:", JSON.parse(JSON.stringify(initialTodo.newTodo)));
  },
};
// const actions = {
//   setTitle(context, title) {
//     context.commit("setTitle", title);
//   },
// };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions,
};
