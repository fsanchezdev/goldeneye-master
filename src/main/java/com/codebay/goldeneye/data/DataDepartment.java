package com.codebay.goldeneye.data;



import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;


/**
 * Stores the departments that are linked by ID with the offices
 * 
 * @author pacos
 *
 */
public class DataDepartment {


	
	private MultiValueMap<Integer, String> departments=new LinkedMultiValueMap<Integer, String>();
	
	
	public DataDepartment() {
		
		departments.add(1, "Design");
		departments.add(1, "Business");
		departments.add(1, "Advertising");
		departments.add(2, "Research and Development");
		departments.add(2, "Business");
		departments.add(3, "Business");
		departments.add(3, "Advertising");
	}

	public MultiValueMap<Integer, String> getDepartments() {
		return departments;
	}

	public void setDepartments(MultiValueMap<Integer, String> departments) {
		this.departments = departments;
	}


}
