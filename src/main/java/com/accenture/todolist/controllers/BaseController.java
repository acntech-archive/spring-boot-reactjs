package com.accenture.todolist.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class BaseController {

	@GetMapping("/")
	public String index(Map<String, Object> model) {
		return "index";
	}

}
