package com.codebay.goldeneye.controllers;

import org.springframework.stereotype.Controller;  
import org.springframework.ui.Model;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.PostMapping;



@Controller
public class WebController {  

//    @GetMapping("/goldeneye")
//    public String index(Model model) {
//    	DataOffice MyDataOffice=new DataOffice();
//    	System.out.print(MyDataOffice);
//    	
//    	model.addAttribute("offices",MyDataOffice.getOffices());
//        return "index";
//    }
//    
//    @GetMapping("/")
//    public String redirection() {
//        return "redirect:/goldeneye";
//    }
	
  @GetMapping("/")
  public String redirection() {
      return "redirect:/goldeneye";
  }
  
  @GetMapping("/goldeneye")
  public String index() {
      return "index";
  }
  

}