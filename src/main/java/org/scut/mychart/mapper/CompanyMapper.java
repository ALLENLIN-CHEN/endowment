package org.scut.mychart.mapper;

import java.util.List;

import org.scut.mychart.model.CompanyModel;

public interface CompanyMapper {
	
	public List<CompanyModel> getCountByGender();
	
	public List<CompanyModel> getAreaCoverage(String business);

	public List<CompanyModel> getAgeRange(String business);

	public List<CompanyModel> getHospitalTotal(String business);

	public List<CompanyModel> getHospitalByTime(String business, String startTime, String endTime);

	public List<CompanyModel> getHospitalMaxByDay(String business, String startTime, String endTime);

	public List<CompanyModel> getDepartmentTotal(String business);
	
	public List<CompanyModel> getDepartmentByTime(String business, String startTime, String endTime);

	public List<CompanyModel> getDepartmentMaxByDay(String business, String startTime, String endTime);
	
	public List<CompanyModel> getDoctorTotal(String business);
	
	public List<CompanyModel> getDoctorByTime(String business, String startTime, String endTime);

	public List<CompanyModel> getDoctorMaxByDay(String business, String startTime, String endTime);
}
