package org.scut.mychart.service.impl;
import org.scut.mychart.mapper.Base_3Mapper;
import org.scut.mychart.mapper.Hospital_2Mapper;
import org.scut.mychart.model.Base_3;
import org.scut.mychart.model.ChartTypeConstant;
import org.scut.mychart.model.Hospital_2;
import org.scut.mychart.redis.Hospital_2RedisDao;
import org.scut.mychart.service.Base_3Service;
import org.scut.mychart.service.impl.Hospital_2ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service("base_3Service")
public class Base_3ServiceImpl implements Base_3Service {

	@Resource
	private Base_3Mapper base_3Dao;

	@Resource
	private Hospital_2Mapper hospitao_2Dao;

	@Autowired
	private Hospital_2RedisDao hospital_2RedisDao;

	public List<Hospital_2> getHospital_2(int title,String[] p){
		HashMap<String,String> param = new HashMap<String,String>();
		switch (title){
			case 2:
			case 3:{
				if(!p[0].equals("孝感市")){
					param.put("mapclick"," and hospital_business.area = \""+p[0]+"\"");
				}
				return this.hospitao_2Dao.selectHospital_2_2(param);
			}
			case 4:{
				if(!p[0].equals("孝感市")){
//					param.put("address","and hospital_business.area = \""+p[0]+"\"");
					param.put("area",",area");
					param.put("select",",hospital_business.area");
				}
				return this.hospitao_2Dao.selectHospital_2_4(param);
			}
			case 5:{
				if(!p[0].equals("孝感市")){
					param.put("mapclick"," and hospital_business.area = \""+p[0]+"\"");
				}
				return this.hospitao_2Dao.selectHospital_2_5(param);
			}
			case 6:{
				if(!p[0].equals("孝感市")){
					param.put("mapclick"," and area = \""+p[0]+"\"");
				}
				param.put("where",",hospital as hospital");
				param.put("group",",hospital");
				return this.hospitao_2Dao.selectHospital_2_6810(param);
			}
			case 8:{
				if(!p[0].equals("孝感市")){
					param.put("mapclick"," and area = \""+p[0]+"\"");
				}
				param.put("where",",hospital as hospital, department as department");
				param.put("group",",hospital,department");
				return this.hospitao_2Dao.selectHospital_2_6810(param);
			}
			case 10:{
				if(!p[0].equals("孝感市")){
					param.put("mapclick"," and area = \""+p[0]+"\"");
				}
				param.put("where",",hospital as hospital, department as department, doctor as doctor");
				param.put("group",",hospital,department,doctor");
				return this.hospitao_2Dao.selectHospital_2_6810(param);
			}
			case 7:{
				param.put("date","and year(operation_time)>="+p[0]+" and year(operation_time) <="+p[1]);
				param.put("type","A.hospital as hospital");
				param.put("where","hospital");
				param.put("join","A.hospital=B.hospital");
				return this.hospitao_2Dao.selectHospital_2_7911(param);
			}
			case 9:{
				param.put("date","and year(operation_time)>="+p[0]+" and year(operation_time) <="+p[1]);
				param.put("type","A.hospital as hospital,A.department as department");
				param.put("where","hospital,department");
				param.put("join","A.hospital=B.hospital and A.department=B.department");
				return this.hospitao_2Dao.selectHospital_2_7911(param);
			}
			case 11:{
				param.put("date","and year(operation_time)>="+p[0]+" and year(operation_time) <="+p[1]);
				param.put("type","A.hospital as hospital,A.department as department,A.doctor as doctor");
				param.put("where","hospital,department,doctor");
				param.put("join","A.hospital=B.hospital and A.department=B.department and A.doctor=B.doctor");
				return this.hospitao_2Dao.selectHospital_2_7911(param);
			}
		}
		return  null;
	}

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

	public Map<String, Object> getMaptestChartOption(String mapclicked){
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		Map<String, Object> data = new HashMap<String, Object>();
		Map<String, Object> alllist = new HashMap<String, Object>();
		String[] p = new String[1];
		int[] indexs = new int[7];
		//添加男女数据
		p[0] = mapclicked;
		List<Hospital_2> lists = new ArrayList<>();
		lists.addAll(getHospital_2(2,p));
		indexs[0]=lists.size();
		//添加地区数据
		p[0] = "孝感市";
		lists.addAll(getHospital_2(4,p));
		indexs[1]=lists.size();
		//添加年龄段分布
		p[0] = mapclicked;
		lists.addAll(getHospital_2(5,p));
		List<Integer> ages_num = new ArrayList<Integer>();
		List<String> ages_name = new ArrayList<String>();
		indexs[2]=lists.size();
		//添加医院，科室，医生TOP10
		p[0] = mapclicked;
		lists.addAll(getHospital_2(6,p));
		indexs[3]=lists.size();
		lists.addAll(getHospital_2(8,p));
		indexs[4]=lists.size();
		lists.addAll(getHospital_2(10,p));
		indexs[5]=lists.size();
		List<Integer> hospital_num = new ArrayList<Integer>();
		List<String> hospital_name = new ArrayList<String>();
		//添加地图的覆盖率
//		String[] area = {"应城市","孝昌县","孝南区","云梦县","大悟县","安陆市","汉川市"};
//		for(int a=0;a<area.length;a++){
//			p[0] = area[a];
//			lists.addAll(getHospital_2(4,p));
//		}
		p[0] = "all";
		lists.addAll(getHospital_2(4,p));
		indexs[6]=lists.size();

		int i=1;
		int y=0;
		int index = 0;
		for (Hospital_2 list:lists){
			if(index<indexs[0]){
				if(list.getyear()!=y){
					alllist = new HashMap<String, Object>();
					y=list.getyear();
					i=1;
				}
				if (list.getsex().equals("男")){
					alllist.put("male",list.getperson_num());
				}else{
					alllist.put("female",list.getperson_num());
				}
				if(i==2){
					result.add(alllist);
				}
				i++;
			} else if(index<indexs[1]){
				result.get(index-indexs[0]).put("area",list.getperson_num()*100/list.getperson_sum());
			}else if(index<indexs[2]) {
				if (list.getyear() != y) {
					y = list.getyear();
					ages_num = new ArrayList<Integer>();
					ages_name = new ArrayList<String>();
					if(!list.getage().equals("0-6岁（儿童）")){
						ages_name.add("0-6岁（儿童）");
						ages_num.add(0);
					}
				}
				ages_name.add(list.getage());
				ages_num.add(list.getperson_num());
				result.get(y - 2010).put("age_name",ages_name);
				result.get(y - 2010).put("age_num",ages_num);
			}else if(index<indexs[5]){
				if(list.getyear()!=y){
					y=list.getyear();
					hospital_num = new ArrayList<Integer>();
					hospital_name = new ArrayList<String>();
				}
				hospital_num.add(list.getHospital_num());
				if(index<indexs[3]){
					hospital_name.add(list.gethospital());
				}else if(index<indexs[4]){
					hospital_name.add(list.gethospital()+" "+list.getdepartment());
				}else if(index<indexs[5]){
					hospital_name.add(list.gethospital()+" "+list.getdepartment()+" "+list.getdoctor());
				}
				if(lists.get(lists.indexOf(list)+1).getyear()!=y){
					if(index<indexs[3]){
						result.get(y-2010).put("hos_nameTOP",hospital_name);
						result.get(y-2010).put("hos_numTOP",hospital_num);
					}else if(index<indexs[4]){
						result.get(y-2010).put("dep_nameTOP",hospital_name);
						result.get(y-2010).put("dep_numTOP",hospital_num);
					}else if(index<indexs[5]){
						result.get(y-2010).put("doc_nameTOP",hospital_name);
						result.get(y-2010).put("doc_numTOP",hospital_num);
					}
				}
			}else if(index<indexs[6]){
				if(list.getyear()!=y){
					y=list.getyear();
				}
				result.get(y-2010).put(list.getarea(),100*list.getperson_num()/list.getperson_sum());
				result.get(y-2010).put(list.getarea()+"人数",list.getperson_num());
			}
			index++;
		}
		data.put("hos_2",result);
		data.put("area_clicked",mapclicked);
		data.put("type", "test");
		return data;
	}

	public Map<String, Object> getMaptest(){
		//添加redis
		String type = ChartTypeConstant.HOSPITAL_2_maptest_REDIS;
        Map<String, Object> Hospital_2_2Data = hospital_2RedisDao.getmaptestData(type);
		if(Hospital_2_2Data != null && !Hospital_2_2Data.isEmpty()) {
			return Hospital_2_2Data;
		}

		Map<String, Object> result = new HashMap<String, Object>();
		String[] area = {"孝感市","应城市","孝昌县","孝南区","云梦县","大悟县","安陆市","汉川市"};
		for(int i=0;i<area.length;i++){
			result.put(area[i],getMaptestChartOption(area[i]));
		}

		//插入缓存中
		hospital_2RedisDao.setmaptestData(type, result);

		return result;
	}
}