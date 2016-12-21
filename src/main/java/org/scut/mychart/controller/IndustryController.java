package org.scut.mychart.controller;

import com.github.abel533.echarts.json.GsonUtil;
import org.scut.mychart.service.IndustryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping(value="/charts/industry", produces="application/json;charset=UTF-8")
public class IndustryController {

	@Autowired
	private IndustryService industryService;

	@RequestMapping("/getIndustryNameList")
    @ResponseBody
    public Map<String, Object> getIndustryNameList(){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("data", this.industryService.getIndustryNameList());
		return  result;
    }

	@RequestMapping("/getFunnelOption")
	@ResponseBody
	public Map<String, Object> getFunnelOption( String industry_code){

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("type","INDUSTRY_FUNNEL");
		result.put("industry_code",industry_code);
		result.put("data",industryService.getIndustry_FunnelOption(industry_code));
		return result;
	}
	@RequestMapping("/getLineOption")
	@ResponseBody
	public Map<String, Object> getLineOption( String industry_code){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("type","INDUSTRY_LINE");
		result.put("industry_code",industry_code);
		result.put("data", industryService.getIndustry_LineOption(industry_code));
		return result;
	}
	@RequestMapping("/getBarOption")
	@ResponseBody
	public Map<String, Object> getBarOption(){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("type","INDUSTRY_BAR");
		result.put("data",industryService.getIndustry_BarOption());
		return result;
	}
}
