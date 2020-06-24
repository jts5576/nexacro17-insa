package com.nexacro.sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Case;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;

import com.nexacro.sample.service.NexaBoardService;
import com.nexacro.sample.vo.InsaComVO;
import com.nexacro.sample.vo.InsaVO;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.rte.psl.dataaccess.util.EgovMap;

@Controller
public class NexaBoardController {

	private Logger logger = LoggerFactory.getLogger(NexaBoardController.class);
	
	@Resource(name = "nexaBoardService")
    private NexaBoardService nexaBoardService;
	   
	/** 입력 **/
	@RequestMapping(value="nexaInsert.do")
	public NexacroResult nexaInsert(@ParamDataSet(name = "test") Map<String, String> param)throws Exception {
	    
		System.out.println(param.toString());	    
	    
	    nexaBoardService.nexaInsert(param);	
	    	
	    NexacroResult result = new NexacroResult();
	    
		return result;
	}	
	
	/** 삭제 **/
	@RequestMapping(value="nexaDelete.do")
	public NexacroResult nexaDelete(@ParamDataSet(name = "test") Map<String, String> param)throws Exception {
		
		System.out.println(param.toString());
		
		nexaBoardService.nexaDelete(param);
		
		NexacroResult result = new NexacroResult();
		
		return result;
	}
	
	/** 수정 **/
	@RequestMapping(value="nexaUpdate.do")
	public NexacroResult nexaupdate(@ParamDataSet(name = "test") Map<String, String> param, InsaVO insaVO)throws Exception {
		
		System.out.println(param.toString());
	      
		String sabun = null;
		String join_day = null;
		String retire_day = null;
		String put_yn = null;
		String edit_name = null;
		String reg_no = null;
		String eng_name = null;
		String phone = null;
		String hp = null;
		String pos_gbn_code = null;
		String cmp_reg_no = null;
		String sex = null;
		String years = null;
		String email = null;
		String zip = null;
		String addr1 = null;
		String addr2 = null;
		String dept_code = null;
		String join_gbn_code = null;
		String edit_id = null;
		String pwd = null;
		String salary = null;
		String kosa_reg_yn = null;
		String kosa_class_code = null;
		String mil_yn = null;
		String mil_type = null;
		String mil_level = null;
		String mil_startdate = null;
		String mil_enddate = null;
		String job_type = null;
		String gart_level = null;
		String self_info = null;
		String crm_name = null;
		String pwdc = null;
		String email1 = null;
		
		String profile = null;
		String cmp_reg_image = null;
		String carrier = null;   
		   
		cmp_reg_image = param.get("cmp_reg_image");
		carrier = param.get("carrier");
		profile = param.get("profile");
		      
		sabun = param.get("sabun");
		join_day = param.get("join_day");
		retire_day = param.get("retire_day");
		put_yn = param.get("put_yn");
		edit_name = param.get("edit_name");
		reg_no = param.get("reg_no");
		eng_name = param.get("eng_name");
		phone = param.get("phone");
		hp = param.get("hp");
		pos_gbn_code = param.get("pos_gbn_code");
		cmp_reg_no = param.get("cmp_reg_no");
		sex = param.get("sex");
		years = param.get("years");
		email = param.get("email");
		zip = param.get("zip");
		addr1 = param.get("addr1");
		addr2 = param.get("addr2");
		dept_code = param.get("dept_code");
		join_gbn_code = param.get("join_gbn_code");
		edit_id = param.get("edit_id");
		pwd = param.get("pwd");
		salary = param.get("salary");
		kosa_reg_yn = param.get("kosa_reg_yn");
		kosa_class_code = param.get("kosa_class_code");
		mil_yn = param.get("mil_yn");
		mil_type = param.get("mil_type");
		mil_level = param.get("mil_level");
		mil_startdate = param.get("mil_startdate");
		mil_enddate = param.get("mil_enddate");
		job_type = param.get("job_type");
		gart_level = param.get("gart_level");
		self_info = param.get("self_info");
		crm_name = param.get("crm_name");
		pwdc = param.get("pwdc");
		email1 = param.get("email1");
		      
		insaVO.setCmp_reg_image(cmp_reg_image);
		insaVO.setCarrier(carrier);
		insaVO.setProfile(profile);      
		
		insaVO.setSabun(sabun);
		insaVO.setReg_no(reg_no);
		insaVO.setJoin_day(join_day);
		insaVO.setRetire_day(retire_day);
		insaVO.setPut_yn(put_yn);
		insaVO.setEdit_name(edit_name);
		insaVO.setCmp_reg_no(cmp_reg_no);
		insaVO.setEng_name(eng_name);
		insaVO.setPhone(phone);
		insaVO.setHp(hp);
		insaVO.setPos_gbn_code(pos_gbn_code);
		insaVO.setCmp_reg_no(cmp_reg_no);
		insaVO.setSex(sex);
		insaVO.setYears(years);
		insaVO.setEmail(email);
		insaVO.setZip(zip);
		insaVO.setAddr1(addr1);
		insaVO.setAddr2(addr2);
		insaVO.setDept_code(dept_code);
		insaVO.setJoin_gbn_code(join_gbn_code);
		insaVO.setEdit_id(edit_id);
		insaVO.setPwd(pwdc);
		insaVO.setSalary(salary);
		insaVO.setKosa_reg_yn(kosa_reg_yn);
		insaVO.setKosa_class_code(kosa_class_code);
		insaVO.setMil_yn(mil_yn);
		insaVO.setMil_type(mil_type);
		insaVO.setMil_level(mil_level);
		insaVO.setMil_startdate(mil_startdate);
		insaVO.setMil_enddate(mil_enddate);
		insaVO.setJob_type(job_type);
		insaVO.setGart_level(gart_level);
		insaVO.setSelf_info(self_info);
		insaVO.setCrm_name(crm_name);
		insaVO.setPwdc(pwdc);
		insaVO.setEmail1(email1);
		
		nexaBoardService.nexaUpdate(insaVO);   
		          
		NexacroResult result = new NexacroResult();

		return result;
	}

	/** List조회 **/
	@RequestMapping(value="nexaSelect.do")
	public NexacroResult nexaSelect(@ParamDataSet(name = "test") Map<String, String> param, InsaVO insaVo)throws Exception {
		
		
		List<InsaVO> selectList = nexaBoardService.nexaSelect(param);
		System.out.println("selectList:" + selectList);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("insa_select", selectList);
		
		return result;
	}
	
	/** InsaComVO(콤보) **/
	@RequestMapping(value="nexaCombo.do")
	public NexacroResult nexaCombo()throws Exception {
		
		List<InsaComVO> nexaCombo = nexaBoardService.nexaCombo();
		System.out.println("nexaCombo:" + nexaCombo);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("insa_combo", nexaCombo);
		
		return result;
	}
	
	/** 조회 **/
	@RequestMapping(value="nexaSabun.do")
	public NexacroResult nexaSabun(@ParamDataSet(name = "test") Map<String, String> param, InsaVO insaVo)throws Exception {
		
		
		List<InsaVO> nexaSabun = nexaBoardService.nexaSabun(param);
		System.out.println("nexaSabun:" + nexaSabun);
		NexacroResult result = new NexacroResult();

		result.addDataSet("insa_sabun", nexaSabun);
		
		return result;
	}
	
    /**
     * 모든 코드마스터 테이블 데이터 리스트 
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/selectAllCode.do")
    public NexacroResult selectAllCode()throws Exception{
    	NexacroResult result  = new NexacroResult();
    	
    	List<EgovMap> codeList =  nexaBoardService.selectAllCode();
    	
    	result.addDataSet("output000", codeList);
    	
    	return result;
    }
	 
    /**
     * 코드 리스트 
     * @param param
     * @param category
     * @return
     * @throws Exception
     */
	@RequestMapping(value="/selectCombo.do")
	public NexacroResult selectComboAjax(@ParamDataSet(name = "dsIn") Map<String, String> param, @ParamVariable(name="category", required=false) String category) throws Exception{
		System.out.println(category);
		List<EgovMap> comboList = nexaBoardService.selectComboBox(param);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("output00", comboList);
		
	
		return result;
	}
	
	@RequestMapping(value="/selectCodeInlvl.do")
	public NexacroResult selectCodeInlvl(@ParamDataSet(name = "dsIn") Map<String, String> param) throws Exception{
		List<EgovMap> comboList = nexaBoardService.selectCodeInLvl(param);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("output01", comboList);
		
	
		return result;
	}
	
	@RequestMapping(value="/accountList.do")
	public NexacroResult accountList()throws Exception{
		NexacroResult result = new NexacroResult();
		
		List<EgovMap> accountList = nexaBoardService.selectAccountList();
		result.addDataSet("output01", accountList);
		
		
		return result;
	}
	
	
	/**
	 * 업데이트 account
	 * @param paramList
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/saveAccount.do")
	public NexacroResult saveAccount(@ParamDataSet(name="dsAccount") List<Map<String, String>> paramList )throws Exception{
		NexacroResult result = new NexacroResult();
		
		for(Map<String, String> param : paramList){
			switch (param.get("uiRowType")) {
			case "2":
				nexaBoardService.insertAccount(param);
				break;
				

			case "4":
				nexaBoardService.updateAccount(param);	
				break;
			}
			
		}
		
		return result;
	}
	
	/**
	 * 삭제 account
	 * @param paramList
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="/deleteAccount.do")
	public NexacroResult deleteAccount(@ParamDataSet(name="dsAccount") List<Map<String, String>> paramList )throws Exception{
		NexacroResult result = new NexacroResult();
		
		for(Map<String, String> param : paramList){
			nexaBoardService.deleteAccount(param);
		}
		
		return result;
	}
	
	
	
	
	/*강사등록샘플*/
	
	@RequestMapping(value = "/selectCodeList.do")
	public NexacroResult selectCodeList(@ParamDataSet(name = "input1", required = false) Map<String, String> param) {

		List<EgovMap> resultList = nexaBoardService.selectCodeList(param);

		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", resultList);

		return result;
	}

	@RequestMapping(value = "/selectLecturerList.do")
	public NexacroResult selectLecturerList(
			@ParamDataSet(name = "input1", required = false) Map<String, String> param) {

		List<EgovMap> resultList = nexaBoardService.selectLecturerList();

		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", resultList);

		return result;
	}

	@RequestMapping(value = "/selectCareerList.do")
	public NexacroResult selectCareerList(@ParamDataSet(name = "input1", required = false) Map<String, String> param) {

		List<EgovMap> resultList = nexaBoardService.selectCareerList(param);

		NexacroResult result = new NexacroResult();
		result.addDataSet("output1", resultList);

		return result;
	}
	
	@RequestMapping(value = "/mergeLecturer.do")
	public NexacroResult mergeLecturer(@ParamDataSet(name = "input1", required = false) Map<String, String> param) {

		nexaBoardService.mergeLecturer(param);

		NexacroResult result = new NexacroResult();

		return result;
	}
	
	@RequestMapping(value = "/mergeCareer.do")
	public NexacroResult mergeCareer(@ParamDataSet(name = "input1", required = false) List<Map<String, String>> param) {
		
		for(Map<String,String> temp : param){
			nexaBoardService.mergeCareer(temp);
		}

		NexacroResult result = new NexacroResult();

		return result;
	}

	@RequestMapping(value = "/deleteLecturer.do")
	public NexacroResult deleteLecturer(@ParamDataSet(name = "input1", required = false) Map<String, String> param) {

		nexaBoardService.deleteLecturer(param);

		NexacroResult result = new NexacroResult();

		return result;
	}

	@RequestMapping(value = "/deleteCareer.do")
	public NexacroResult deleteCareer(@ParamDataSet(name = "input1", required = false) Map<String, String> param) {

		nexaBoardService.deleteCareer(param);

		NexacroResult result = new NexacroResult();
 
		return result;
	}
	
	
}


