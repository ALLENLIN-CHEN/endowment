package org.scut.mychart.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.scut.mychart.mapper.RegisterMapper;
import org.scut.mychart.model.RegisterModel;
import org.scut.mychart.service.RegisterService;
import org.scut.mychart.util.DictionaryString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	private RegisterMapper registerMapper;
	
	@Override
	public Map<String, Object> getCountByGender() {
		Map<String, Object> result = new HashMap<String, Object>();
		List<RegisterModel> data = registerMapper.getCountByGender(DictionaryString.BUSINESS_REGISTER);
		List<Integer> maleCount = new ArrayList<Integer>();
		List<Integer> femaleCount = new ArrayList<Integer>();
		
		for(RegisterModel m : data) {
			if(m.getSex().equals(DictionaryString.MALE)) {
				maleCount.add(m.getSum());
			}else if(m.getSex().equals(DictionaryString.FEMALE)) {
				femaleCount.add(m.getSum());
			}
		}
		
		result.put("type", DictionaryString.REGISTER_BAR_X);
		result.put("male", maleCount);
		result.put("female", femaleCount);
		return result;
	}

	@Override
	public Map<String, Object> getCountByGenderLine() {
		Map<String, Object> result = new HashMap<String, Object>();
		List<RegisterModel> data = registerMapper.getCountByGender(DictionaryString.BUSINESS_REGISTER);
		List<Integer> maleCount = new ArrayList<Integer>();
		List<Integer> femaleCount = new ArrayList<Integer>();
		
		for(RegisterModel m : data) {
			if(m.getSex().equals(DictionaryString.MALE)) {
				maleCount.add(m.getSum());
			}else if(m.getSex().equals(DictionaryString.FEMALE)) {
				femaleCount.add(m.getSum());
			}
		}
		
		result.put("type", DictionaryString.REGISTER_LINE);
		result.put("male", maleCount);
		result.put("female", femaleCount);
		return result;
	}

}
