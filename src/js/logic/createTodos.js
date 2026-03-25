export const createTodo = ({
  title = 'Unbenannt',
  description = '',
  dueDate = null,
  priority = 'low',
  notes = '',
  checkList = [],
  id = crypto.randomUUID(),
} = {}) => {
  let data = { title, description, dueDate, priority, notes, checkList, id }

  const validators = {
    title: (val) => typeof val === 'string' && val.length > 0,

    dueDate: (val) => {
      const timestamp = Date.parse(val)
      return !isNaN(timestamp)
    },

    priority: (val) => ['low', 'medium', 'high'].includes(val),

    notes: (val) => typeof val === 'string',
    id: (val) => typeof val === 'string',
  }

  return {
    get(key) {
      return data[key]
    },

    set(key, value) {
      if (validators[key]) {
        const isValid = validators[key](value)
        if (!isValid) {
          console.error(`Ungültiger Wert für ${key}:`, value)
          return false
        }
      }

      let valueToStore = value

      if (key === 'dueDate') {
        const dateObj = new Date(value)
        valueToStore = dateObj
      }

      if (key in data) {
        data[key] = valueToStore 
        return true
      }
      return false
    },

    getInfo() {
      return { ...data }
    },
  }
}
