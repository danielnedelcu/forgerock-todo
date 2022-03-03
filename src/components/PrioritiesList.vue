<template>
  <div class="priorities-list">
    <div v-for="(item, index) in indicators" 
      :key="index" 
      @click="setCategory(index + 1)"
      class="indicator"
      v-bind:class='getClass(item, index)'
    >
      <i></i><span>{{item.label}}</span>
    </div>
  </div>

</template>

<script>
import { ASSIGN_ADD_CATEGORY }  from "../constants/actions.type";
import { mapActions } from 'vuex';

export default {
  data(){
    return {
      activeItem: 1,
      indicators: [
        {
          label: 'Life changing',
          cat: 'life-changing'
        },
        {
          label: 'Important',
          cat: 'important'
        },
        {
          label: 'Meh',
          cat: 'meh'
        },
      ]
    }
  },

  computed: {
    getCategory() {
      return true;
    }
  },

  methods: {
    ...mapActions( {
          assignCategory: 'todoStore/' + ASSIGN_ADD_CATEGORY
      }), 

      getClass(item, index) {
        let str = ((index + 1) == this.activeItem) ? 'active' : '';
 
        return `${str} ${item.cat}`;
      },

      setCategory(cat) {
        this.activeItem = cat;

        this.indicators.forEach((tab, index) => {
          tab.isActive = (index === cat)
        })

        this.assignCategory(cat);
      }
  }
}
</script>

<style scoped>
.priorities-list {
    display: flex;
    flex-flow: row;
    justify-content: center;
    padding: 20px;
}
  .indicator {
    margin: 0 20px;
    display: flex;
    border: #ccc 1px solid;
    border-radius: 2em;
    padding: 6px 10px;
    align-items: center;
    cursor: pointer;
    transition: 250ms ease-out;
  }

  .indicator.active {
    border: orange 1px solid;
  }

  .indicator.life-changing.span {

  }

  i {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    margin-right: 10px;
  }
  .indicator.life-changing i {
    background-color: green;
  }
  .indicator.important.span {
    
  }
  .indicator.important i {
    background-color: red;;
  }
  .indicator.meh.span {
    
  }
  .indicator.meh i {
    background-color: purple;
  }
</style>