const URL_API = "http://localhost:8080/api/"

const consumer = {
    findAllTodo: async () => {
        return fetch(URL_API + "todos").catch(error => console.error("Error", error))
    },

    saveNewTodo: async ( request) => {
        return fetch(URL_API + "todos", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(error => console.error("Error", error))
    },

    updateTodo: ( request) => {
        return fetch(URL_API + "todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(error => console.error("Error", error))
    },

    deleteTodo: async (id) => {
        return fetch(URL_API + id + "/todo", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(error => console.error("Error", error))
    }
}
export default consumer;