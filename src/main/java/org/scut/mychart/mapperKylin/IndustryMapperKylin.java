package org.scut.mychart.mapperKylin;


import org.scut.mychart.model.IndustryModel;

import java.util.List;
import java.util.Map;

public interface IndustryMapperKylin {
	public List<IndustryModel> selectPersonNum(Map<String, String> param);
	public List<IndustryModel> selectIndustry(Map<String, String> param);
	public List<IndustryModel> selectByGender(Map<String, String> param);
	public List<IndustryModel> selectByGenderAll(Map<String, String> param);
	public List<IndustryModel> selectByAge(Map<String, String> param);
	public List<IndustryModel> selectByAgeAll(Map<String, String> param);
	public List<IndustryModel> selectByIndustry(Map<String, String> param);
	public List<IndustryModel> selectIndustryOrderByCardinality(Map<String, String> param);
	public List<IndustryModel> selectCompanyOrderByCardinality(Map<String, String> param);
	public List<IndustryModel> selectFinancialOrderByCardinality(Map<String, String> param);
}	
