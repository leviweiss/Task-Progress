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
    },
    mutations: {
        setChosenGroupId(state, groupId) {
            state.chosenGroupId = groupId
        },
    },
    getters: {
        tasks: state => {
            return state.groupsInfo.find(g => g.id === state.chosenGroupId).tasks            
        },
    },
    actions: {
        chooseGroup({ commit }, groupId) {
            commit('setChosenGroupId', groupId)
        }
    },
})

