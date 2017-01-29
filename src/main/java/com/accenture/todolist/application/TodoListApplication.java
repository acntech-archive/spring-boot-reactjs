package com.accenture.todolist.application;

import com.accenture.todolist.config.RestRepositoryConfiguration;
import com.accenture.todolist.config.SpringScanningConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({
		RestRepositoryConfiguration.class,
		SpringScanningConfiguration.class
})
public class TodoListApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(TodoListApplication.class);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(TodoListApplication.class, args);
	}

}