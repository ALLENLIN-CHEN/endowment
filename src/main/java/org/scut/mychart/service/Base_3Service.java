package org.scut.mychart.service;

import org.scut.mychart.model.Base_3;

import java.util.List;
import java.util.Map;

public interface Base_3Service {
    public List<Base_3> getBase_3(int title,String financial_type);
    public Map<String, Object> getBase_3_2ChartOption(String financial_type);
    public Map<String, Object> getBase_3_3ChartOption(String financial_type);
    public Map<String, Object> getBase_3_4ChartOption();
    public Map<String, Object> getMaptestChartOption(String mapclicked);
    public Map<String, Object> getMaptest();
    public List<String> getBase_3Financial();
}
