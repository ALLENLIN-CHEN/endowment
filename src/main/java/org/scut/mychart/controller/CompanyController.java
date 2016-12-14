package org.scut.mychart.controller;

import java.util.Map;

import org.scut.mychart.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="/charts/company", produces="application/json;charset=UTF-8")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
	
	@RequestMapping("/countByGender")
    @ResponseBody
    public Map<String, Object> getCountByGender(){
		Map<String, Object> result = companyService.getCountByGender();
		return result;
    }  
	
	@RequestMapping("/ageRange")
	@ResponseBody
	public Map<String, Object> getAgeRange(){
		Map<String, Object> result = companyService.getAgeRange();
		return result;
	} 

	@RequestMapping("/top10")
    @ResponseBody
    public Map<String, Object> getCountByGenderLine(){
		Map<String, Object> result = companyService.getTop10Company();
		return result;
    } 
	
	@RequestMapping("/areaCoverage")
    @ResponseBody
    public Map<String, Object> getAreaCoverage(){
		Map<String, Object> result = companyService.getAreaCoverage();
		return result;
    } 
	
	@RequestMapping("/hospitalTotal")
	@ResponseBody
	public Map<String, Object> getHospitalTotal(){
		Map<String, Object> result = companyService.getHospitalTotal();
		return result;
	} 

	@RequestMapping("/hospitalPercent")
	@ResponseBody
	public Map<String, Object> getHospitalPercent(int startTime, int endTime){
		Map<String, Object> result = companyService.getHospitalPercent(startTime, endTime);
		return result;
	} 
	
	@RequestMapping("/departmentTotal")
	@ResponseBody
	public Map<String, Object> getDepartmentTotal(){
		Map<String, Object> result = companyService.getDepartmentTotal();
		return result;
	}
	
	@RequestMapping("/departmentPercent")
	@ResponseBody
	public Map<String, Object> getDepartmentPercent(int startTime, int endTime){
		Map<String, Object> result = companyService.getDepartmentPercent(startTime, endTime);
		return result;
	} 
	
	@RequestMapping("/docotorTotal")
	@ResponseBody
	public Map<String, Object> getDoctorTotal(){
		Map<String, Object> result = companyService.getDoctorTotal();
		return result;
	} 
	
	@RequestMapping("/docotorPercent")
	@ResponseBody
	public Map<String, Object> getDocotorPercent(int startTime, int endTime){
		Map<String, Object> result = companyService.getDoctorPercent(startTime, endTime);
		return result;
	} 
}
