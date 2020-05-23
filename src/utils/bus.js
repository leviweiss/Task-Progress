import { bus } from '../main'

function emitGroupChange () {
  bus.$emit('groupChange')
}

function emitGroupRemove () {
  bus.$emit('groupRemove')
}

export {
  emitGroupChange,
  emitGroupRemove
}
