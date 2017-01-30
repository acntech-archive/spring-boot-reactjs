package com.accenture.todolist.config;

import com.accenture.todolist.controllers.BaseController;
import com.accenture.todolist.domain.Todo;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackageClasses = {
        RestRepositoryConfiguration.class,
        BaseController.class,
})
@EntityScan(basePackageClasses = {
        Todo.class
})
public class SpringScanningConfiguration {
}
