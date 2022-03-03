import { MUTATE_TODO, MUTATE_REMOVE_TODO, MUTATE_REMOVE_ALL_TODO, MUTATE_ADD_CATEGORY } from "../../constants/mutations.type";


/**
* Adding todo item
 * 
 * @param {state} commit 
 * @param {*} payload 
*/
export async function AssignTodo({ commit }, payload) {
    try {	   
        commit(MUTATE_TODO, payload);
    } catch (e) {
        console.log("Add todo item fail")
    }    
}

/**
* Removing todo item
 * 
 * @param {state} commit 
 * @param {*} payload 
*/
export async function AssignRemoveTodo({ commit }, payload) {
    try {	   
        commit(MUTATE_REMOVE_TODO, payload);
    } catch (e) {
        console.log("Remove todo item fail")
    }    
}

/**
* Remove all todo items
 * 
 * @param {state} commit 
*/
export async function AssignRemoveAllTodo({ commit }) {
    try {	   
        commit(MUTATE_REMOVE_ALL_TODO);
    } catch (e) {
        console.log("Remove all todo item fail")
    }    
}

/**
* Sets task category
 * 
 * @param {state} commit 
 * @param {*} payload 
*/
export async function AssignAddCategory({ commit }, payload) {
    try {	   
        commit(MUTATE_ADD_CATEGORY, payload);
    } catch (e) {
        console.log("Adding category fail")
    }    
}