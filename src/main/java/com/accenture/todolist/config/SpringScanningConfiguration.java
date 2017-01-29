package com.accenture.todolist.config;

import com.accenture.todolist.controllers.BaseController;
import com.accenture.todolist.domain.Todo;
import com.accenture.todolist.resources.TodoRepository;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ComponentScan(basePackageClasses = {
        RestRepositoryConfiguration.class,
        BaseController.class,
})
@EntityScan(basePackageClasses = {
        Todo.class
})
@EnableJpaRepositories(basePackageClasses = {
        TodoRepository.class
})
public class SpringScanningConfiguration {
}
