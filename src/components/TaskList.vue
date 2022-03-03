<template>
    <div class="task-list" > 
      <template v-if="todoList.length">
          <todo-item v-for="(item, i) in todoList" 
            :key="i" 
            :task="item" 
            v-bind:class="{ complete: item.complete }"

          />
      </template>
  </div>
</template>

<script>
import  store from '../store/index'
import { GETTER_TODO}  from "../constants/getters.type";
import { mapGetters } from 'vuex';
import TodoItem from './TodoItem';

export default {
  store,
  components : {
    'todo-item' : TodoItem
  },    

  computed: {
      ...mapGetters ({
          todoList : 'todoStore/' + GETTER_TODO
      }),
  }

}
</script>

<style scoped>
  .task-list {
    display: flex;
    flex-flow: column;
    align-items: start;
  }
</style>