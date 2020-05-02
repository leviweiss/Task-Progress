import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        groupsInfo: [
            {
                id: 1,
                name: 'Frontend',
                tasks: [
                    {
                        id: 1,
                        name: 'Vue',
                        value: 7
                    },
                    {
                        id: 2,
                        name: 'General',
                        value: 3
                    },                 
                ],
            },
            {
                id: 2,
                name: 'Workout',
                tasks: [
                    {
                        id: 1,
                        name: 'Abs',
                        value: 4
                    },
                    {
                        id: 2,
                        name: 'Running',
                        value: 5
                    },
                    {
                        id: 3,
                        name: 'Hands',
                        value: 7
                    },                           
                ],                    
            },                
        ],
        chosenGroupId: 1,
        NUMBER_OF_BULLETS: 10,
    },
    mutations: {
        SET_CHOSEN_GROUP_ID(state, groupId) {
            state.chosenGroupId = groupId
        },
        INCREASE_SCORE(state, taskId) {
            var chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
            var chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
            var task = chosenGroupInfo.tasks.find(t => t.id === taskId)
            if (task.value < this.NUMBER_OF_BULLETS) {
                task.value += 1
                Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
            }         
        },
        DECREASE_SCORE(state, taskId) {
            var chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
            var chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
            var task = chosenGroupInfo.tasks.find(t => t.id === taskId)
            if (task.value > 0) {
                task.value -= 1
                Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
            }         
        },        
    },
    getters: {
        tasks: state => {
            return state.groupsInfo.find(g => g.id === state.chosenGroupId).tasks            
        },
    },
    actions: {
        chooseGroup({ commit }, groupId) {
            commit('SET_CHOSEN_GROUP_ID', groupId)
        },
        increaseScore({ commit }, taskId) {
            commit('INCREASE_SCORE', taskId)
        },
        decreaseScore({ commit }, taskId) {
            commit('DECREASE_SCORE', taskId)
        },
    },
})

