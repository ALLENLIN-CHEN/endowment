package org.scut.mychart.service.impl;

import com.github.abel533.echarts.Option;
import com.github.abel533.echarts.axis.CategoryAxis;
import com.github.abel533.echarts.axis.ValueAxis;
import com.github.abel533.echarts.code.*;
import com.github.abel533.echarts.data.PointData;
import com.github.abel533.echarts.feature.MagicType;
import com.github.abel533.echarts.json.GsonOption;
import com.github.abel533.echarts.json.GsonUtil;
import com.github.abel533.echarts.series.Bar;
import com.github.abel533.echarts.series.Funnel;
import com.github.abel533.echarts.series.Line;
import org.scut.mychart.mapper.IndustryMapper;
import org.scut.mychart.model.IndustryModel;
import org.scut.mychart.service.IndustryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.DecimalFormat;
import java.util.*;

@Service("industryServiceImpl")
public class IndustryServiceImpl implements IndustryService {

    @Resource
    private IndustryMapper industryMapper;
    public HashMap<String, List<IndustryModel>> getMapResult(List<IndustryModel> total) {
        HashMap<String, List<IndustryModel>> result = new HashMap<String, List<IndustryModel>>();

        for (int i = 0; i < total.size(); i++) {
            IndustryModel i3 = total.get(i);
            List<IndustryModel> yearList=result.get(i3.getYear().toString());
            if (yearList == null) {
                yearList=new ArrayList<IndustryModel>();
            }
            yearList.add(i3);
            result.put(i3.getYear().toString(), yearList);
        }
        return result;
    }
    public double getSum(List<IndustryModel> total){
        double sum=0;
        for(IndustryModel i:total){
            sum+=i.getPerson_num();
        }
        return  sum;
    }
    public List<String> getIndustryNameList(){
        List<String> result=new ArrayList<String>();
        List<IndustryModel> industryModelList=industryMapper.selectIndustry(null);
        for(IndustryModel i:industryModelList){
            result.add(i.getIndustry_code());
        }
        return result;
    }
    public Map<String, Object> getIndustry_LineOption(String industry_code) {

        List<IndustryModel> totalList = null;
        if (industry_code != null) {
            HashMap<String, String> param = new HashMap<String, String>();
            param.put("industry_code", industry_code);
            totalList = industryMapper.selectByGender(param);
        } else {
            industry_code="全行业";
            totalList = industryMapper.selectByGenderAll(null);
        }

        Map<String, Object> resultdata=new HashMap<>();
        resultdata.put("industry_code",industry_code);
        resultdata.put("industrylist",totalList);
        return resultdata;
    }

    public Map<String, Object> getIndustry_FunnelOption(String industry_code) {
        List<IndustryModel> totalList = null;
        if (industry_code != null) {
            HashMap<String, String> param = new HashMap<String, String>();
            param.put("industry_code", industry_code);
            totalList = industryMapper.selectByAge(param);
        } else {
            industry_code="全行业";
            totalList = industryMapper.selectByAgeAll(null);
        }
        HashMap<String, List<IndustryModel>> result = this.getMapResult(totalList);
        List yearlist = Arrays.asList(result.keySet().toArray());
        Collections.sort(yearlist);
        List sumlist=new ArrayList<Double>();
        for (int i = 0; i < yearlist.size(); i++) {
            String year=yearlist.get(i).toString();
            List<IndustryModel> dataList=result.get(year);
            double temp_sum = getSum(dataList);
            sumlist.add(temp_sum);
        }
        Map<String, Object> resultdata=new HashMap<>();
        resultdata.put("yearlist",yearlist);
        resultdata.put("sumlist",sumlist);
        resultdata.put("industry_code",industry_code);
        resultdata.put("industrymap",result);
        return resultdata;
    }

    public Map<String, Object> getIndustry_BarOption() {
        Map<String, Object> resultdata=new HashMap<>();
        List<IndustryModel> totalList = industryMapper.selectIndustryOrderByCardinality(null);
        HashMap<String, List<IndustryModel>> result = this.getMapResult(totalList);
        List yearlist = Arrays.asList(result.keySet().toArray());
        Collections.sort(yearlist);

        resultdata.put("yearlist",yearlist);
        resultdata.put("industrymap",result);
        return resultdata;
    }

    public Map<String, Object> getIndustryThemeOption() {


        List<IndustryModel> personNumList = industryMapper.selectPersonNum(null);
        List<IndustryModel> industryList = industryMapper.selectIndustryOrderByCardinality(null);
        List<IndustryModel> unitList = industryMapper.selectCompanyOrderByCardinality(null);
        List<IndustryModel> economyList = industryMapper.selectFinancialOrderByCardinality(null);
        List<IndustryModel> yearNumList = industryMapper.selectByGenderAll(null);
        List<IndustryModel> yearIndustryList = industryMapper.selectByIndustry(null);
        List<IndustryModel> ageList = industryMapper.selectByAgeAll(null);

        HashMap<String, List<IndustryModel>> ageyResult = this.getMapResult(ageList);
        HashMap<String, List<IndustryModel>> industryResult = this.getMapResult(yearIndustryList);
        HashMap<String, List<IndustryModel>> economyOrderResult = this.getMapResult(economyList);
        HashMap<String, List<IndustryModel>> unitOrderResult = this.getMapResult(unitList);
        HashMap<String, List<IndustryModel>> industryOrderResult = this.getMapResult(industryList);
        List yearlist = Arrays.asList(industryOrderResult.keySet().toArray());
        Collections.sort(yearlist);

        HashMap<String, Object> yearMap = new HashMap<>();
        for(int i=0;i<yearlist.size();i++){
            String year=yearlist.get(i).toString();

            //获取年龄段占比
            List<IndustryModel> ageModelList=ageyResult.get(year);
            List<Map<String,Object>> ageGroupNum=new ArrayList<>();
            for(int j=0;j<ageModelList.size();j++){
                Map<String,Object> item=new HashMap<>();
                item.put("name",ageModelList.get(j).getAge());
                item.put("value",ageModelList.get(j).getPerson_num());
                ageGroupNum.add(item);
            }

            int top=10;
            //获取行业top10
            List<IndustryModel> industryModelList=industryOrderResult.get(year);
            List<String> industryCategory=new ArrayList<>();
            List<Double> industryDataList=new ArrayList<>();
            Double industryDataMax=industryModelList.get(0).getCardinality();
           for(int j=0;j<industryModelList.size();j++){
               if(j==top)break;
               industryCategory.add(industryModelList.get(j).getIndustry_code());
               industryDataList.add(industryModelList.get(j).getCardinality());
               if(industryDataMax<industryModelList.get(j).getCardinality())industryDataMax=industryModelList.get(j).getCardinality();
           }

            //获取单位top10
            List<IndustryModel> unitModelList=unitOrderResult.get(year);
            List<String> unitCategory=new ArrayList<>();
            List<Double> unitDataList=new ArrayList<>();
            Double unitDataMax=unitModelList.get(0).getCardinality();
            for(int j=0;j<unitModelList.size();j++){
                if(j==top)break;
                unitCategory.add(unitModelList.get(j).getCompany_type());
                unitDataList.add(unitModelList.get(j).getCardinality());
                if(unitDataMax<unitModelList.get(j).getCardinality())unitDataMax=unitModelList.get(j).getCardinality();
            }

            //获取经济top10
            List<IndustryModel> economyModelList=economyOrderResult.get(year);
            List<String> economyCategory=new ArrayList<>();
            List<Double> economyDataList=new ArrayList<>();
            Double economyDataMax=economyModelList.get(0).getCardinality();
            for(int j=0;j<economyModelList.size();j++){
                if(j==top)break;
                economyCategory.add(economyModelList.get(j).getFinancial_type());
                economyDataList.add(economyModelList.get(j).getCardinality());
                if(economyDataMax<economyModelList.get(j).getCardinality())economyDataMax=economyModelList.get(j).getCardinality();
            }

            //获取人数变化、男女占比
            Integer insuredMaleNum=null;
            Integer insuredFemaleNum=null;
            List<Integer> yearCategory=new ArrayList<>();
            List<Integer> yearMaleData=new ArrayList<>();
            List<Integer> yearFemaleData=new ArrayList<>();
            List<Integer> yearTotalData=new ArrayList<>();
            for(int j=0;j<yearNumList.size();j++){
                IndustryModel item=yearNumList.get(j);
                if(item.getSex().equals("男")){
                    yearMaleData.add(item.getPerson_num());
                    yearCategory.add(item.getYear());
                    if(item.getYear().toString().equals(year)){
                        insuredMaleNum=item.getPerson_num();
                    }
                }else{
                    yearFemaleData.add(item.getPerson_num());
                    if(item.getYear().toString().equals(year)){
                        insuredFemaleNum=item.getPerson_num();
                    }
                }

            }
            for(int j=0;j<yearFemaleData.size();j++){
                yearTotalData.add(yearFemaleData.get(j)+yearMaleData.get(j));
            }

            //获取行业占比
            List<IndustryModel> yearindustryModelList=industryResult.get(year);
            List<Map<String,Object>> industryPieData=new ArrayList<>();
            for(int j=0;j<yearindustryModelList.size();j++){
                Map<String,Object> item=new HashMap<>();
                item.put("name",yearindustryModelList.get(j).getIndustry_code());
                item.put("value",yearindustryModelList.get(j).getPerson_num());
                industryPieData.add(item);
            }
            //参保率数据

            Integer personNum=null;
            Integer maleNum=null;
            Integer femaleNum=null;
            Double rateTotal=null;
            Double rateMale=null;
            Double rateFemale=null;
            DecimalFormat df   = new DecimalFormat("######0.00");
            for(int j=0;j<personNumList.size();j++){
                if(personNumList.get(j).getSex().equals("男")){
                    maleNum=personNumList.get(j).getPerson_num();
                }else{
                    femaleNum=personNumList.get(j).getPerson_num();
                }
            }
            personNum=maleNum+femaleNum;
            rateFemale=new Double(df.format(insuredFemaleNum.doubleValue()/femaleNum*100));
            rateMale=new Double(df.format(insuredMaleNum.doubleValue()/maleNum*100));
            rateTotal=new Double(df.format((insuredFemaleNum.doubleValue()+insuredMaleNum)/personNum*100));

            HashMap<String, Object> yearItem = new HashMap<>();
            yearItem.put("personNum",personNum);
            yearItem.put("rateFemale",rateFemale);
            yearItem.put("rateMale",rateMale);
            yearItem.put("rateTotal",rateTotal);

            yearItem.put("insuredFemaleNum",insuredFemaleNum);
            yearItem.put("insuredMaleNum",insuredMaleNum);

            yearItem.put("ageGroupNum",ageGroupNum);

            yearItem.put("industryCategory",industryCategory);
            yearItem.put("industryDataList",industryDataList);
            yearItem.put("industryDataMax",industryDataMax);

            yearItem.put("unitCategory",unitCategory);
            yearItem.put("unitDataList",unitDataList);
            yearItem.put("unitDataMax",unitDataMax);

            yearItem.put("economyCategory",economyCategory);
            yearItem.put("economyDataList",economyDataList);
            yearItem.put("economyDataMax",economyDataMax);

            yearItem.put("yearCategory",yearCategory);
            yearItem.put("yearMaleData",yearMaleData);
            yearItem.put("yearFemaleData",yearFemaleData);
            yearItem.put("yearTotalData",yearTotalData);

            yearItem.put("industryPieData",industryPieData);

            yearMap.put(year,yearItem);
        }



        Map<String, Object> resultdata=new HashMap<>();
        resultdata.put("yearList",yearlist);
        resultdata.put("yearMap",yearMap);
        return resultdata;
    }

}
