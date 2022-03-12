const localStorage = window.localStorage

export function setRegisters(state, payload){
    state.registers = payload
}

export function setSelectedRegister(state, payload){
    state.selectedRegister = state.registers.find(e => e.id === payload.id)
}

export function addRegister(state, payload){
    state.registers.push(payload)

    localStorage.setItem('registers', JSON.stringify(state.registers))
}

export function updateRegister(state, payload){
    const index = state.registers.findIndex(e => e.id === payload.id)
    state.registers[index] = payload

    localStorage.setItem('registers', JSON.stringify(state.registers))
}

export function deleteRegister(state, payload){
    state.registers = state.registers.filter(e => e.id !== payload.id)

    localStorage.setItem('registers', JSON.stringify(state.registers))
}

export function setError(state, payload){
    state.error = true
    state.messageError = payload
}

export function clearError(state, payload){
    state.error = false
    state.messageError = ''
}