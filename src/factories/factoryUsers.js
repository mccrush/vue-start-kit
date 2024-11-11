import ClassBasic from './ClassBasic'

class ClassUsers extends ClassBasic {
  type = 'users'
  access = 3
}

export const factoryUsers = () => Object.assign({}, new ClassUsers())