package com.sofka.williamfranco.backend.Service;

import com.sofka.williamfranco.backend.Model.ListTodos;
import com.sofka.williamfranco.backend.Respository.ListTodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListTodoService {
    @Autowired
    ListTodoRepository listTodoRepository;

    public Iterable<ListTodos> getAllListTodo(){
        return listTodoRepository.findAll();
    }

    public ListTodos saveListTodo(ListTodos todo){
        return listTodoRepository.save(todo);
    }

    public void deleteListTodo(Long id){
        listTodoRepository.delete(get(id));
    }

    public ListTodos get(Long id){
        return listTodoRepository.findById(id).orElseThrow();
    }
}
