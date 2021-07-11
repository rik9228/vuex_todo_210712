<template>
  <div id="header">
    <div class="appNameWrapper">
      <span>Todo App</span>
    </div>
    <div @click="isShowModal = !isShowModal" class="addNew">
      <span>新規作成</span>
    </div>
    <AddNewModal @closeModal="closeModal" v-if="isShowModal" />
  </div>
</template>

<script>
import AddNewModal from "@/components/AddNewModal.vue";
export default {
  name: "Header",
  components: {
    AddNewModal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    closeModal() {
      this.isShowModal = false;
    },
  },
};
</script>
