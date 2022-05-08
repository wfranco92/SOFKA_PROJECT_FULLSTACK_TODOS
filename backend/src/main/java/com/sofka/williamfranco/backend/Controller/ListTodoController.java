package com.sofka.williamfranco.backend.Controller;

import com.sofka.williamfranco.backend.Model.ListTodos;
import com.sofka.williamfranco.backend.Service.ListTodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "*")
public class ListTodoController {

    @Autowired
    ListTodoService listTodoService;

    @GetMapping(value = "api/todos")
    public Iterable<ListTodos> getAllListTodo(){
        return listTodoService.getAllListTodo();
    }

    @PostMapping(value = "api/todos")
    public ListTodos saveListTodo(@RequestBody ListTodos todo){
        return listTodoService.saveListTodo(todo);
    }

    @PutMapping(value = "api/todo")
    public ListTodos update(@RequestBody ListTodos todo){
        if(todo.getId() != null){
            return listTodoService.saveListTodo(todo);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void deleteListTodo(@PathVariable("id")Long id){
        listTodoService.deleteListTodo(id);
    }

}
