package org.scut.mychart.service.impl;

import org.scut.mychart.mapper.DifMapper;
import org.scut.mychart.model.DifModel;
import org.scut.mychart.service.DifService;
import org.scut.mychart.util.DifDictionaryString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by Allen on 2016/12/12.
 */
@Service
public class DifServiceImpl implements DifService{
    @Autowired
    private DifMapper difMapper;

    @Override
    public Map<String,Object> getDifCompany(String industry_code) {
        Map<String, Object> result = new HashMap<>();
        List<DifModel> data = difMapper.getDifCompany(industry_code);
        Map<String, List<DifModel>> total = new HashMap<>();
        String temp = "";
        for (DifModel m : data) {
            temp = String.valueOf(m.getYear());
            if (total.containsKey(temp)) {
                if (total.get(temp).size() >= 10) {
                    continue;
                }
                total.get(temp).add(m);
            } else {
                total.put(temp, new ArrayList<DifModel>());
                total.get(temp).add(m);
            }
        }

        result.put("rank", total);
        result.put("type", DifDictionaryString.DifCompany);
        return result;
    }

    @Override
    public Map<String,Object> getDifFinancial(String industry_code){
        Map<String,Object>result=new HashMap<>();
        List<DifModel> data = difMapper.getDifFinancial(industry_code);
        Map<String, List<DifModel>> total = new HashMap<>();
        String temp = "";
        for (DifModel m : data) {
            temp = String.valueOf(m.getYear());
            if (total.containsKey(temp)) {
                if (total.get(temp).size() >= 10) {
                    continue;
                }
                total.get(temp).add(m);
            } else {
                total.put(temp, new ArrayList<DifModel>());
                total.get(temp).add(m);
            }
        }

        result.put("rank", total);
        result.put("type", DifDictionaryString.DifFinancial);
        return result;
    }

    @Override
    public Map<String,Object> getSamCompany(String company_type){
        Map<String,Object>result=new HashMap<>();
        List<DifModel> data = difMapper.getSamCompany(company_type);
        Map<String, List<DifModel>> total = new HashMap<>();
        String temp = "";
        for (DifModel m : data) {
            temp = String.valueOf(m.getYear());
            if (total.containsKey(temp)) {
                if (total.get(temp).size() >= 10) {
                    continue;
                }
                total.get(temp).add(m);
            } else {
                total.put(temp, new ArrayList<DifModel>());
                total.get(temp).add(m);
            }
        }

        result.put("rank", total);
        result.put("type", DifDictionaryString.SamCompany);
        return result;
    }

    @Override
    public Map<String,Object> getSamFinancial(String financial_type){
        Map<String,Object>result=new HashMap<>();
        List<DifModel> data = difMapper.getSamFinancial(financial_type);
        Map<String, List<DifModel>> total = new HashMap<>();
        String temp = "";
        for (DifModel m : data) {
            temp = String.valueOf(m.getYear());
            if (total.containsKey(temp)) {
                if (total.get(temp).size() >= 10) {
                    continue;
                }
                total.get(temp).add(m);
            } else {
                total.put(temp, new ArrayList<DifModel>());
                total.get(temp).add(m);
            }
        }

        result.put("rank", total);
        result.put("type", DifDictionaryString.SamFinancial);
        return result;
    }
}
