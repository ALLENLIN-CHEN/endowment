package org.scut.mychart.mapper;

import java.util.List;

import org.scut.mychart.model.CompanyModel;

public interface CompanyMapper {
	
	public List<CompanyModel> getCountByGender();

	public List<CompanyModel> getAgeRange();
	
}
