<template>
  <div @click.self="closeModal" class="addNewArea">
    <div class="inputArea">
      <div>
        <label for="titleInput">タイトル</label>
        <input v-model="title" type="text" id="titleInput" />
      </div>
      <div>
        <label @click="logState" class="priorityType">優先度</label>
        <select v-model="priority" id="priorityType">
          <option v-for="(priority, index) in priorityTypes" :key="index" :value="priority.priorityType">{{ priority.value }}</option>
        </select>
      </div>
      <div class="btnWrapper">
        <button @click="addTodo" :disabled="!isBtnAble">確定</button>
      </div>
    </div>
  </div>
</template>

<script>
import { priorityTypes } from "../util.js";
import { mapGetters } from "vuex";
export default {
  name: "AddNewModal",
  data() {
    return {
      priorityTypes: priorityTypes,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    addTodo() {
      this.$store.commit("Todo/addTodo");
      this.$store.commit("Todo/initTodo");
      this.closeModal();
    },
    logState() {
      this.$store.commit("Todo/logState");
    },
  },
  computed: {
    ...mapGetters({
      newTodo: "Todo/newTodo",
    }),
    isBtnAble() {
      return !!(this.title && this.priority);
    },
    title: {
      get() {
        return this.newTodo.title;
        // storeの値を返す
      },
      set(value) {
        this.$store.commit("Todo/setTitle", value);
        // mutations にアクセス（commit）
        // actions にアクセス（dispatch）
      },
    },
    priority: {
      get() {
        return this.newTodo.priority;
        // storeの値を返す
      },
      set(value) {
        this.$store.commit("Todo/setPriority", value);
        // storeの値を更新するハンドラを起動
      },
    },
  },
};
</script>

<style></style>
