import Vue from 'vue'

export async function getRegisters({commit}){
    try {
        const { data } = await Vue.axios({
            url: 'registros',
            method: 'GET'
        })

        commit('setRegisters', data)
    } catch (error) {
        commit('setError', error)
    }
}

export async function addRegister({commit, dispatch}, payload){
    try {
        await Vue.axios({
            url: 'registros',
            method: 'POST',
            data: payload
        })

        dispatch('getRegisters')

    } catch (error) {
        commit('setError', error)
    }
}

export async function updateRegister({commit, dispatch}, payload){
    try {
        await Vue.axios({
            url: `registros/${payload.id}`,
            method: 'PUT',
            data: payload
        })

        dispatch('getRegisters')

    } catch (error) {
        commit('setError', error)
    }
}

export async function deleteRegister({commit, dispatch}, payload){
    try {
        await Vue.axios({
            url: `registros/${payload.id}`,
            method: 'DELETE',
        })

        dispatch('getRegisters')

    } catch (error) {
        commit('setError', error)
    }
}

export async function setSelectedRegister({commit}, payload){
    try {
        const { data } = await Vue.axios({
            url: `registros/${payload.id}`,
            method: 'GET',
        })

        commit('setSelectedRegister', data)

    } catch (error) {
        commit('setError', error)
    }
}