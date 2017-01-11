package org.scut.mychart.redis;

import java.util.Map;

public interface Hospital_2RedisDao {
	public String getWordcloudData(String type);
	
	public void setWordcloudData(String type, String data);

	public Map<String, Object> getmaptestData(String type);

	public void setmaptestData(String type, Object data);
}
