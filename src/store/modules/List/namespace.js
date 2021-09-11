import Enum from '@/models/Enum';

export default (new Enum({
  GET_TODOS: 'GET_TODOS',
  SET_TODOS: 'SET_TODOS',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SAVE_TODO: 'SAVE_TODO'
})).create()
