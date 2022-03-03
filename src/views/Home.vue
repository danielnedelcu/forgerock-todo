<template>
    <div class="container">
      <div class="wrapper">
        <div class="top-content">
          <add-task />
          <priorities-list />
          <div v-if="todoList.length"  class="sort-container flex">
            <span>Sort by</span>
            <select v-model="sortSelection" @change="onChange($event)">
              <option disabled value="">Please select one</option>
              <option value="1">Life changing</option>
              <option value="2">Important</option>
              <option value="3">Meh</option>
            </select>
          </div>
          <task-list />
        </div>

        <button v-on:click="onClearList">
          Clear list
        </button>
      </div>
    
    </div>
</template>

<script>
import { ASSIGN_REMOVE_ALL_TODO }  from "../constants/actions.type";
import { GETTER_TODO, GETTER_BY_CATEGORY }  from "../constants/getters.type";
import { mapActions, mapGetters } from 'vuex';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import PrioritiesList from '../components/PrioritiesList';

export default {
  name: 'ToDo',

  components : {
    'add-task': AddTask,
    'task-list': TaskList,
    'priorities-list': PrioritiesList
  },    


  data () {
    return {
      search: '',
      sortSelection: '',
      isFirstLoad: true
    }
  },

  computed: {
      ...mapGetters ({
          todoList : 'todoStore/' + GETTER_TODO,
          byCategory: 'todoStore/' + GETTER_BY_CATEGORY
      }),
  },   
  
  mounted() {
  },
  
  methods : {
    ...mapActions( {
        removeAll: 'todoStore/' + ASSIGN_REMOVE_ALL_TODO
    }), 

    onChange(e) {
      this.byCategory(e.target.value);
    },

    onClearList () {
      if(this.todoList.length) {
        this.removeAll();
      }
    }      
  }
}
</script>

<style scoped>
  select {
    width: 40%;
    margin-left: 20px;
    border: 1px solid #ddd;
    border-radius: 2em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    padding: .5em 1em;
  }
  .flex { 
    display: flex;
    align-items: center;
  }

  .container {
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sort-container {
    margin: 10px 0;
  }

  .wrapper {
    min-height: 50vh;
    display: flex;
    flex-flow: column ;
    border-radius: 1em;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 0 5px rgb(25 25 25 / 25%);
    width: 600px;
    padding: 20px;
    justify-content: space-between;
  }

  .top-content {
    display: flex;
    flex-flow: column ;
  }

    button {
      font-size: 14px;
      margin: 0 0.5em;
      border-radius: 2em;
      padding: 0.75em 1.5em;
      cursor: pointer;
      background: none;
      color: #2d7c58;
      border: 1px solid;
      letter-spacing: 1px;
      color: #4fc08d;
      border: #4fc08d 1px solid;
      transition: 250ms ease-out;
    }

    button:hover {
      color: #fff;
      background: #4fc08d;
    }
</style>