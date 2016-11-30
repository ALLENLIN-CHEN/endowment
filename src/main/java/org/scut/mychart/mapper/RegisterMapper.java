package org.scut.mychart.mapper;

import java.util.List;

import org.scut.mychart.model.RegisterModel;

public interface RegisterMapper {
	
	public List<RegisterModel> getCountByGender(String business);
	
}
