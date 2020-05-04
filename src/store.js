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
        MINIMUM_VALUE: 1,
        lastGroupId: 2,
    },
    mutations: {
        SET_CHOSEN_GROUP_ID(state, groupId) {
            state.chosenGroupId = groupId
        },
        Add_GROUP(state, groupName) {
            var group = {}
            group.id = state.lastGroupId + 1
            state.lastGroupId += 1
            group.name = groupName
            group.tasks = []
            state.groupsInfo.push(group)
        },        
        INCREASE_SCORE(state, taskId) {
            var chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
            var chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
            var task = chosenGroupInfo.tasks.find(t => t.id === taskId)
            if (task.value < state.NUMBER_OF_BULLETS) {
                task.value += 1
                Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
            }         
        },
        DECREASE_SCORE(state, taskId) {
            var chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
            var chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
            var task = chosenGroupInfo.tasks.find(t => t.id === taskId)
            if (task.value > state.MINIMUM_VALUE) {
                task.value -= 1
                Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)
            }         
        },
        ACTIVATE_HOVERING(state, { taskId, index }) {
            var chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
            var chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
            var task = chosenGroupInfo.tasks.find(t => t.id === taskId)
            task.hoveringStatus = true
            task.hoveringIndex = index
            Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)            
        },
        DEACTIVATE_HOVERING(state, taskId) {
            var chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
            var chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
            var task = chosenGroupInfo.tasks.find(t => t.id === taskId)
            task.hoveringStatus = false
            task.hoveringIndex = undefined
            Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)            
        },
        BULLET_CLICK(state, { taskId, index }) {
            var chosenGroupInfoIndex = state.groupsInfo.findIndex(g => g.id === state.chosenGroupId)
            var chosenGroupInfo = state.groupsInfo[chosenGroupInfoIndex]
            var task = chosenGroupInfo.tasks.find(t => t.id === taskId)
            task.value = index
            Vue.set(state.groupsInfo, chosenGroupInfoIndex, chosenGroupInfo)            
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
        addGroup({ commit }, groupName = 'GroupName') {
            commit('Add_GROUP', groupName)
        },        
        increaseScore({ commit }, taskId) {
            commit('INCREASE_SCORE', taskId)
        },
        decreaseScore({ commit }, taskId) {
            commit('DECREASE_SCORE', taskId)
        },
        activateHovering({ commit }, { taskId, index }) {
            commit('ACTIVATE_HOVERING', { taskId, index })
        },
        deactivateHovering({ commit }, taskId) {
            commit('DEACTIVATE_HOVERING', taskId)
        },
        bulletClick({ commit }, { taskId, index }) {
            commit('BULLET_CLICK', { taskId, index })
        },
    },
})

