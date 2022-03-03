import { MUTATE_TODO, MUTATE_REMOVE_TODO, MUTATE_REMOVE_ALL_TODO, MUTATE_ADD_CATEGORY } from "../../constants/mutations.type";

const mutations = {

    /**
     * Adds todo item to state
     * 
     * @param {*} state 
     * @param {*} obj 
     */
    [MUTATE_TODO](state, obj) {    
        state.todo.push(obj);
        console.log("MUTATE_TODO", state)
     },

    /**
     * Removes todo item to state
     * 
     * @param {*} state 
     * @param {*} obj 
     */
    [MUTATE_REMOVE_TODO](state, obj) {  
        state.todo = state.todo.filter(e => e.task !== obj.task);
     },

    /**
     * Removes all todo items to state
     * 
     * @param {*} state 
     * @param {*} obj 
     */
    [MUTATE_REMOVE_ALL_TODO](state) {  
        state.todo.splice(0, state.todo.length);
     },

    /**
     * Adds category to todo item
     * 
     * @param {*} state 
     * @param {*} num 
     */
    [MUTATE_ADD_CATEGORY](state, category) {  
        state.category = category;
     }
}



export default mutations;