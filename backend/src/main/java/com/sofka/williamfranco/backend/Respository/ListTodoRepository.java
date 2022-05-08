package com.sofka.williamfranco.backend.Respository;

import com.sofka.williamfranco.backend.Model.ListTodos;
import org.springframework.data.repository.CrudRepository;

public interface ListTodoRepository extends CrudRepository<ListTodos, Long> {
}
