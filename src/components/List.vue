<template>
  <div class="tasks">
    <ul class="tasks__list">
      <!-- <li v-for="task in this.$store.getters.tasks" :key="task.key" class="tasks__item"> -->
      <li v-for="task in tasks" :key="task.key" class="tasks__item">
        <input
          type="checkbox"
          :id="task.key"
          :value="task.id"
          v-model="doneTaskIds"
        />
        {{ task.name }}
      </li>
    </ul>
    <div class="form">
      <form @submit.prevent="addTask" class="form__body">
        <input type="text" v-model="newTaskName" plabceholder="新しいタスク" class="form__input" />
        <input type="submit" class="form__submit">
      </form>
      <input type="button" class="form__done" value="タスクを完了にする" @click.prevent="doneTasks">
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newTaskName: "",
      doneTaskIds: []
    };
  },
  methods: {
    // ストアの、addTaskミューテーションを呼ぶ
    addTask() {
      if(this.newTaskName == "") {
        alert("タスクを選択してください。");
        return false;
      }
      this.$store.dispatch("addTask", this.newTaskName);
      this.newTaskName = "";
    },
    doneTasks() {
      if (this.doneTaskIds.length == 0) {
        alert("タスクを選択してください。");
        return false;
      }
      this.$store.dispatch("doneTasks", this.doneTaskIds)
      this.doneTaskIds.length = 0;
    }
  },
  // ストアのステートを呼ぶ
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  }
}
</script>

<style scoped lang="scss">
.tasks {
  margin-top: 3rem;
  &__list {
    font-weight: bold;
    list-style: none;
  }
  &__item {
    padding-bottom: .75rem;
    border-bottom: 1px solid #DEDEDE;
  }
  &__item:not(:first-child) {
    margin-top: 1.25rem;
  }
}
.form {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  &__body {
    display: flex;
    width: 80%;
    border: 1px solid #DEDEDE;
  }
  &__input {
    flex: 1;
    padding: 0 .5rem;
    border: none;
    outline: none;
  }
  &__submit {
    width: 180px;
    background-color: #1876D1;
    color: #fff;
    padding: 0.5rem 0;
  }
  &__done {
    width: 180px;
    background-color: #1876D1;
    color: #fff;
    padding: 0.5rem 0;
    border: 1px solid #fff;
    margin-left: 3rem;
  }
}
</style>
