package org.scut.mychart.mapper;

import org.scut.mychart.model.DifModel;

import java.util.List;

/**
 * Created by Allen on 2016/12/12.
 */
public interface DifMapper {
    public List<DifModel> getDifCompany(String industry_code);
    public List<DifModel> getDifFinancial(String industry_code);
    public List<DifModel> getSamCompany(String company_type);
    public List<DifModel> getSamFinancial(String financial_type);
}
