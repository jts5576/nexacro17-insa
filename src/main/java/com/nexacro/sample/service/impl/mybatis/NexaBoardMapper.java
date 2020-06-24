package com.nexacro.sample.service.impl.mybatis;

import java.util.List;
import java.util.Map;

import com.nexacro.sample.vo.InsaComVO;
import com.nexacro.sample.vo.InsaVO;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import egovframework.rte.psl.dataaccess.util.EgovMap;

@Mapper("nexaBoardMapper")
public interface NexaBoardMapper {

	List<EgovMap> selectAllCode();
	List<EgovMap> selectCodeInLvl(Map<String, String> param);
	List<EgovMap> selectComboBoc(Map<String, String> param);
	List<EgovMap> selectAccountList();
	void insertAccount(Map<String, String> param);
	void updateAccount(Map<String, String> param);
	void deleteAccount(Map<String, String> param);
	
	List<EgovMap> selectCodeList(Map<String, String> param);
	List<EgovMap> selectLecturerList();
	List<EgovMap> selectCareerList(Map<String, String> param);
	
	void mergeLecturer(Map<String, String> param);
	void mergeCareer(Map<String, String> param);
	void deleteLecturer(Map<String, String> param);
	void deleteCareer(Map<String, String> param);
	
	void nexaInsert (Map<String, String> param);
	void nexaUpdate (InsaVO insaVO);
	void nexaDelete (Map<String, String> param);
	List<InsaVO> nexaSelect(Map<String, String> param);
	List<InsaVO> nexaSabun(Map<String, String> param); 
	List<InsaComVO> nexaCombo();
}
