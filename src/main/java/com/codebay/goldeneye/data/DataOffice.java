package com.codebay.goldeneye.data;

import java.util.HashMap;


/**
 * Stores the offices and havee ID to link them with departments
 * 
 * @author pacos
 *
 */
public class DataOffice {


	
	private HashMap<Integer, String> offices=new HashMap<Integer, String>();
	
	



	public DataOffice() {
		offices.put(1, "Milan");
		offices.put(2, "Spain");
		offices.put(3, "New York");
	}





	/**
	 * @return the offices
	 */
	public HashMap<Integer, String> getOffices() {
		return offices;
	}





	/**
	 * @param offices the offices to set
	 */
	public void setOffices(HashMap<Integer, String> offices) {
		this.offices = offices;
	}




	

}
