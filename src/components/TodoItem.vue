<template>
    <div class="todo-item" v-bind:class="getCategoryType">
      <div v-on:click="toggleCompleteState(task)" class="task-name">
        {{ task.task }} 
      </div>
      <button v-on:click="removeTodoItem(task)" class="close"/>
    </div>
</template>

<script>
import  store from '../store/index'
import { mapActions, mapGetters } from 'vuex';
import { GETTER_CATEGORY }  from "../constants/getters.type";
import { ASSIGN_REMOVE_TODO }  from "../constants/actions.type";

export default {
    name: 'coin-item',
    store,
    props : {
        task : { type : Object, required : true }
    },

    data () {
      return {
      }
    },
    
    computed: {
      ...mapGetters ({
          category : 'todoStore/' + GETTER_CATEGORY
      }),

      getCategoryType () {
        if(this.task.category === 1) return 'life-changing';
        if(this.task.category === 2) return 'important';
        if(this.task.category === 3) return 'meh';
        return 'life-changing';
      }
    },

    mounted() {
      console.log("mounted", this.task);
    },

  methods: {
    ...mapActions( {
          removeTodo: 'todoStore/' + ASSIGN_REMOVE_TODO
      }), 

    toggleCompleteState (td) {
      td.complete = !td.complete;
    },

    removeTodoItem (td) {
      this.removeTodo(td);
    }
  },
}
</script>

<style scoped>
  .task-name {
    cursor: pointer;
  }
  .todo-item {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    background: #f1fff7;
    margin: 5px 0;
  }

  .todo-item.life-changing {
    border-top: 3px solid green;
  }

  .todo-item.important {
    border-top: 3px solid red;
  }

  .todo-item.meh {
    border-top: 3px solid purple;
  }


  .complete {
    text-decoration: line-through;
  }

  .close {
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    background: white;
    border: none;
    box-shadow: 0 0 5px rgb(25 25 25 / 25%);
  }
  .close:hover::before, .close:hover::after {
    background: #1ebcc5;
  }
  .close::before, .close::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 50%;
    top: 50%;
    left: 26%;
    margin-top: -1px;
    background: #000;
  }
  .close::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .close::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
</style>