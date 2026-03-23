export const createTodo = ({
  title = 'Unbenannt',
  description = '',
  dueDate = null,
  priority = 'low',
  notes = '',
  checkList = [],
} = {}) => {
  let data = { title, description, dueDate, priority, notes, checkList }

  const validators = {
    title: (val) => typeof val === 'string' && val.length > 0,

    dueDate: (val) => {
      // Prüft, ob es ein gültiges Date-Objekt ist
      // ODER ein String, der als Datum erkannt werden kann
      const timestamp = Date.parse(val)
      return !isNaN(timestamp)
    },

    priority: (val) => ['low', 'medium', 'high'].includes(val),

    notes: (val) => typeof val === 'string',
  }

  return {
    get(key) {
      return data[key]
    },

    set(key, value) {
      // 1. Prüfen, ob wir für diesen Key überhaupt eine Regel haben
      if (validators[key]) {
        const isValid = validators[key](value)
        if (!isValid) {
          console.error(`Ungültiger Wert für ${key}:`, value)
          return false
        }
      }

      // 2. Wir erstellen eine Variable für den Wert, den wir wirklich speichern wollen
      let valueToStore = value

      if (key === 'dueDate') {
        const dateObj = new Date(value)
        valueToStore = dateObj
      }

      // 3. SPEICHERN
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
