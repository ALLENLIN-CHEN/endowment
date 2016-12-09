package org.scut.mychart.service.impl;

import org.scut.mychart.mapper.RecommendMapper;
import org.scut.mychart.model.RecommendResultModel;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

/**
 * @author gzw
 */
@Service("recommendService")
public class RecommendServiceImpl  {
    @Resource  
    private RecommendMapper recommendDao;

    public List<RecommendResultModel> getRecommendResult(String id){
    	HashMap<String,String> param = new HashMap<String,String>();
    	param.put("id",id);
    	return recommendDao.selectRecommendResult(param);
    }
}

