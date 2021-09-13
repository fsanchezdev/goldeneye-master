package com.codebay.goldeneye.controllers;



import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.codebay.goldeneye.data.DataOffice;


@RestController
public class OfficeController {

	/**
	 * Returns the offices 
	 * @return
	 */
	  @GetMapping("/goldeneye/api/offices")
	  public HashMap<Integer, String>  departments() {
		  DataOffice dtOffice=new DataOffice();
	      return  dtOffice.getOffices();
		
	  }
	
}
