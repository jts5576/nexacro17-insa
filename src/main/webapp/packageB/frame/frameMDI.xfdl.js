﻿(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMDI");
            this.set_scrolltype("none");
            this.set_titletext("frameMDI");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,32);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTab", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_KO\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnPreMdi",null,"6","20","20","134",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btnNexMdi",null,"6","20","20","113",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"6","20","20","92",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("M");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"6","20","20","71",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("C");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"6","20","20","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("all");
            obj.set_tooltiptext("Close All");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","32",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","0","0","32","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MF_home");
            obj.set_font("normal normal 10pt \"Arial\"");
            obj.set_text("H");
            this.addChild(obj.name, obj);

            obj = new Div("divTab","32","0",null,null,"160","0",null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"6","20","20","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H");
            this.addChild(obj.name, obj);

            obj = new Button("btnTilevertical",null,"6","20","20","29",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("V");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameMDI.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName 		frameMDI.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.01.23
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2017.01.23     	soojeong 	           최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvFirstGap = 1;
        this.fvBtnGap = 0;
        this.fvTabHeight = 32;
        this.fvTabExtraRightGap = 16;
        this.fvExtraWidth = 12;
        this.fvExtraTop = 12;
        this.fvExtraHeight = 12;
        this.fvExtraBtnPrefix = "EXTRA_";
        this.fvTabBtnPrefix = "TAB_";
        this.objApp = nexacro.getApplication()  ;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        //	this.objApp = nexacro.getApplication() ;
        	this.divTab.form.set_scrollbartype("none");
        }

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /**
         * 메뉴 tab 삭제
         * @param {string} 메뉴key값
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnDelTab = function (winID)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0) return false;
        	var tabID = this.fvTabBtnPrefix + winID;

        	// Removing Tab button.
        	this.fnDelTabBtn(tabID);
        	this.dsTab.deleteRow(nRow);
        	this.fnRedrawTab();
        	return true;
        }

        /**
         * 메뉴 tab Button 동적생성
         * @public
         * @param {string} 메뉴키값
         * @param {string} 메뉴명
         * @return
         * @example
         * @memberOf
         */
        this.fnAddTab = function (winID,name)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow > -1) return nRow;

        	var tabID = this.fvTabBtnPrefix + winID;
        		nRow = this.dsTab.addRow();
        		this.dsTab.setColumn(nRow, "TAB_ID", tabID);
        		this.dsTab.setColumn(nRow, "WIN_ID", winID);
        		this.dsTab.setColumn(nRow, "TITLE", name);

        	this.fnAddTabBtn(tabID, name);
        	this.fnRedrawTab();
        	this.bClose = true;
        	return nRow;
        }

        /**
         * 메뉴 tab 신규 동적 생성
         * @public
         * @param {string} 메뉴키값
         * @param {string} 메뉴명
         * @return
         * @example
         * @memberOf
         */
        this.fnAddTabBtn = function (tabID,tabName)
        {
        	var tabObj;
        	var BtnObj;
        	var exBtnId = this.fvExtraBtnPrefix + tabID;   //extra button id

        	var tabLength = 35;
        	var objTextWidth =  "";

        	if (this.gfnIsNull(this.fnFindObj(tabID)))
        	{
        		tabObj = new Button();
        		tabObj.init(tabID, this.fnGetLeft(tabID), 0, 0, this.fvTabHeight, null, null);
        		this.divTab.addChild(tabObj.name, tabObj);
        	}

        	tabObj.set_textAlign("left");
        	tabObj.set_padding("0px 0px 0px 5px");

        	tabObj.set_text(tabName);
        	//tabObj.set_tooltiptext(tabName);
        	tabObj.setEventHandler("onclick", this.btnTab_OnClick, this);
        	tabObj.set_visible(true);
        	tabObj.show();
        	//var nCompWidth = this.fnGetWidth(tabObj, tabName);
        	//var nCompWidth = nexacro.getTextSize( tabName, this.btn_home.currentstyle.font );

        	var nCompWidth = nexacro.getTextSize(tabName, this.btnHome.font).nx + 30;

        	tabObj.set_cssclass("btn_MDI_02");
        	//tabObj.set_width(nCompWidth + this.fvTabExtraRightGap);
        	tabObj.set_width(nCompWidth);

        	if (this.fnFindObj(exBtnId) == null && tabName != "MAIN" )
        	{
        		BtnObj = new Button();
        		BtnObj.init(exBtnId, tabObj.getOffsetRight() - this.fvTabExtraRightGap, this.fvExtraTop, tabObj.getOffsetRight() - this.fvTabExtraRightGap + this.fvExtraWidth - (tabObj.getOffsetRight() - this.fvTabExtraRightGap), this.fvExtraTop + this.fvExtraHeight - this.fvExtraTop);

        		this.fnAddObj(exBtnId, BtnObj);

        		BtnObj.set_cursor("hand"); // set
        		BtnObj.setEventHandler("onclick", this.btnExtra_OnClick, this);
        		BtnObj.set_visible(true);
        		BtnObj.show();
        		BtnObj.set_cssclass("btn_MDI_03");
        	}
        }

        /**
         * 메뉴 tab 이동
         * @public
         * @param {string} 메뉴키값
         * @return
         * @example
         * @memberOf
         */
        this.fnMoveTab = function (winID)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0) return nRow;

        	var tabID = this.fvTabBtnPrefix + winID;
        	this.fnSetActive(tabID);
        	this.fnRedrawTab();
        }


        /**
         * 메뉴 tab 변경 처리 함수
         * @public
         * @param {string}WIN_ID fromID
         * @param {string} WIN_ID toID
         * @return
         * @example
         * @memberOf
         */
        this.fnChangeTab = function (fromID,toID)
        {
        	var nfromRow = this.dsTab.findRow("WIN_ID", fromID);
        	var ntoRow = this.dsTab.findRow("WIN_ID", toID);
        	this.dsTab.moveRow(nfromRow, ntoRow);
        	this.fnRedrawTab();
        }


        /**
         * 메뉴 tab id가져오는 함수
         * @public
         * @param {string} 메뉴키값
         * @return
         * @example
         * @memberOf
         */
        this.fnGetTab = function (winID)
        {
        	return this.dsTab.findRow("WIN_ID", winID);
        }

        /**
         * 메뉴 현재 tab id가져오는 함수
         * @public
         * @param
         * @return  {string} winid
         * @example
         * @memberOf
         */
        this.fnGetCurTab = function ()
        {
        	if (this.dsTab.rowposition < 0)
        	{
        		return false;
        	}
        	return this.dsTab.getColumn(this.dsTab.rowposition, "WIN_ID");
        }

        /**
         * 메뉴 현재 tab 정보 가져오는 함수
         * @public
         * @param
         * @return  {string} winid
         * @example
         * @memberOf
         */
        this.fnGetTabInfo = function (winID,sCol)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0)
        	{
        		return "";
        	}
        	return this.dsTab.getColumn(nRow, sCol);
        }

        /**
         * 메뉴 현재 tab title 가져오는 함수
         * @public
         * @param    {string} winID
         * @return  {string} TITLE
         * @example
         * @memberOf
         */
        this.fnGetTitle = function (winID)
        {
        	var curRow = this.dsTab.findRow("winID", winID);
        	if (this.lookup("nRow") < 0)
        	{
        		return "";
        	}
        	return this.dsTab.getColumn(curRow, "TITLE");
        }

        /**
         *  메뉴 tab title setting
         * @public
         * @param    {string} winID
         * @return  {string} TITLE
         * @example
         * @memberOf
         */
        this.fnSetTitle = function (winID,sTitle)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0)
        	{
        		return "";
        	}

        	var tabID = this.fvTabBtnPrefix + winID;
        	var panelObj = this.fnFindObj(tabID);
        	if ((panelObj == null) || (panelObj == ""))
        	{
        		return;
        	}
        	panelObj.set_text(sTitle);
        }

        /**
         *  메뉴 tab onclick event
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.btnTab_OnClick = function (obj,e)
        {
        	var winId = obj.name.split(this.fvTabBtnPrefix).join("");
        	this.isActiveFrame(winId);
        }

        /**
         * 메뉴 tab extra버튼 클릭시 발생되는 event
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.btnExtra_OnClick = function (obj,e)
        {
        	var winId = obj.name.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");

        	var curTab = this.fnGetCurTab();
        	this.isActiveFrame(curTab);
            var objFrame = this.objApp.gvWorkFrame.frames;
            var rtn = objFrame[winId].form.fnWorkFrameClose();
        	//this.fnTabOnClose(winId);

        	//this.bClose = true;
        }

        /**
         * 메뉴 tab 닫기 실행 함수
         * @public
         * @param {string} winid
         * @param {string} winid
         * @return
         * @example
         * @memberOf
         */
        this.fnTabOnClose = function (winid)
        {
            var objFrame = this.objApp.gvWorkFrame.frames;

        	var nRow = this.objApp.gdsOpenMenu.findRow(this.objApp.gvMenuColumns.winId, winid);

        	var nCloseIdx = nRow;
        	var bSucc  = this.objApp.gdsOpenMenu.deleteRow(nRow);

        	// MDI 탭버튼 삭제
        	if(!this.gfnIsNull(objFrame[winid]) && nRow > -1)
        	{
        		this.bClose = false;
        		var rObj = this.objApp.gvWorkFrame.removeChild(winid);

        		//if (rObj != null)
        		//{
        			//trace("destroy 완료");
        			rObj.destroy();
        			rObj = null;
        			this.fnDelTab(winid);

        		//}
        	}

            if(objFrame.length > 0)
            {
        		//window id
        		var winId = this.objApp.gdsOpenMenu.getColumn(this.objApp.gdsOpenMenu.rowposition, this.objApp.gvMenuColumns.winId);

        		// 탭버튼을 닫은 후에 next Tab버튼 설정
        		this.fnSetActive(this.dsTab.getColumn(this.dsTab.findRow("WIN_ID", winId),"TAB_ID"));
        	}else{
        	    this.objApp.gvVFrameSet1.set_separatesize("32,0,*");
        	}
        }

        /**
         * 메뉴 Mdi 다음  split버튼
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.btnNexMdi_onclick = function (obj,e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        	this.fnRedrawTab();
        }

        /**
         * 메뉴 Mdi 이전   split버튼
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.btnPreMdi_onclick = function (obj,e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
        	this.fnRedrawTab();
        }

        /**
         * menu tab 버튼 첫번째 index 가져오는 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnGetFirstTabIndex = function ()
        {
        	for(var i=0; i < this.dsTab.rowcount;i++)
        	{
        		var tabID   = this.dsTab.getColumn(i, "TAB_ID");
        		var tabObj  = this.fnFindObj(tabID);
        		if(0 < tabObj.left) {
        			return i;
        		}
        	}
        	return -1;
        }

        /**
         * menu tab 버튼 첫번째 이동 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var tabID;
        	var tabObj;
        	var btnObj;
        	var tabFirstObj;

        	nIndex = this.fnGetFirstTabIndex();
        	if (nIndex < 0)
        	{
        		return;
        	}

        	if (nMoveIdx < 0)
        	{
        		return;
        	}
        	if (nMoveIdx >= this.dsTab.rowcount)
        	{
        		return;
        	}

        	tabID = this.dsTab.getColumn(nIndex, "TAB_ID");
        	var tabFirstObj = this.fnFindObj(tabID);

        	tabID = this.dsTab.getColumn(nMoveIdx, "TAB_ID");
        	tabObj = this.fnFindObj(tabID);

        	var nShiftPos = tabObj.getOffsetLeft() - tabFirstObj.getOffsetLeft();

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		tabID = this.dsTab.getColumn(i, "TAB_ID");
        		tabObj = this.fnFindObj(tabID);
        		btnObj = this.fnFindObj(this.fvExtraBtnPrefix + tabID);
        		tabObj.move(tabObj.getOffsetLeft() - nShiftPos, tabObj.getOffsetTop());
        		if(this.gfnIsNull(btnObj) == false )
        			btnObj.move(btnObj.getOffsetLeft() - nShiftPos, btnObj.getOffsetTop());
        	}
        }

        /**
         * menu tab 현재 버튼 이동
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnSetActive = function (tabID)
        {

        	var nRow = this.dsTab.findRow("TAB_ID", tabID);
        	if (nRow < 0)
        	{

        		return false;
        	}
        	this.dsTab.set_rowposition(nRow);
        	this.fnSetActiveBtn(tabID);

        	return true;
        }

        /**
         * menu tab 현재 버튼 이동
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnSetActiveBtn = function (tabID)
        {


        	var TabObj;
        	var BtnObj;

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		TabObj = this.fnFindObj(this.dsTab.getColumn(i, "TAB_ID"));
        		BtnObj = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));

        		if(tabID == this.dsTab.getColumn(i, "TAB_ID"))
        		{
        			TabObj.set_cssclass("btn_MDI_02");
        			this.fnShowTabBtn(i);
        		}
        		else
        		{
        		   TabObj.set_cssclass("btn_MDI_01");
        		}
        	}
        }

        /**
         * menu tab 현재 버튼 보여주는 함수
         * @public
         * @param {string} nIdx
         * @return
         * @example
         * @memberOf
         */
        this.fnShowTabBtn = function (nIdx)
        {
        	var i;
        	var nLeft;
        	var nRight;

        	var tabObj = this.fnFindObj(this.dsTab.getColumn(nIdx, this.lookup("_ID")));
        	nLeft = tabObj.getOffsetLeft();
        	nRight = tabObj.getOffsetRight();

        	if(0 <= nLeft && this.divTab.getOffsetWidth() >= nRight)
        	{
        		return;
        	}

        	nRight = tabObj.getOffsetRight();
        	nLeft = tabObj.getOffsetLeft();

        	if (nLeft < 0)
        	{
        		this.fnMoveFirst(nIdx);
        		return;
        	}

        	for (var i = this.fnGetFirstTabIndex() + 1; i < this.dsTab.rowcount; i++)
        	{
        		tabObj = this.fnFindObj(this.dsTab.getColumn(i, "TAB_ID"));
        		if (nRight - tabObj.getOffsetLeft() <= this.divTab.getOffsetWidth())
        		{
        			break;
        		}
        		this.fnMoveFirst(i);
        	}
        }

        /**
         * menu tab 삭제
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnDelTabBtn = function (tabID)
        {
        	var exBtnId = this.fvExtraBtnPrefix + tabID;
        	var TabObj = this.fnFindObj(tabID);
        	var BtnObj = this.fnFindObj(exBtnId);

        	var nShitLeft = TabObj.getOffsetWidth() + this.fvBtnGap;
        	var curRow = this.dsTab.findRow("TAB_ID", tabID);

        	this.fnRemoveObj(exBtnId);
        	this.fnRemoveObj(tabID);

        	for (var i = curRow + 1; i < this.dsTab.rowcount; i++)
        	{
        		TabObj = this.fnFindObj(this.dsTab.getColumn(i, "TAB_ID"));
        		BtnObj = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));
        		TabObj.move(TabObj.getOffsetLeft() - nShitLeft, TabObj.getOffsetTop());
        		BtnObj.move(BtnObj.getOffsetLeft() - nShitLeft, BtnObj.getOffsetTop());
        	}
        	this.bClose = true;
        }

        /**
         * menu tab 찾는 함수
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnFindObj = function (strId)
        {
        	return this.divTab.form.components[strId];
        }

        /**
         * menu tab 삭제  함수
         * @public
         * @param {string} strId
         * @return
         * @example
         * @memberOf
         */
        this.fnRemoveObj = function (strId)
        {
        	if (this.fnFindObj(strId) == null)
        	{
        		return;
        	}
        	var strObj = this.divTab.removeChild(strId);
        	if (strObj != null)
        	{
        		strObj.destroy();
        	}
        }

        /**
         * menu tab 추가   함수
         * @public
         * @param {string} strId
         * @return
         * @example
         * @memberOf
         */
        this.fnAddObj = function (strId,obj)
        {
        	return this.divTab.addChild(strId, obj);
        }

        /**
         * menu tab 체크
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnRedrawTab = function ()
        {
        	var tabObj;
        	var exBtnObj;

        	this.fnCheckShowBtnAll();
        	this.fnSetTabSpinBtnShow();
        }

        /**
         * menu tab 모든 버튼 체크
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnCheckShowBtnAll = function ()
        {
        	if (this.dsTab.rowcount == 0) return;

        	var tabFirstObj = this.fnFindObj(this.dsTab.getColumn(0, "TAB_ID"));
        	var tabLastObj = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "TAB_ID"));
        	var nLeft = tabFirstObj.getOffsetLeft();
        	var nRight = tabLastObj.getOffsetRight();

        	if (this.divTab.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        		return;
        	}
        }

        /**
         * left size조정
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnGetLeft = function (tabID)
        {
        	var curRow = this.dsTab.findRow("TAB_ID", tabID);
        	if (curRow == 0) return this.fvFirstGap;

        	var prevTab = this.fnFindObj(this.dsTab.getColumn(curRow - 1, "TAB_ID"));
        	return prevTab.getOffsetRight() + this.fvBtnGap;
        }

        /**
         * width size조정
         * @public
         * @param {object} 버튼
         * @param {name}   버튼명
         * @return
         * @example
         * @memberOf
         */
        this.fnGetWidth = function (obj,name)
        {

            var tabID = obj.name;
        	var curRow = this.dsTab.findRow("TAB_ID", tabID);
        	var TabObj = this.fnFindObj(this.dsTab.getColumn(curRow, "TAB_ID"));
        	var objSize = nexacro.getTextSize(name, obj.font);//   obj.currentstyle.font);
        	//var objSize = nexacro.getTextSize( strText, this.Static00.font );

        	return objSize.nx + 30;
        }

        /**
         * mdi arrange 처리 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.btnArrange_onclick = function(obj,e)
        {
            var strType = obj.name.replace("btn", "");
        	this.fnArrangeWin(strType);
        }

        /**
         * mdi spin 버튼 visible 처리
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnSetTabSpinBtnShow = function ()
        {
        	var tabObj;

        	if(this.dsTab.rowcount == 0)
        	{
        		this.btnPreMdi.set_enable(false);
        		this.btnNexMdi.set_enable(false);
        		return;
        	}

        	tabObj = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "TAB_ID"));

        	if(this.divTab.getOffsetWidth() < tabObj.getOffsetRight())
        	{
        		this.btnNexMdi.set_enable(true);
        	}
        	else
        	{
        		this.btnNexMdi.set_enable(false);
        	}

        	tabObj = this.fnFindObj(this.dsTab.getColumn(0, "TAB_ID"));

        	if(tabObj.getOffsetLeft() < 0)
        	{
        		this.btnPreMdi.set_enable(true);
        	}
        	else
        	{
        		this.btnPreMdi.set_enable(false);
        	}
        }

        /**
         * 열려있는 윈도우 화면을 정렬
         * @param	: 	strType: 정렬 타입
         * @return	:   N/A
         */
        this.fnArrangeWin = function(strType)
        {
            strType = strType.toLowerCase();
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = this.objApp.gvWorkFrame.frames.length;

        	if (this.objApp.gdsOpenMenu.getRowCount() < 1) return;

        	switch(strType)
        	{
        		case "maximize" :
        		    var curWinId = this.objApp.gvWorkFrame.getActiveFrame().name;
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvWorkFrame.frames[i].set_openstatus("maximize");
        				this.objApp.gvWorkFrame.frames[i].set_showtitlebar(false);
        				this.objApp.gvWorkFrame.frames[i].set_border("0px solid #006666");
        			}

        			this.isActiveFrame(curWinId);
        		break;

        		case "closeall" :
        			for (var i=iFramesCnt; i>=0; i--)
        			{
        				if( i > 0 ){
        					this.fnTabOnClose(this.objApp.gvWorkFrame.frames[i-1].name);
        				}
        			}
        			this.objApp.gvVFrameSet1.set_separatesize("32,0,*");
        		break;

        		case "hidden" :
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvWorkFrame.frames[i].set_showtitlebar(true);
        				this.objApp.gvWorkFrame.frames[i].set_border("1px solid #7f7f7b");
        				this.objApp.gvWorkFrame.frames[i].set_borderRadius("3px 3px");
        				this.objApp.gvWorkFrame.frames[i].set_openstatus("minimize");
        			}

        			this.objApp.gvWorkFrame.arrange(strType);
        		break;

        		default :
        		    this.objApp.gvVFrameSet1.set_separatesize("32,*,0");
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvWorkFrame.frames[i].set_showtitlebar(true);
        				this.objApp.gvWorkFrame.frames[i].set_border("1px solid #7f7f7b");
        				this.objApp.gvWorkFrame.frames[i].set_borderRadius("3px 3px");
        				this.objApp.gvWorkFrame.frames[i].set_openstatus("normal");
        				this.objApp.gvWorkFrame.frames[i].titlebar.closebutton.set_enable(false);
        			}

        			this.objApp.gvWorkFrame.arrange(strType);

        		break;
        	}
        }

         /**
         * 윈도우 키를 기준으로 열려있는 화면 여부 확인
         * @private
         * @param {string} winid: 윈도우 생성 키
         * @param {string} aArgs  : 전달인자
         * @return {boolen}
         * @example
         *
         * @memberOf
         */
        this.isActiveFrame = function (winid,aArgs)
        {
        	var framesInfo = this.objApp.gvWorkFrame.frames;
        	if(this.gfnIsNull(winid)){return true;}

        	if(framesInfo[winid])
        	{
        	    this.objApp.gvVFrameSet1.set_separatesize("32,*,0");
        		this.fnMoveTab(winid);   //tab이동
        		framesInfo[winid].setFocus();
        		return true;
        	}
        }

         /**
         * left 펼침 접힘 실행
         * @private
         * @param {object} o
         * @param {object} oBtn
         * @return {boolen}
         * @example
         *
         * @memberOf
         */
        this.fnLeftMenuAction = function(o,oBtn)
        {
        	if(this.objApp.gvHFrame.separatesize == "0,*")
        	{
        		this.objApp.gvHFrame.set_separatesize("240,*");
        	}
        	else
        	{
        		this.objApp.gvHFrame.set_separatesize("0,*");
        	}
        }

         /**
         * 홈버튼 클릭
         * @return {boolen}
         * @example
         * @memberOf
         */
        this.btnhome_onclick = function(obj,e)
        {
        	this.objApp.gvVFrameSet1.set_separatesize("32,0,*");
        }

        this.form_onsize = function(obj,e)
        {
        	this.fnRedrawTab();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);
            this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);
            this.btnMaximize.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCascade.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnhome_onclick,this);
            this.divTab.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.btnHorizontal.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnTilevertical.addEventHandler("onclick",this.btnArrange_onclick,this);
        };

        this.loadIncludeScript("frameMDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
