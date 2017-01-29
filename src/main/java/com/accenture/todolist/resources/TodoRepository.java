package com.accenture.todolist.resources;

import com.accenture.todolist.domain.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "todos", collectionResourceRel = "todos")
public interface TodoRepository extends CrudRepository<Todo, Long> {
}
