package org.scut.mychart.service;

import java.util.Map;


/**
 * Created by Allen on 2016/12/12.
 */
public interface DifService {
    //同一行业 不同单位类型
    public Map<String,Object> getDifCompany(String industry_code);

    //同一行业 不同经济类型
    public Map<String,Object> getDifFinancial(String industry_code);

    //同一单位 不同行业
    public Map<String,Object> getSamCompany(String company_type);

    //同一经济类型 不同行业
    public Map<String,Object> getSamFinancial(String financial_type);


}
