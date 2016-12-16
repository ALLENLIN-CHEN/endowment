package org.scut.mychart.controller;

import org.scut.mychart.service.DifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

/**
 * Created by Allen on 2016/12/12.
 */
@Controller
@RequestMapping(value = "/charts/dif",produces = "application/json;charset=UTF-8")
public class DifController {
    @Autowired
    private DifService difService;

    @RequestMapping("/difCompany")
    @ResponseBody
    public Map<String,Object> getDifCompany(String industry_code){
        Map<String,Object> result = difService.getDifCompany(industry_code);
        return result;
    }

    @RequestMapping("/difFinancial")
    @ResponseBody
    public Map<String,Object> getDifFinancial(String industry_code){
        Map<String,Object> result =difService.getDifFinancial(industry_code);
        return result;
    }

    @RequestMapping("/samCompany")
    @ResponseBody
    public Map<String,Object> getSamCompany(String company_type){
        Map<String,Object> result=difService.getSamCompany(company_type);
        return result;
    }

    @RequestMapping("/samFinancial")
    @ResponseBody
    public Map<String,Object>getSamFinancial(String financial_type){
        Map<String,Object> result=difService.getSamFinancial(financial_type);
        return result;
    }
}
