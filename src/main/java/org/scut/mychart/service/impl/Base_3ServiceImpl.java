package org.scut.mychart.service.impl;
import org.scut.mychart.mapper.Base_3Mapper;
import org.scut.mychart.model.Base_3;
import org.scut.mychart.service.Base_3Service;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service("base_3Service")
public class Base_3ServiceImpl implements Base_3Service {

	@Resource
	private Base_3Mapper base_3Dao;

	public List<Base_3> getBase_3(int title,String f){
		HashMap<String,String> param = new HashMap<String,String>();
		switch (title){
			case 2:{
				if(!f.equals("全经济类型")){
					param.put("financial","where financial_type = \""+f+"\"");
				}
				return this.base_3Dao.selectBase_3_2(param);
			}
			case 3:{
				if(!f.equals("全经济类型")){
					param.put("financial","where financial_type = \""+f+"\"");
				}
				return this.base_3Dao.selectBase_3_3(param);
			}
			case 4:return this.base_3Dao.selectBase_3_4(new HashMap());
			case 0:return this.base_3Dao.selectBase_3(new HashMap());
		}
		return  null;
	}

	public Map<String, Object> getBase_3_2ChartOption(String f){
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		Map<String, Object> data = new HashMap<String, Object>();
		List<Base_3> lists = getBase_3(2,f);
		Map<String, Object> financial_type = new HashMap<String, Object>();
		List<Integer> male = new ArrayList<Integer>();
		List<Integer> female = new ArrayList<Integer>();
		for(Base_3 list:lists){
			if(list.getyear()==2010&&list.getsex().equals("女")){
				male = new ArrayList<Integer>();
				female = new ArrayList<Integer>();
				financial_type = new HashMap<String, Object>();
			}
			if(list.getsex().equals("男")){
				male.add(list.getperson_num());
			}else{
				female.add(list.getperson_num());
			}
			if(list.getyear()==2015&&list.getsex().equals("男")){
				financial_type.put("financial_name",f);
				financial_type.put("male",male);
				financial_type.put("female",female);
				result.add(financial_type);
			}
		}
		data.put("financial_type",result);
		data.put("type", "base_3_2");
		return data;
	}

	public Map<String, Object> getBase_3_3ChartOption(String f){
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		Map<String, Object> data = new HashMap<String, Object>();
		List<Base_3> lists = getBase_3(3,f);
		List<String> age = new ArrayList<String>();
		List<Integer> person_num = new ArrayList<Integer>();
		Map<String, Object> year = new HashMap<String, Object>();
		int y=0;
		int[] person_sum = new int[6];
		for(Base_3 list:lists){
			if(y!=list.getyear()){
				y=list.getyear();
				person_sum[y-2010]=0;
			}
			person_sum[y-2010]+=list.getperson_num();
		}
		y=0;
		for(Base_3 list:lists){
			if(y!=list.getyear()){
				age = new ArrayList<String>();
				person_num = new ArrayList<Integer>();
				year = new HashMap<String, Object>();
				y=list.getyear();
			}
			age.add(list.getage());
			person_num.add(100*list.getperson_num()/person_sum[y-2010]);
			if(list.getage().equals("50岁以上")){
				year.put("age",age);
				year.put("person_num",person_num);
				result.add(year);
			}
		}
		data.put("financial_type",result);
		data.put("financial_name",f);
		data.put("type", "base_3_3");
		return data;
	}

	public Map<String, Object> getBase_3_4ChartOption(){
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		Map<String, Object> data = new HashMap<String, Object>();
		List<Base_3> lists = getBase_3(4,null);
		Map<String, Object> financial_type = new HashMap<String, Object>();
		List<Double> base = new ArrayList<Double>();
		List<String> name = new ArrayList<String>();
		int i=1;
		int y=0;
		for(Base_3 list:lists){
			if(list.getyear()!=y){
				base = new ArrayList<Double>();
				name = new ArrayList<String>();
				financial_type = new HashMap<String, Object>();
				y=list.getyear();
				i=1;
			}
			if(i>=1&&i<=10){
				base.add(list.getBase());

				String label ="";
				if(list.getFinancial_type().length()>5){
					int n=list.getFinancial_type().length()/5;
					for(int nn=0;nn<n;nn++){
						label+=list.getFinancial_type().substring(5*nn,5*nn+5)+"\n";
					}
					label+=list.getFinancial_type().substring(5*n,list.getFinancial_type().length());
				}else label=list.getFinancial_type();
				name.add(label);
//				name.add(list.getFinancial_type());
			}
			if(i==10){
				financial_type.put("financial_name",name);
				financial_type.put("base",base);
				result.add(financial_type);
			}
			i++;
		}
		data.put("financial_type",result);
		data.put("type", "base_3_4");
		return data;
	}

	public List<String> getBase_3Financial(){
		List<Base_3> lists = getBase_3(0,null);
		List<String> name = new ArrayList<String>();
		for(Base_3 list:lists){
			name.add(list.getFinancial_type());
		}
		return name;
	}
}
