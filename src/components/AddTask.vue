<template>
    <div class="flex">
        <input class="form-element" placeholder="Add task" v-model="task" @keydown.enter="addTodo" type="text">
        <button class="todo-button" @click="addTodo">Add</button>
    </div>
</template>

<script>
import { ASSIGN_TODO }  from "../constants/actions.type";
import { GETTER_CATEGORY }  from "../constants/getters.type";
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            task: ''
        }
    },
  computed: {
      ...mapGetters ({
          category : 'todoStore/' + GETTER_CATEGORY
      }),
  },

  methods: {
    ...mapActions( {
          setTodo: 'todoStore/' + ASSIGN_TODO
      }), 

      addTodo() {
        if(this.task) this.setTodo({task: this.task, complete: false, category: this.category});
        this.task ='';
      }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

    input {
      font-size: 1.5rem;
      margin: 0 .5em;
      border-radius: 2em;
      padding: 0.75em 1.5em;
      background: none;
      border: #e3e3e3 1px solid;
      transition: border 250ms ease-out;
    }

    input:focus {
      border: #4fc08d 1px solid;
      outline: none;
    }
    button {
      font-size: 14px;
      margin: 0 0.5em;
      border-radius: 2em;
      padding: 0.75em 1.5em;
      cursor: pointer;
      background: #4fc08d;
      color: #2d7c58;
      border: 1px solid;
      letter-spacing: 1px;
      color: white;
      border: #4fc08d 1px solid;
      transition: 250ms ease-out;
    }

    
    @media(max-width:768px) {
        .new-task {
            width: auto;
        }
        input.form-element {
            width: 75%;
        }
    }
</style>