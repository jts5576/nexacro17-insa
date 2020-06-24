package com.nexacro.sample.vo;

public class InsaComVO {

	private String GUBUN;
	private String CODE;
	private String NAME;
	private String NODE;
	
	public String getGUBUN() {
		return GUBUN;
	}
	public void setGUBUN(String gUBUN) {
		GUBUN = gUBUN;
	}
	public String getCODE() {
		return CODE;
	}
	public void setCODE(String cODE) {
		CODE = cODE;
	}
	public String getNAME() {
		return NAME;
	}
	public void setNAME(String nAME) {
		NAME = nAME;
	}
	public String getNODE() {
		return NODE;
	}
	public void setNODE(String nODE) {
		NODE = nODE;
	}
	@Override
	public String toString() {
		return "InsaComVO [GUBUN=" + GUBUN + ", CODE=" + CODE + ", NAME="
				+ NAME + ", NODE=" + NODE + "]";
	}
}
