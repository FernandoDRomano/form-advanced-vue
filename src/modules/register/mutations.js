export function setRegisters(state, payload){
    state.registers = payload
}

export function setSelectedRegister(state, payload){
    state.selectedRegister = payload
}

export function setError(state, payload){
    state.error = true
    state.messageError = payload
}

export function clearError(state, payload){
    state.error = false
    state.messageError = ''
}