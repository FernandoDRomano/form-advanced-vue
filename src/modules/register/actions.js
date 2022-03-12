import Vue from 'vue'

const localStorage = window.localStorage

export async function getRegisters({commit}){

    if(!localStorage.getItem('registers')){
        localStorage.setItem('registers', JSON.stringify([]))
    }

    const registers = JSON.parse(localStorage.getItem('registers'))

    commit('setRegisters', registers)

}

export async function addRegister({commit}, payload){
    const register = {
        id: Date.now(),
        ...payload
    }

    commit('addRegister', register)
}

export async function setSelectedRegister({commit}, payload){
    commit('setSelectedRegister', payload)
}

export async function updateRegister({commit}, payload){
    commit('updateRegister', payload)
}

export async function deleteRegister({commit}, payload){
    commit('deleteRegister', payload)
}
