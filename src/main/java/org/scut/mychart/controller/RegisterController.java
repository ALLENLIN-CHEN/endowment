package org.scut.mychart.controller;

import java.util.Map;

import org.scut.mychart.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="/charts/register", produces="application/json;charset=UTF-8")
public class RegisterController {
	
	@Autowired
	private RegisterService registerService;
	
	@RequestMapping("/countByGender")
    @ResponseBody
    public Map<String, Object> getCountByGender(){
		Map<String, Object> result = registerService.getCountByGender();
		return result;
    }  
	
	@RequestMapping("/countByGenderLine")
    @ResponseBody
    public Map<String, Object> getCountByGenderLine(){
		Map<String, Object> result = registerService.getCountByGenderLine();
		return result;
    }  
}
