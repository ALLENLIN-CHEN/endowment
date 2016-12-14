package org.scut.mychart.controller;

import org.scut.mychart.service.Base_3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

//echarts字符云
@Controller  
@RequestMapping(value = "/charts/base_3", produces="application/json;charset=UTF-8")
public class Base_3Controller {
    @Autowired
    private Base_3Service base_3Service;

    @RequestMapping("/base_3_2")
    @ResponseBody
    public Map<String, Object> getBase_3_2(@RequestParam String financial_type){
        Map<String, Object> data = this.base_3Service.getBase_3_2ChartOption(financial_type);
        return data;
    }

    @RequestMapping("/base_3_3")
    @ResponseBody
    public Map<String, Object> getBase_3_3(@RequestParam String financial_type){
        Map<String, Object> data = this.base_3Service.getBase_3_3ChartOption(financial_type);
        return data;
    }

    @RequestMapping("/base_3_4")
    @ResponseBody
    public Map<String, Object> getBase_3_4(){
        Map<String, Object> data = this.base_3Service.getBase_3_4ChartOption();
        return data;
    }

    @RequestMapping("/financial")
    @ResponseBody
    public List<String> getBase_3(){
        List<String> data = this.base_3Service.getBase_3Financial();
        return data;
    }
}   

