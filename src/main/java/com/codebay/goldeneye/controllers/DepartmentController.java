package com.codebay.goldeneye.controllers;




import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.codebay.goldeneye.data.DataDepartment;


@RestController
public class DepartmentController {

		/**
		 * Returns the departments 
		 * @return
		 */
	  @GetMapping("/goldeneye/api/departments")
	  public DataDepartment departments() {
		  DataDepartment dtDepartment=new DataDepartment();
	      return  dtDepartment;
		
	  }
	
}
