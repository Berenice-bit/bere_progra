/*

@license
dhtmlxScheduler v.5.3.13 Professional

This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Scheduler.plugin(function(scheduler){scheduler.locale = {
	date: {
		month_full: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
		month_short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
		day_full: ["الأحد", "الأثنين", "ألثلاثاء", "الأربعاء", "ألحميس", "ألجمعة", "السبت"],
		day_short: ["احد", "اثنين", "ثلاثاء", "اربعاء", "خميس", "جمعة", "سبت"]
	},
	labels: {
		dhx_cal_today_button: "اليوم",
		day_tab: "يوم",
		week_tab: "أسبوع",
		month_tab: "شهر",
		new_event: "حدث جديد",
		icon_save: "اخزن",
		icon_cancel: "الغاء",
		icon_details: "تفاصيل",
		icon_edit: "تحرير",
		icon_delete: "حذف",
		confirm_closing: "التغييرات سوف تضيع, هل انت متأكد؟", //Your changes will be lost, are your sure ?
		confirm_deleting: "الحدث سيتم حذفها نهائيا ، هل أنت متأكد؟",
		section_description: "الوصف",
		section_time: "الفترة الزمنية",
		full_day: "طوال اليوم",

		confirm_recurring: "هل تريد تحرير مجموعة كاملة من الأحداث المتكررة؟",
		section_recurring: "تكرار الحدث",
		button_recurring: "تعطيل",
		button_recurring_open: "تمكين",
		button_edit_series: "تحرير سلسلة",
		button_edit_occurrence: "تعديل نسخة",

		/*grid view extension*/
		grid_tab: "جدول",

		/* touch tooltip*/
		drag_to_create:"Drag to create",
		drag_to_move:"Drag to move",

		/* dhtmlx message default buttons */
		message_ok:"OK",
		message_cancel:"Cancel",

		/* wai aria labels for non-text controls */
		next: "Next",
		prev: "Previous",
		year: "Year",
		month: "Month",
		day: "Day",
		hour:"Hour",
		minute: "Minute"
	}
};


});                      1. DHX Scheduler Container
==============================================================================================*/
/*============================================================================================
                            1. DHX Scheduler Container
==============================================================================================*/
/*============================================================================================
                            1. DHX Scheduler Container
==============================================================================================*/
/*============================================================================================
                            1. DHX Scheduler Container
==============================================================================================*/
/*============================================================================================
                            1. DHX Scheduler Container
==============================================================================================*/
/*============================================================================================
                            1. DHX Scheduler Container
==============================================================================================*/
/*============================================================================================
                            1. DHX Scheduler Container
==============================================================================================*/
.dhtmlx_message_area {
  position: fixed;
  right: 5px;
  width: 250px;
  z-index: 11;
}
.dhtmlx-info {
  min-width: 120px;
  padding: 4px 4px 4px 20px;
  font-family: Tahoma;
  z-index: 14;
  overflow: hidden;
  margin: 5px;
  margin-bottom: 10px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.dhtmlx-info.hidden {
  height: 0px;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
  overflow: hidden;
}
.dhtmlx_modal_box {
  overflow: hidden;
  display: inline-block;
  position: fixed;
  min-width: 300px;
  width: 330px;
  text-align: center;
  background: #fff;
  box-shadow: 0px 0px 14px #888;
  border: 1px solid #ffffff;
  z-index: 18;
  border-radius: 6px;
  font-family: "Tahoma", san-serif;
}
.dhtmlx_popup_text {
  margin: 15px 15px 5px 15px;
  font-size: 14px;
  color: #000;
  min-height: 30px;
  border-radius: 6px;
}
.dhtmlx_popup_title {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-width: 0px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAMAAAAIaGBFAAAAhFBMVEVwcHBubm5sbGxqampoaGhmZmZlZWVjY2NhYWFfX19dXV1bW1taWlpYWFhWVlZUVFRSUlJRUVFPT09NTU1LS0tJSUlHR0dGRkZERERCQkJAQEA+Pj49PT09PT0+Pj5AQEBBQUFDQ0NERERGRkZHR0dJSUlKSkpMTExMTEw5OTk5OTk5OTkny8YEAAAAQklEQVQImQXBCRJCAAAAwKVSQqdyjSPXNP7/QLsIhA6OTiJnF7GrRCpzc/fw9PKW+/gqlCq1RqvTG/yMJrPF6m/bAVEhAxxnHG0oAAAAAElFTkSuQmCC);
  background-image: -webkit-linear-gradient(top, #707070 1%, #3d3d3d 70%, #4c4c4c 97%, #393939 97%);
  background-image: -moz-linear-gradient(top, #707070 1%, #3d3d3d 70%, #4c4c4c 97%, #393939 97%);
}
.dhtmlx-info,
.dhtmlx_popup_button,
.dhtmlx_button {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  cursor: pointer;
}
.dhtmlx_popup_text {
  overflow: hidden;
}
.dhtmlx_popup_controls {
  border-radius: 6px;
  padding: 5px 5px 9px 5px;
}
.dhtmlx_popup_button,
.dhtmlx_button {
  height: 30px;
  line-height: 28px;
  display: inline-block;
  margin: 0 5px;
  border-radius: 6px;
  color: #FFF;
  border: 1px solid #838383;
  box-shadow: none;
}
.dhtmlx_popup_button {
  min-width: 120px;
  background: #ffffff;
}
.dhtmlx_button input,
.dhtmlx_popup_button div {
  border: 1px solid #FFF;
  background: #ffffff;
  background-image: none;
  border-radius: 6px;
  font-size: 15px;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  text-shadow: none;
  color: #444;
  font-weight: normal;
  padding: 0px;
  margin: 0px;
  vertical-align: top;
  height: 28px;
  line-height: 28px;
}
.dhtmlx_popup_button.dhtmlx_ok_button div {
  background: #22A1BC;
  border: 1px solid #22A1BC;
  color: white;
  text-shadow: 0px -1px 0px #6F6F6F;
  outline: none;
}
.dhtmlx_popup_button.dhtmlx_ok_button {
  border: 1px solid #22A1BC;
  background-color: #22A1BC;
  outline: none;
}
.dhtmlx_button input:focus,
.dhtmlx_button input:active,
.dhtmlx_popup_button div:active,
.dhtmlx_popup_button div:focus {
  background: #ffffff;
  background-image: none;
  color: #444;
  box-shadow: none;
  outline: none;
}
.dhtmlx_popup_button.dhtmlx_cancel_button div:active {
  background-color: transparent;
  border-color: transparent;
  outline: none;
}
div.dhx_modal_cover {
  background-color: #000;
  cursor: default;
  opacity: 0.2;
  position: fixed;
  z-index: 17;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border: none;
  zoom: 1;
}
.dhtmlx-info img,
.dhtmlx_modal_box img {
  float: left;
  margin-right: 20px;
}
.dhtmlx-alert-error .dhtmlx_popup_title,
.dhtmlx-confirm-error .dhtmlx_popup_title {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAsCAIAAAArRUU2AAAATklEQVR4nIWLuw2AMBBDjVuQiBT2oWbRDATrnB0KQOJoqPzRe3BrHI6dcBASYREKovtK6/6DsDOX+stN+3H1YX9ciRgnYq5EWYhS2dftBIuLT4JyIrPCAAAAAElFTkSuQmCC);
}
.dhtmlx-alert-error,
.dhtmlx-confirm-error {
  border: 1px solid #ff0000;
}
/*Skin section*/
.dhtmlx_popup_title {
  color: #fff;
  text-shadow: 1px 1px #000;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
.dhtmlx-info,
.dhtmlx-error {
  font-size: 14px;
  color: #000;
  box-shadow: 0px 0px 10px #888;
  padding: 0px;
  background-color: #FFF;
  border-radius: 3px;
  border: 1px solid #ffffff;
}
.dhtmlx-info div {
  padding: 5px 10px 5px 10px;
  background-color: #FFF;
  border-radius: 3px;
  border: 1px solid #b8b8b8;
}
.dhtmlx_message_area .dhtmlx-error {
  background-color: #d81b1b;
  border: 1px solid #ff3c3c;
  box-shadow: 0px 0px 10px #000;
}
.dhtmlx_message_area .dhtmlx-error div {
  background-color: #d81b1b;
  border: 1px solid #940000;
  color: #FFF;
}
.dhtmlx_modal_box.dhtmlx-error .dhtmlx_popup_title {
  background: #d81b1b;
  border: 1px solid #ff3c3c;
  color: #FFF;
}
.dhx_cal_event .dhx_header,
.dhx_cal_event .dhx_title,
.dhx_cal_event .dhx_body,
.dhx_cal_event .dhx_footer {
  background-color: #1796b0;
  border: 1px solid transparent;
  color: #FFFFFF;
  overflow: hidden;
  width: 100%;
}
.dhx_move_denied .dhx_cal_event .dhx_header,
.dhx_move_denied .dhx_cal_event .dhx_title {
  cursor: default;
}
.dhx_cal_event .dhx_header {
  height: 1px;
  margin: 0 0 0 1px;
  border-width: 1px 1px 0px 1px;
  cursor: pointer;
}
.dhx_cal_event .dhx_title {
  height: 12px;
  border-width: 1px 1px 0 1px;
  border-bottom-style: dotted;
  border-radius: 4px 4px 0 0;
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  text-align: center;
  background-position: right;
  background-repeat: no-repeat;
  padding: 1px 0 0 0;
  cursor: pointer;
}
.dhx_cal_container_rtl .dhx_cal_event .dhx_title {
  text-align: center;
  padding: 1px 0 0 0;
}
.dhx_cal_event .dhx_body,
.dhx_cal_event.dhx_cal_select_menu .dhx_body {
  border-width: 0 1px 1px 1px;
  padding: 5px 5px 8px 5px;
  border-radius: 0 0 4px 4px;
  font-weight: normal;
  line-height: normal;
}
.dhx_cal_container_rtl .dhx_cal_event .dhx_body {
  padding: 5px 5px 8px 5px;
}
.dhx_cal_event.dhx_cal_select_menu {
  -webkit-box-shadow: 0 0 1px #FFF;
  -moz-box-shadow: 0 0 1px #FFF;
  box-shadow: 0 0 1px #FFF;
}
.dhx_resize_denied,
.dhx_resize_denied .dhx_event_resize {
  cursor: default !important;
}
.dhx_cal_event .dhx_event_resize {
  cursor: s-resize;
  cursor: ns-resize;
}
.dhx_cal_event .dhx_footer,
.dhx_cal_event .dhx_select_menu_footer {
  height: 5px;
  margin: -6px 0 0 2px;
  border-width: 0;
  position: relative;
  top: auto;
  background: #1796b0 url(imgs_dhx_terrace/resizing.png) no-repeat center center;
}
.dhx_cal_event .dhx_resize_denied.dhx_event_resize.dhx_footer {
  height: 0;
}
.dhx_cal_event_line {
  background-color: #1796b0;
  border: 1px solid transparent;
  border-radius: 2px;
  font-family: "Arial", san-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 17px;
  height: 20px;
  padding: 0 0 0 10px;
  color: #FFFFFF;
  cursor: pointer;
  overflow: hidden;
}
.dhx_cal_container_rtl .dhx_cal_event_line {
  padding: 0 9px 0 0;
}
.dhx_cal_event_line_start {
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
.dhx_cal_container_rtl .dhx_cal_event_line_start {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.dhx_cal_event_line_end {
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
}
.dhx_cal_container_rtl .dhx_cal_event_line_end {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.dhx_cal_container_rtl .dhx_cal_event_line_start {
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
}
.dhx_cal_container_rtl .dhx_cal_event_line_end {
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
.dhx_cal_event_clear {
  height: 20px;
  padding: 0 0 0 2px;
  color: #0E64A0;
  font-family: "Tahoma", san-serif;
  font-size: 8pt;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  background-color: transparent;
  font-weight: normal;
}
.dhx_cal_event.dhx_cal_editor {
  border: 1px solid #1796b0;
  border-top-style: solid;
  z-index: 10;
  position: absolute;
  overflow: hidden;
}
textarea.dhx_cal_editor {
  width: 100%;
  height: 100%;
  border: 0 solid black;
  padding: 0;
  margin: 0;
  overflow: auto;
  font-family: "Arial", san-serif;
  font-size: 12px;
}
div.dhx_menu_head {
  background-image: url(imgs_dhx_terrace/controls.png);
  background-position: 0px -43px;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  margin-top: 1px;
  border: none;
  cursor: default;
}
.dhx_cal_container_rtl div.dhx_menu_head {
  margin-left: 0;
  margin-right: 5px;
}
div.dhx_menu_icon {
  background-image: url(imgs_dhx_terrace/controls.png);
  width: 20px;
  height: 20px;
  margin-left: -5px;
  margin-top: 0px;
  border: none;
  cursor: pointer;
}
.dhx_cal_container_rtl div.dhx_menu_icon {
  margin-left: 0;
  margin-right: -3px;
}
div.icon_details {
  background-position: 0px 0px;
}
div.icon_edit {
  background-position: -22px 0px;
}
div.icon_save {
  background-position: -84px -1px;
}
div.icon_cancel {
  background-position: -62px 0px;
}
div.icon_delete {
  background-position: -42px 0px;
}
/*view more link in month view*/
.dhx_month_link {
  position: absolute;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align: right;
  cursor: pointer;
  padding-right: 10px;
  font-size: 8pt;
  font-family: "Tahoma", san-serif;
}
.dhx_month_link a {
  color: #00f;
}
.dhx_month_link a:hover {
  text-decoration: underline;
  color: #0000b3;
}
.dhx_global_tip {
  font-family: Tahoma, Helvetica;
  text-align: center;
  font-size: 20px;
  position: fixed;
  top: 60px;
  right: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  z-index: 14;
  padding: 20px 30px;
  width: 190px;
}
.dhx_global_tip div {
  font-size: 30px;
}
@media (-moz-touch-enabled) {
  .dhx_cal_container {
    user-select: none;
    -moz-user-select: none;
  }
}
.dhx_cal_data div.dhx_cal_event_clear,
.dhx_multi_day div.dhx_cal_event_clear,
.dhx_cal_data div.dhx_cal_event_line,
.dhx_multi_day div.dhx_cal_event_line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
@media only screen and (max-width: 550px) {
  .dhx_cal_event_clear,
  .dhx_cal_event_line {
    padding-left: 2px;
  }
}
.dhx_unselectable,
.dhx_unselectable div {
  -webkit-user-select: none;
  -moz-user-select: none;
  -moz-user-select: -moz-none;
}
.dhx_cal_light {
  -webkit-tap-highlight-color: transparent;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid #CECECE;
  color: #2E2E2E;
  font-family: "Tahoma", san-serif;
  font-size: 8pt;
  box-shadow: 5px 5px 5px #888;
  position: absolute;
  z-index: 15;
  width: 580px;
}
.dhx_cal_light_rtl {
  box-shadow: -5px 5px 5px #888;
}
.dhx_cal_ltitle {
  padding: 2px 0px 2px 5px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #CECECE;
  background: transparent;
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  white-space: nowrap;
}
.dhx_cal_ltext.dhx_cal_template {
  position: relative;
}
.dhx_cal_ltitle span {
  white-space: nowrap;
}
.dhx_time {
  font-weight: bold;
  padding: 0 0 0 10px;
  font-size: 8pt;
  display: inline-block;
  margin: 0;
}
.dhx_cal_light_rtl .dhx_time {
  padding: 0 10px 0 0;
}
.dhx_cal_light_wide {
  width: 650px;
}
.dhx_mark {
  position: relative;
  top: 3px;
  background-image: url('./imgs/controls.gif');
  background-position: 0px -43px;
  padding-left: 10px;
}
.dhx_ie6 .dhx_mark {
  background-position: 6px -41px;
}
.dhx_cal_light select {
  font-family: "Tahoma", san-serif;
  font-size: 8pt;
  color: #2E2E2E;
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
}
.dhx_cal_light .dhx_title {
  padding: 0 0 0 13px;
  font-size: 8pt;
  text-transform: none;
  color: inherit;
  display: inline-block;
  margin: 0;
}
.dhx_cal_larea {
  border: 1px solid transparent;
  background-color: #FFFFFF;
  overflow: hidden;
}
.dhx_cal_light_wide .dhx_cal_larea {
  border-top-width: 0px;
  margin: 0 0 0 3px;
}
.dhx_cal_light_rtl .dhx_cal_larea {
  margin: 0 3px 0 0;
}
.dhx_cal_light_wide .dhx_wrap_section {
  border-top: 0;
  border-bottom: 1px solid #CECECE;
  position: relative;
  background-color: #FFFFFF;
  overflow: hidden;
  padding: 5px 0;
  margin: 0;
}
.dhx_cal_lsection {
  background-color: #ffffff;
  color: #747473;
  font-weight: 700;
  font-family: "Arial", san-serif;
  font-size: 18px;
  padding: 5px 0 5px 10px;
}
.dhx_cal_light_wide .dhx_cal_lsection {
  border: 0px;
  float: left;
  text-align: right;
  width: 82px;
  width: 100px;
  min-height: 20px;
  line-height: normal;
  height: auto;
  font-size: 13px;
  padding: 5px 0px 0px 10px;
  margin: 0 0 0 0;
}
.dhx_cal_lsection .dhx_fullday {
  float: right;
  margin-right: 5px;
  color: #747373;
  font-family: "Arial", san-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  vertical-align: top;
  cursor: pointer;
}
.dhx_cal_lsection .dhx_fullday input[type="checkbox"] {
  margin: 3px 3px 3px 4px;
}
.dhx_cal_ltext {
  /*margin: 0 0 0 15px;*/
  overflow: hidden;
  float: left;
  float: none;
  width: auto;
  height: auto;
  padding: 2px 0px 2px 10px;
}
.dhx_readonly {
  height: 15px;
}
.dhx_cal_ltext textarea {
  background-color: #F9F9F9;
  overflow: auto;
  color: #2E2E2E;
  height: 100%;
  width: 100%;
  outline: none !important !important;
  resize: none;
  border: 1px solid #CECECE;
  line-height: 20px;
  font-family: inherit;
  box-sizing: border-box;
  padding: 2px 2px 2px 2px;
}
.dhx_section_time {
  background-color: transparent;
  white-space: nowrap;
}
.dhx_cal_light_wide .dhx_section_time {
  padding: 2px 0 0 0 !important;
  height: 20px !important;
}
.dhx_section_time {
  text-align: center;
}
.dhx_cal_light_wide .dhx_section_time {
  background: transparent;
}
.dhx_btn_set {
  padding: 0;
  float: left;
  margin: 12px 0 0 20px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 3px;
  text-transform: none;
  color: #747473;
}
.dhx_right_btn_set {
  margin-right: 20px;
}
.dhx_btn_set div {
  float: left;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  vertical-align: middle;
  cursor: pointer;
}
.dhx_btn_set,
.dhx_cancel_btn_set {
  border: 1px solid #cecece;
  background-color: transparent;
  color: #454544;
  float: right;
  float: left;
}
.dhx_cal_light_rtl .dhx_btn_set,
.dhx_cal_light_rtl .dhx_cancel_btn_set {
  float: right;
}
.dhx_save_btn {
  background-image: url('./imgs/controls.gif');
  background-position: -84px 0px;
  width: 21px;
}
.dhx_cancel_btn {
  background-image: url('./imgs/controls.gif');
  background-position: -63px 0px;
  width: 20px;
}
.dhx_delete_btn {
  background-image: url('./imgs/controls.gif');
  background-position: -42px 0px;
  width: 20px;
}
.dhx_delete_btn_set {
  border: 1px solid #FF8831;
  background-color: #FF8831;
  color: #FFFFFF;
  text-shadow: 0px -1px 0px #93755F;
  margin: 12px 20px 0 20px;
}
.dhx_save_btn_set {
  border: 1px solid #cecece;
  color: #FFFFFF;
  text-shadow: 0px -1px 0px #6F6F6F;
  background-color: #22A1BC;
}
.dhx_cal_cover {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 14;
  top: 0px;
  left: 0px;
  background-color: black;
  opacity: 0.1;
}
.dhx_custom_button {
  padding: 0px 3px 0px 3px;
  color: #747473;
  font-family: "Arial", san-serif;
  font-size: 8pt;
  background-color: white;
  border: 1px solid #CECECE;
  font-weight: normal;
  margin-right: 5px;
  margin-top: 0px;
  cursor: pointer;
}
.dhx_custom_button div {
  cursor: pointer;
  float: left;
  height: 21px;
  line-height: 21px;
  vertical-align: middle;
}
.dhx_cal_light_wide .dhx_cal_lsection .dhx_fullday {
  float: none;
  margin: 0;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
}
.dhx_cal_light_wide .dhx_cal_larea {
  width: 730px;
}
.dhx_cal_light_wide {
  width: 738px;
}
.dhx_cal_light_wide .dhx_cal_checkbox label {
  padding-left: 0px;
}
.dhx_wrap_section .dhx_cal_wide_checkbox input[type="checkbox"] {
  margin-top: 8px;
  margin-left: 14px;
}
.dhx_cal_light_rtl .dhx_wrap_section .dhx_cal_wide_checkbox input[type="checkbox"] {
  margin: 8px 14px 0 0;
}
.dhx_cal_light input {
  font-family: "Tahoma", san-serif;
  font-size: 8pt;
  color: #747473;
}
#input_1518604462804 {
  margin: 0 0 0 11px;
  border-bottom-width: 0;
  border-bottom: 0;
}
.dhx_custom_button {
  float: right;
  height: 21px;
  width: 90px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
}
.dhx_cal_light_wide .dhx_custom_button {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 6px;
}
.dhx_cal_light_wide .dhx_repeat_right {
  margin-right: 55px;
}
.dhx_cal_light_rtl {
  direction: rtl;
}
.dhx_cal_light_rtl .dhx_cal_ltitle {
  padding: 2px 5px 2px 0;
}
.dhx_cal_light_rtl .dhx_mark {
  padding: 0 10px 0 0;
}
.dhx_cal_light_rtl .dhx_title {
  padding: 0 13px 0 0;
}
.dhx_cal_light_rtl .dhx_wrap_section {
  padding: 5px 0;
}
.dhx_cal_light_rtl .dhx_wrap_section .dhx_cal_ltext.dhx_cal_template {
  direction: ltr;
  float: right;
  margin-right: 15px !important;
}
.dhx_cal_light_rtl .dhx_cal_lsection {
  float: right;
  text-align: left;
  margin: 0 0 0 0;
}
.dhx_cal_light_rtl .dhx_cal_ltext {
  padding: 2px 10px 2px 0px;
}
.dhx_cal_light_rtl .dhx_cal_ltext textarea {
  padding: 2px 2px 2px 2px;
}
.dhx_cal_light_rtl .dhx_section_time {
  padding: 2px 0 0 0 !important;
}
.dhx_cal_light_rtl select {
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
}
.dhx_cal_light_rtl .dhx_custom_button {
  left: 15px;
  right: auto;
  right: unset;
}
@media only screen and (max-width: 1023px) {
  .dhx_cal_overflow_container {
    overflow: auto !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive {
    width: 98vw !important;
    height: auto !important;
    left: 1% !important;
    top: 1.953vw !important;
    font-size: 3.906vw !important;
    line-height: 3.906vw !important;
    padding-bottom: 2vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_btn_set {
    margin-bottom: 1.953vw !important;
    font-size: 3.906vw;
    height: auto !important;
    padding: 1.953vw 1.563vw 1.953vw 1.563vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_btn_set div {
    height: 2.93vw;
    line-height: 2.93vw;
    padding: 0 1.563vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_larea {
    width: auto !important;
    margin-left: 0 !important;
    height: 100% !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_larea label {
    display: inline;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_lsection {
    font-size: 3.906vw !important;
    width: 23.438vw !important;
    margin-left: 3vw;
    line-height: 3.906vw !important;
    margin-right: 0;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_lsection .dhx_custom_button {
    padding: 0.977vw 4.492vw 0.977vw 1.563vw;
    min-width: 25.391vw !important;
    min-height: 5.371vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_ltitle {
    height: 2rem !important;
    line-height: 2rem !important;
    margin-bottom: 0.5rem;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_ltitle span {
    font-size: 3.906vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive textarea,
  .dhx_cal_light.dhx_cal_light_responsive select,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time select,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_lsection div.dhx_custom_button,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_template,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_radio {
    font-size: 3.5vw;
    line-height: 3.5vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive textarea label,
  .dhx_cal_light.dhx_cal_light_responsive select label,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time select label,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_lsection div.dhx_custom_button label,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_template label,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_radio label {
    margin: 1vw 3vw 1vw 0.5vw;
    vertical-align: top;
  }
  .dhx_cal_light.dhx_cal_light_responsive select,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_section_time select {
    min-height: 5.859vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_ltext {
    margin-left: 26.5vw !important;
    height: 100% !important;
    min-height: 4.883vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_repeat_center,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_repeat_left,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_repeat_divider,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_repeat_right {
    height: 11.23vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time {
    padding-left: 28.5vw !important;
    width: auto !important;
    min-height: 19.531vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time select {
    float: left;
    margin: 1.465vw 0.5vw 1.465vw 0.5vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time .dhx_lightbox_time_select {
    width: 14.648vw;
    padding-left: 1.953vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time .dhx_lightbox_day_select {
    min-width: 7.813vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time .dhx_lightbox_year_select {
    min-width: 13.672vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time .dhx_lightbox_month_select {
    width: 20.508vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_cal_wide_checkbox {
    height: 100% !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_multi_select_control {
    height: 100% !important;
    vertical-align: middle;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_multi_select_control input {
    vertical-align: middle;
  }
  .dhx_cal_light.dhx_cal_light_responsive input {
    width: 4.883vw;
    height: 4.883vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_custom_button div {
    height: auto;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_custom_button .dhx_custom_button_recurring {
    background-size: 7.813vw !important;
    width: 6.836vw !important;
    height: 6.836vw !important;
    background-repeat: no-repeat !important;
    background-position: -25px -1px !important;
    padding-top: 0 !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_wrap_section {
    min-height: 7.813vw !important;
    max-width: 92.773vw !important;
    margin: 0.977vw 0;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat {
    margin: 6.836vw 0 0 23.438vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat form {
    height: 48.828vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat div {
    width: 70vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_left br {
    content: ' ';
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat input {
    top: 1.465vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat select {
    width: 14.648vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat label {
    padding-right: 1.465vw;
    white-space: nowrap;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat form,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat form select,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_date,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_text,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat label {
    font-size: 2.93vw !important;
    line-height: 2.93vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_center,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_left,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_divider,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_right {
    height: auto;
    float: none;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_center {
    height: auto !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_center,
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_left {
    padding-bottom: 10px;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_text {
    width: 6.836vw !important;
    height: 5.859vw !important;
    border: 1px solid #CECECE;
    background-color: #F9F9F9;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_checkbox {
    width: 2.93vw !important;
    height: 2.93vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_days label {
    font-size: 2.441vw !important;
    line-height: 2.5vw !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_right {
    height: auto !important;
    float: left;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_right .dhx_repeat_date {
    width: 19.531vw !important;
    height: 7.813vw !important;
    padding-left: 1.465vw !important;
    margin-top: 1.465vw;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_divider {
    border-top: 1px solid #CECECE;
    border-left: 0;
    width: 70vw;
    height: 1px;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_custom_button div {
    /*padding-top: @ligthbox-responsive-recurring-btn-div-padding;*/
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_fullday input {
    vertical-align: middle;
  }
  .dhx_cal_light.dhx_cal_light_responsive .combo {
    height: auto !important;
  }
  .dhx_cal_light.dhx_cal_light_responsive .dhx_custom_button .dhx_custom_button_recurring {
    background-position: -14px -1px !important;
    width: 4.836vw !important;
    height: 4.836vw !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_cal_larea {
    margin-right: 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_cal_lsection {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_cal_ltext {
    margin-right: 23.438vw !important;
    margin-left: 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_wrap_section .dhx_cal_wide_checkbox input[type="checkbox"] {
    margin: 0.781vw 1.367vw 0 0;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time {
    padding-right: 23.438vw !important;
    padding-left: 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time select {
    float: right;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time .dhx_lightbox_time_select {
    padding-right: 1.953vw !important;
    padding-left: 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_wrap_section .dhx_section_time span {
    display: none;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_form_repeat {
    margin: 6.836vw 23.438vw 0 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_form_repeat label {
    padding-left: 1.465vw;
    padding-right: 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_right {
    float: left;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_form_repeat .dhx_repeat_right .dhx_repeat_date {
    padding-right: 1.465vw !important;
    padding-left: 0 !important;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_multi_select_control.dhx_multi_select_control_vertical {
    float: right;
  }
  .dhx_cal_light_rtl.dhx_cal_light_responsive .dhx_multi_select_control {
    float: auto;
    float: unset;
  }
}
.dhx_minical_popup {
  position: absolute;
  z-index: 16;
  width: 251px;
  height: 175px;
}
.dhx_scale_bar_header {
  position: absolute;
  border-bottom: 1px dotted #a39588;
  width: 100%;
}
.dhx_expand_icon {
  position: absolute;
  top: 0px;
  right: 0px;
  background-image: url(./imgs/collapse_expand_icon.gif);
  width: 18px;
  height: 18px;
  cursor: pointer;
  background-position: 0px 18px;
  z-index: 4;
}
.dhx_scheduler_agenda .dhx_cal_data {
  background-image: url(./imgs/databg.png);
}
.dhx_agenda_area {
  width: 100%;
  overflow-y: auto;
  background-image: url(./imgs/databg.png);
}
.dhx_agenda_line {
  height: 21px;
  clear: both;
  overflow: hidden;
}
.dhx_agenda_line div {
  float: left;
  width: 188px;
  border-right: 1px dotted #8894A3;
  text-align: center;
  line-height: 21px;
  overflow: hidden;
}
.dhx_cal_container_rtl .dhx_agenda_line div {
  float: right;
}
.dhx_cal_container_rtl .dhx_agenda_line .description_header {
  padding-right: 15px;
  float: right;
}
.dhx_cal_header div.dhx_map_line,
.dhx_cal_header div.dhx_agenda_line div,
.dhx_cal_header div.dhx_agenda_line span {
  font-weight: normal;
  color: #747473;
}
.dhx_cal_container_rtl .dhx_cal_header div.dhx_map_line {
  float: right;
}
.dhx_cal_container_rtl .dhx_agenda_area .dhx_agenda_line div {
  border-left: 0px dotted #000;
}
.dhx_agenda_area .dhx_agenda_line div {
  border-right: 0px dotted #000;
}
.dhx_v_border {
  position: absolute;
  left: 187px;
  top: 0;
  border-right: 1px dotted #8894A3;
  width: 1px;
  height: 100%;
}
.dhx_cal_container_rtl .dhx_v_border {
  right: 186px;
  left: unset;
}
.dhx_agenda_line .dhx_event_icon {
  width: 20px;
  border-width: 0px;
  background: url(./imgs/icon.png) no-repeat;
  background-position: 5px 4px;
  cursor: pointer;
}
.dhx_cal_container_rtl .dhx_agenda_line .dhx_event_icon {
  background-position-x: 2px;
}
.dhx_agenda_line span {
  padding-left: 5px;
  line-height: 21px;
}
.dhx_cal_container_rtl .dhx_agenda_line span {
  padding-left: 0;
  padding-right: 5px;
}
.dhx_year_body {
  border-left: 1px solid #CECECE;
}
.dhx_year_week {
  position: relative;
}
.dhx_scale_bar_last {
  border-right: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_year_body {
  border-left: 0;
  border-right: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_year_box .dhx_scale_bar_last {
  border-left: 1px solid #CECECE;
}
.dhx_year_month {
  height: 18px;
  padding-top: 3px;
  border: 1px solid #CECECE;
  text-align: center;
  vertical-align: middle;
}
.dhx_year_body .dhx_before .dhx_month_head,
.dhx_year_body .dhx_after .dhx_month_head,
.dhx_year_body .dhx_before .dhx_month_head a,
.dhx_year_body .dhx_after .dhx_month_head a {
  color: #E2E3E6;
}
.dhx_year_body .dhx_month_body {
  height: 0px;
  overflow: hidden;
}
.dhx_month_head.dhx_year_event {
  background-color: #FFE763;
  color: '';
}
.dhx_year_body .dhx_before .dhx_month_head,
.dhx_year_body .dhx_after .dhx_month_head {
  cursor: default;
}
.dhx_year_tooltip {
  border: 1px solid #BBBBBB;
  background-image: url(./imgs/databg.png);
  position: absolute;
  z-index: 12;
  width: 300px;
  height: auto;
  font-family: Tahoma;
  font-size: 8pt;
  overflow: hidden;
}
.dhx_tooltip_line {
  line-height: 20px;
  height: 20px;
  overflow: hidden;
}
.dhx_tooltip_line .dhx_event_icon {
  width: 20px;
  height: 20px;
  padding-right: 10px;
  float: left;
  border-width: 0px;
  position: relative;
  background: url(./imgs/icon.png) no-repeat;
  background-position: 5px 4px;
  cursor: pointer;
}
.dhx_tooltip_date {
  float: left;
  width: auto;
  padding-left: 5px;
  text-align: center;
}
.dhx_text_disabled {
  color: #2E2E2E;
  font-family: "Tahoma", san-serif;
  font-size: 8pt;
}
.dhx_mini_calendar {
  -moz-box-shadow: 5px 5px 5px #888;
  /*Doesn't work in IE*/
  -khtml-box-shadow: 5px 5px 5px #888;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -user-select: none;
}
.dhx_mini_calendar .dhx_month_head {
  cursor: pointer;
}
.dhx_mini_calendar .dhx_calendar_click {
  background-color: #C2D5FC;
}
.dhx_cal_navline div.dhx_minical_icon {
  width: 18px;
  height: 18px;
  left: 190px;
  top: 1px;
  cursor: pointer;
  background: url(./imgs_dhx_terrace/calendar.gif) no-repeat;
}
.dhx_grid_rtl {
  direction: rtl;
}
.dhx_matrix_scell,
.dhx_timeline_scale_header {
  height: 100%;
  font-family: "Tahoma", san-serif;
  font-size: 8pt;
  color: inherit;
  font-weight: 500;
}
.dhx_matrix_cell,
.dhx_matrix_scell {
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  border-bottom: 1px solid #CECECE;
  border-right: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_matrix_cell,
.dhx_cal_container_rtl .dhx_matrix_scell {
  border-right: unset;
  border-left: 1px solid #CECECE;
}
.dhx_timeline_scale_header {
  border-right: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_timeline_scale_header {
  border-right: unset;
  border-left: 1px solid #CECECE;
}
.dhx_cal_data .dhx_timeline_table_wrapper div {
  box-sizing: border-box;
}
.dhx_matrix_cell {
  background-color: white;
}
.dhx_matrix_line {
  overflow: hidden;
}
.dhx_matrix_cell div,
.dhx_matrix_scell div {
  overflow: hidden;
  text-align: center;
  height: auto;
}
.dhx_cal_lsection .dhx_readonly {
  font-size: 9pt;
  font-size: 8pt;
  padding: 2px;
  color: #887A2E;
}
.dhx_cal_event_line .dhx_event_resize {
  cursor: w-resize;
  cursor: ew-resize;
  background: url(./imgs_dhx_terrace/resize_dots.png) repeat-y;
  position: absolute;
  top: 0;
  width: 4px;
  height: 100%;
}
.dhx_event_resize_start {
  left: 0;
}
.dhx_cal_container_rtl .dhx_event_resize_start {
  left: auto;
  left: unset;
  right: 0;
}
.dhx_event_resize_end {
  right: 0;
}
.dhx_cal_container_rtl .dhx_event_resize_end {
  right: auto;
  right: unset;
  left: 0;
}
/* Tree view */
.dhx_matrix_scell.folder,
.dhx_data_table.folder .dhx_matrix_cell {
  background-color: #969394;
  cursor: pointer;
}
.dhx_matrix_scell .dhx_scell_level0 {
  padding-left: 5px;
}
.dhx_matrix_scell .dhx_scell_level1 {
  padding-left: 20px;
}
.dhx_matrix_scell .dhx_scell_level2 {
  padding-left: 35px;
}
.dhx_matrix_scell .dhx_scell_level3 {
  padding-left: 50px;
}
.dhx_matrix_scell .dhx_scell_level4 {
  padding-left: 65px;
}
.dhx_matrix_scell.folder {
  border-right: 0;
  font-weight: bold;
  text-align: left;
}
.dhx_matrix_scell.folder,
.dhx_timeline_label_row.dhx_row_folder {
  overflow: visible;
}
.dhx_matrix_scell.folder > div {
  display: flex;
  align-items: center;
  height: inherit;
}
.dhx_matrix_scell.folder .dhx_scell_expand {
  width: 12px;
  position: relative;
  flex-shrink: 0;
}
.dhx_matrix_scell.folder .dhx_scell_name {
  width: auto;
  color: inherit;
  text-transform: none;
  font-weight: inherit;
  max-height: 100%;
}
.dhx_matrix_scell.item .dhx_scell_name {
  padding-left: 15px;
  text-align: left;
}
.dhx_cal_container_rtl .dhx_matrix_scell .dhx_scell_level0 {
  padding-left: 0;
  padding-right: 5px;
}
.dhx_cal_container_rtl .dhx_matrix_scell .dhx_scell_level1 {
  padding-left: 0;
  padding-right: 20px;
}
.dhx_cal_container_rtl .dhx_matrix_scell .dhx_scell_level2 {
  padding-left: 0;
  padding-right: 35px;
}
.dhx_cal_container_rtl .dhx_matrix_scell .dhx_scell_level3 {
  padding-left: 0;
  padding-right: 50px;
}
.dhx_cal_container_rtl .dhx_matrix_scell .dhx_scell_level4 {
  padding-left: 0;
  padding-right: 65px;
}
.dhx_cal_container_rtl .dhx_matrix_scell.folder .dhx_scell_expand {
  padding-right: 0;
  padding-left: 3px;
}
.dhx_cal_container_rtl .dhx_matrix_scell.item .dhx_scell_name {
  padding-left: 0;
  padding-right: 15px;
  text-align: right;
}
.dhx_data_table.folder .dhx_matrix_cell {
  border-right: 0;
}
.dhx_section_timeline {
  overflow: hidden;
  padding: 4px 0 2px 10px;
}
.dhx_section_timeline select {
  width: 552px;
}
/* Tree view end*/
/* Map view */
.dhx_map_area {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url(./imgs/databg.png);
}
.dhx_map_line .dhx_event_icon {
  width: 20px;
  border-width: 0px;
  background: url(./imgs/icon.png) no-repeat;
  background-position: 5px 4px;
  cursor: pointer;
}
.dhx_cal_container_rtl .dhx_map_line .dhx_event_icon {
  margin-right: 3px;
}
.dhx_map_line {
  height: 21px;
  clear: both;
  overflow: hidden;
}
.dhx_map {
  position: absolute;
}
.dhx_map_line div {
  float: left;
  border-right: 1px dotted #8894A3;
  text-align: center;
  line-height: 21px;
  overflow: hidden;
}
.dhx_map_line .headline_description {
  float: left;
  border-right: 1px dotted #8894A3;
  text-align: center;
  line-height: 21px;
  overflow: hidden;
}
.dhx_map_line .dhx_map_description {
  float: left;
  border-right: 0 dotted #8894A3;
  text-align: center;
  line-height: 21px;
  overflow: hidden;
}
.dhx_map_line .headline_date,
.dhx_map_line .headline_description {
  border-left: 0;
}
.dhx_cal_container_rtl .dhx_map_line div {
  float: right;
}
.dhx_cal_container_rtl .dhx_map_line .headline_date,
.dhx_cal_container_rtl .dhx_map_line .headline_description {
  float: right;
  border-left: 1px solid #CECECE;
  border-right: 0;
}
.dhx_map_line .line_description {
  float: left;
  border-right: 1px dotted #8894A3;
  text-align: left;
  padding-left: 5px;
  line-height: 21px;
  overflow: hidden;
}
.dhx_cal_container_rtl .dhx_map_line .line_description {
  float: right;
  text-align: right;
  padding-left: unset;
}
.dhx_map_line.highlight {
  background-color: #C4C5CC;
}
.dhx_map_area .dhx_map_line div {
  border-right: 0px dotted #8894A3;
}
/* Map view end */
/* dhtmlXTooltip start */
.dhtmlXTooltip.tooltip {
  -moz-box-shadow: 3px 3px 3px #888888;
  -webkit-box-shadow: 3px 3px 3px #888888;
  -o-box-shadow: 3px 3px 3px #888888;
  box-shadow: 3px 3px 3px #888888;
  filter: progid:DXImageTransform.Microsoft.Shadow(color='#888888', Direction=135, Strength=5);
  background-color: white;
  cursor: default;
  padding: 10px;
  position: fixed;
  z-index: 9;
  opacity: 1;
  font-family: "Arial", san-serif;
}
.dhtmlXTooltip_rtl {
  direction: rtl;
}
.dhx_tooltip_rtl {
  direction: rtl;
}
.dhx_tooltip_rtl .dhx_tooltip_date {
  float: right;
  padding: 0 5px 0 0;
}
.dhx_tooltip_rtl .dhx_tooltip_line {
  margin: 0 0 0 12px;
  padding: 0 4px 0 0;
}
.dhx_tooltip_rtl .dhx_tooltip_line .dhx_event_icon.icon_details {
  float: right;
  padding: 0 0 0 10px;
}
/* dhtmlXTooltip end */
/* Lightbox checkbox section */
.dhx_cal_checkbox label {
  padding-left: 5px;
}
/* Lightbox checkbox section end */
/* Lightbox radiobuttons section */
.dhx_cal_light .radio {
  padding: 2px 0px 2px 10px;
}
.dhx_cal_light .radio input,
.dhx_cal_light .radio label {
  line-height: 15px;
}
.dhx_cal_light .radio input {
  vertical-align: middle;
  margin: 0px;
  padding: 0px;
}
.dhx_cal_light .radio label {
  vertical-align: middle;
  padding-right: 10px;
}
/* Lightbox radiobuttons section end */
/* Lightbox dhtmlx combo section */
.dhx_cal_light .combo {
  padding: 4px;
}
/* dhtmlxCombo v3.x */
.dhx_cal_light_wide .dhx_combo_box,
.dhx_cal_light_wide .combo > div {
  width: 608px !important;
  left: 10px;
}
/* Lightbox dhtmlx combo section end */
/* Agenda week start */
.dhx_wa_column {
  float: left;
}
.dhx_cal_container_rtl .dhx_wa_column {
  float: right;
}
.dhx_wa_column_last .dhx_wa_day_cont {
  border-left: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_wa_column_last .dhx_wa_day_cont {
  border-right: 1px solid #CECECE;
}
.dhx_wa_scale_bar {
  font-family: "Tahoma", san-serif;
  padding-left: 10px;
  font-size: 11px;
  border-top: 1px solid #CECECE;
  border-bottom: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_wa_scale_bar {
  padding-left: 0;
  padding-right: 10px;
}
.dhx_wa_day_data {
  background-color: #FCFEFC;
  overflow-y: auto;
}
.dhx_wa_ev_body {
  border-bottom: 1px solid #CECECE;
  font-size: 12px;
  padding: 5px 0 5px 7px;
}
.dhx_cal_container_rtl .dhx_wa_ev_body {
  padding: 5px 7px 5px 0;
}
.dhx_wa_ev_body_rtl {
  direction: rtl;
}
.dhx_wa_dnd {
  font-family: "Tahoma", san-serif;
  position: absolute;
  padding-right: 7px;
  color: #887AE2 !important;
  background-color: #FFE763 !important;
  border: 1px solid #B7A543;
}
.dhx_wa_ev_body.dhx_cal_event_selected {
  background-color: #9cc1db;
  color: white;
}
/* Agenda week end */
/* timeline second scale start */
.dhx_second_scale_bar {
  border-bottom: 1px solid #CECECE;
  padding-top: 2px;
}
/* timeline second scale end */
/* grid view */
.dhx_cal_header div.dhx_grid_line div {
  border-left: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_cal_header div.dhx_grid_line div {
  border-right: 1px solid #CECECE;
  border-left: 0;
}
.dhx_grid_area {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #FCFEFC;
}
.dhx_grid_area table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  table-layout: fixed;
}
.dhx_grid_area td {
  table-layout: fixed;
  text-align: center;
}
.dhx_grid_line {
  height: 21px;
  clear: both;
  overflow: hidden;
}
.dhx_grid_line div {
  float: left;
  cursor: default;
  padding-top: 0;
  padding-bottom: 0;
  text-align: center;
  line-height: 21px;
  overflow: hidden;
}
.dhx_cal_container_rtl .dhx_grid_line div {
  float: right;
}
.dhx_grid_area td,
.dhx_grid_line div {
  padding-left: 8px;
  padding-right: 8px;
}
.dhx_grid_area tr.dhx_grid_event {
  height: 21px;
  overflow: hidden;
  margin: 0 0 1px 0;
}
.dhx_grid_area tr.dhx_grid_event td {
  /*borders for old ies*/
  border-bottom: 1px solid #ECEEF4;
}
.dhx_cal_container_rtl .dhx_grid_area tr.dhx_grid_event td {
  /*borders for old ies*/
  border-bottom: 1px solid #ECEEF4;
  direction: ltr;
}
.dhx_cal_container_rtl .dhx_map_line div.dhx_map_event_time {
  float: right;
  direction: ltr;
}
.dhx_grid_area tr.dhx_grid_event:nth-child(2n+1) td,
.dhx_grid_area tr.dhx_grid_event:nth-child(2n) td {
  border-bottom-width: 0px;
  border-bottom-style: none;
}
.dhx_grid_area tr.dhx_grid_event:nth-child(2n) {
  background-color: #ECEEF4;
}
.dhx_grid_area .dhx_grid_dummy {
  table-layout: auto;
  margin: 0 !important;
  padding: 0 !important;
}
.dhx_grid_v_border {
  position: absolute;
  border-right: 1px solid #A4BED4;
  width: 1px;
  height: 100%;
}
.dhx_cal_container_rtl .dhx_grid_v_border {
  border-left: 1px solid #A4BED4;
  border-right: 0;
}
.dhx_grid_event_selected {
  background-color: #9cc1db !important;
  color: white !important;
}
.dhx_grid_sort_desc .dhx_grid_view_sort {
  background-position: 0 -55px;
}
.dhx_grid_sort_asc .dhx_grid_view_sort {
  background-position: 0 -66px;
}
.dhx_grid_view_sort {
  width: 10px;
  height: 10px;
  position: absolute;
  border: none !important;
  top: 5px;
  background-repeat: no-repeat;
  background-image: url(./imgs/images.png);
}
/* end grid */
/* marked timespans */
.dhx_marked_timespan {
  position: absolute;
  width: 100%;
  margin-left: 0;
  /* fix bootstrap conflict [class*="span"] */
}
.dhx_time_block {
  position: absolute;
  width: 100%;
  background: silver;
  opacity: 0.4;
  filter: alpha(opacity=40);
  z-index: 1;
}
.dhx_time_block_reset {
  opacity: 1;
  filter: alpha(opacity=100);
}
.dhx_scheduler_month .dhx_marked_timespan {
  display: none;
}
.dhx_mini_calendar .dhx_marked_timespan {
  display: none;
}
/* now time */
.dhx_now_time {
  width: 100%;
  border-bottom: 2px solid red;
}
.dhx_scheduler_month .dhx_now_time {
  border-bottom: 0;
  border-left: 2px solid red;
}
.dhx_matrix_now_time {
  border-left: 2px solid red;
}
.dhx_now_time,
.dhx_matrix_now_time {
  opacity: 0.5;
}
/* now time End */
/* Quick info */
.dhx_cal_quick_info {
  border: 2px solid #888;
  border-radius: 5px;
  position: absolute;
  z-index: 8;
  font-family: "Tahoma", san-serif;
  font-size: 8pt;
  background-color: rgba(50, 50, 50, 0.5);
  padding: 0 0 0 7px;
  width: 300px;
  transition: left 0.5s ease, right 0.5s;
  -moz-transition: left 0.5s ease, right 0.5s;
  -webkit-transition: left 0.5s ease, right 0.5s;
  -o-transition: left 0.5s ease, right 0.5s;
}
.dhx_no_animate {
  transition: none;
  -moz-transition: none;
  -webkit-transition: none;
  -o-transition: none;
}
.dhx_cal_quick_info.dhx_qi_left .dhx_qi_big_icon {
  float: right;
}
.dhx_quick_info_rtl.dhx_cal_quick_info.dhx_qi_left .dhx_qi_big_icon {
  float: left;
}
.dhx_cal_qi_title {
  padding: 5px 0px 10px 5px;
  color: #FFF;
  letter-spacing: 1px;
}
.dhx_cal_container_rtl .dhx_cal_qi_title {
  padding: 5px 18px 10px 0px;
  text-align: right;
}
.dhx_cal_qi_tdate {
  font-size: 14px;
}
.dhx_cal_qi_tcontent {
  font-size: 18px;
  font-weight: 700;
}
.dhx_qi_big_icon .dhx_menu_icon {
  /*background: @infobox-control-btn-background;*/
}
.dhx_cal_qi_content {
  border: 1px solid #888;
  background-color: #fefefe;
  padding: 16px 8px;
  font-size: 14px;
  color: #444;
  width: 275px;
  overflow: hidden;
}
.dhx_quick_info_rtl .dhx_cal_qi_content {
  padding: 16px 8px;
  direction: rtl;
}
.dhx_qi_big_icon {
  min-width: 60px;
  padding: 5px 10px 5px 5px;
  margin: 5px 9px 5px 0px;
  background-color: #1796b0;
  border-bottom: 1px solid #666;
  border-right: 1px solid #666;
  border-radius: 3px;
  line-height: 20px;
  color: #FFFFFF;
  vertical-align: middle;
  cursor: pointer;
  float: left;
}
.dhx_quick_info_rtl .dhx_qi_big_icon {
  padding: 5px 5px 5px 10px;
  margin: 5px 0px 5px 9px;
}
.dhx_cal_qi_controls div {
  float: left;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
.dhx_quick_info_rtl .dhx_cal_qi_controls div {
  float: right;
}
.dhx_quick_info_rtl.dhx_qi_right .dhx_cal_qi_controls {
  padding-right: 15px;
}
.dhx_qi_big_icon .dhx_menu_icon {
  margin: 0 8px 0 0px;
}
.dhx_quick_info_rtl .dhx_qi_big_icon .dhx_menu_icon {
  margin: 0 0 0 8px;
}
.dhx_drag_marker {
  width: 100%;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);
  opacity: 0.5;
  background-color: #FFE763;
  position: absolute;
  box-sizing: border-box !important;
  border-top: 1px solid #B6B6B6;
  border-bottom: 1px solid #B6B6B6;
}
/* key nav */
.dhx_focus_slot {
  background: #FFE763;
  position: absolute;
  pointer-events: none;
  opacity: 0.3;
}
.dhx_cal_container *:focus {
  outline-style: solid;
  /*not visible focus outline in ie11*/
  outline-style: auto;
}
/* key nav end*/
.dhx_no_select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;
}
.dhx_drag_placeholder {
  z-index: 10;
  opacity: 0.8;
}
.dhx_drag_placeholder .dhx_cal_select_menu {
  display: none;
}
/* key nav end*/
/* timeline scroll */
.dhx_timeline_scale_header {
  position: absolute;
  z-index: 2;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  background-color: #ffffff;
}
.dhx_timeline_label_wrapper {
  overflow: hidden;
  background-color: #ffffff;
  position: absolute;
  z-index: 1;
}
.dhx_timeline_label_col {
  position: relative;
}
.dhx_timeline_label_row {
  position: absolute;
  left: 0;
  background-color: inherit;
}
.dhx_timeline_data_wrapper {
  position: absolute;
  z-index: 0;
  left: 0;
  width: 100%;
}
.dhx_timeline_data_row {
  position: relative;
}
.dhx_timeline_data_cell {
  position: absolute;
  top: 0;
  height: 100%;
}
.dhx_timeline_table_wrapper .dhx_marked_timespan {
  z-index: 1;
}
.dhx_timeline_table_wrapper .dhx_time_block {
  z-index: 2;
}
.dhx_timeline_table_wrapper .dhx_cal_event_line {
  z-index: 1;
}
.dhx_timeline_table_wrapper .dhx_timeline_scrollable_data {
  overflow-x: auto;
}
/* timeline scroll end*/
/* bootstrap CSS fix start */
.dhx_cal_navline div,
.dhx_cal_header,
.dhx_cal_header div,
.dhx_cal_data,
.dhx_cal_data div,
.dhx_cal_data table *,
.dhx_multi_day,
.dhx_multi_day div,
.dhx_tooltip_line div,
.dhx_cal_quick_info,
.dhx_cal_quick_info div,
.dhtmlx_modal_box * {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.dhx_cal_light .dhx_wrap_section,
.dhx_cal_light .dhx_cal_lsection {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.dhx_form_repeat label {
  margin-bottom: 0;
}
.dhx_cal_data div.dhx_scale_hour,
.dhx_cal_data table .dhx_matrix_cell,
.dhx_cal_data table .dhx_matrix_scell {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.dhx_cal_event div {
  line-height: normal;
}
.dhx_cal_data table {
  border-collapse: separate;
}
.dhx_cal_light .dhx_cal_radio input[type="radio"] {
  margin: 3px 3px 0px 5px;
}
.dhx_cal_light_rtl .dhx_cal_radio input[type="radio"] {
  margin: 3px 5px 0px 3px;
}
.dhx_cal_light .dhx_cal_radio label {
  display: inline-block;
  margin: 0 0 0 0;
  position: relative;
  top: -3px;
}
.dhx_cal_light_rtl .dhx_cal_radio label {
  margin: 0 0 0 0;
}
.dhx_cal_event div {
  line-height: normal;
}
/* bootstrap CSS fix end */
.dhx_cal_container {
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  font-family: "Arial", san-serif;
  font-size: 12px;
}
.dhx_cal_container div {
  -moz-user-select: none;
  -moz-user-select: -moz-none;
}
.dhx_cal_navline {
  height: 20px;
  position: absolute;
  z-index: 3;
  width: 750px;
  color: #2F3A48;
}
.dhx_cal_navline div {
  position: absolute;
  white-space: nowrap;
  top: 14px;
}
.dhx_cal_navline .dhx_cal_date {
  border: 0;
  font-size: 18px;
  font-weight: normal;
  font-family: "Arial", san-serif;
  width: 100%;
  text-align: center;
  left: 0;
  padding: 1px 0 0 0;
  color: #454544;
  z-index: -1;
}
.dhx_cal_button .dhx_left_bg {
  width: 1px;
  overflow: hidden;
  height: 17px;
  z-index: 5;
  top: 0px;
}
.dhx_cal_prev_button {
  cursor: pointer;
  right: 61px;
  background-color: none;
  background-image: url(imgs_dhx_terrace/arrow_left.png);
  background-position: center center;
  background-repeat: no-repeat;
  height: 30px;
  width: 46px;
  border: 1px solid #CECECE;
  border-radius: 5px 0 0 5px;
}
.dhx_cal_today_button {
  cursor: pointer;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #747473;
  right: 123px;
  background-color: none;
  background-image: none;
  background-position: -62px 0px;
  background-repeat: no-repeat;
  height: 30px;
  width: 80px;
  border: 1px solid #CECECE;
  border-radius: 5px;
  text-decoration: none;
  text-transform: none;
}
.dhx_cal_next_button {
  cursor: pointer;
  right: 14px;
  background-color: none;
  background-image: url(imgs_dhx_terrace/arrow_right.png);
  background-position: center center;
  background-repeat: no-repeat;
  height: 30px;
  width: 46px;
  border: 1px solid #CECECE;
  border-radius: 0 5px 5px 0;
}
.dhx_cal_tab {
  width: 60px;
  height: 30px;
  background-color: none;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  font-weight: bold;
  padding-top: 0;
  border-radius: 0;
  cursor: pointer;
  border: 1px solid #CECECE;
  color: #747473;
  font-size: inherit;
}
.dhx_cal_tab:hover {
  /*color: @nav-tab-text-hov-text-color;*/
}
.dhx_cal_tab.active {
  text-decoration: none;
  cursor: default;
  font-weight: bold;
  font-size: inherit;
  color: #454544;
  border: 1px solid #CECECE;
  border-bottom: 1;
  background-color: #F0EDE7;
  z-index: 25;
}
.dhx_cal_tab_first {
  border-radius: 5px 0 0 5px;
  border-right: 0;
}
.dhx_cal_tab_last {
  border-radius: 0 5px 5px 0;
}
.dhx_cal_tab,
.dhx_cal_date,
.dhx_cal_today_button,
.dhx_cal_prev_button,
.dhx_cal_next_button {
  line-height: 30px;
}
.dhx_cal_header {
  position: absolute;
  overflow: hidden;
  left: 10px;
  background: #FFFFFF;
  border-top: 1px solid #CECECE;
  border-right: 1px solid #CECECE;
  z-index: 2;
}
.dhx_cal_container_rtl .dhx_cal_header {
  left: unset;
}
.dhx_cal_data {
  -webkit-tap-highlight-color: transparent;
  border-top: 1px solid #CECECE;
  position: absolute;
  width: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.dhx_cal_container_rtl .dhx_cal_data {
  direction: rtl;
}
.dhx_cal_data,
.dhx_cal_event,
.dhx_cal_event_line,
.dhx_cal_event_clear {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
}
.dhx_scale_bar {
  position: absolute;
  text-align: center;
  background-color: #FFFFFF;
  padding: 2px 0 0 0;
  border-left: 1px solid #CECECE;
  font-size: 11px;
  font-weight: inherit;
  line-height: 16px;
  color: #767676;
}
.scheduler_container_resize_watcher {
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  pointer-events: none;
  border: 0;
  box-sizing: border-box;
  opacity: 0;
}
.dhx_scale_holder {
  position: absolute;
  border-right: 1px solid #CECECE;
  background-image: url(imgs_dhx_terrace/databg.png);
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
.dhx_cal_container_rtl .dhx_scale_holder {
  border-left: 1px solid #CECECE;
  border-right: 0;
}
.dhx_cal_container_rtl .dhx_cal_header {
  border-right: 0;
  border-left: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_scale_bar {
  border-left: 0;
  border-right: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_month_head {
  border-right: 0;
  border-left: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_month_body {
  border-right: 0;
  border-left: 1px solid #CECECE;
}
.dhx_scale_holder_now {
  position: absolute;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
.dhx_scale_holder_now {
  position: absolute;
  border-right: 1px solid #CECECE;
  background-image: url(imgs_dhx_terrace/databg_now.png);
}
.dhx_cal_container_rtl .dhx_scale_holder_now {
  border-right: 0;
  border-left: 1px solid #CECECE;
}
.dhx_scale_hour {
  border-bottom: 1px solid #CECECE;
  background-color: #FFFFFF;
  text-align: center;
  line-height: 44px;
  color: #767676;
  font-size: 11px;
  font-weight: inherit;
  overflow: hidden;
}
.dhx_month_head {
  height: 21px;
  padding: 0 5px 0 0;
  font-size: 12px;
  font-weight: inherit;
  line-height: 21px;
  color: #362d26;
  border-right: 1px solid #CECECE;
  background-color: #FFFFFF;
  text-align: right;
}
.dhx_cal_container_rtl .dhx_month_head {
  text-align: left;
  padding: 0 0 0 5px;
}
.dhx_after .dhx_month_head,
.dhx_before .dhx_month_head {
  background-color: #FFFFFF;
  color: #bbbbbb;
}
.dhx_now .dhx_month_head {
  background-color: #FFF3A1;
  font-weight: normal;
}
.dhx_scale_hour_border {
  border-left: 1px dotted #8894A3;
}
.dhx_month_body {
  border-right: 1px solid #CECECE;
  border-bottom: 1px solid #CECECE;
  background-color: #FFFFFF;
}
.dhx_after .dhx_month_body,
.dhx_before .dhx_month_body {
  background-color: #FFFFFF;
}
.dhx_now .dhx_month_body {
  background-color: #FFF3A1;
}
.dhx_now .dhx_month_head {
  background-color: #FFF3A1;
}
.dhx_scale_ignore {
  display: none;
}
.dhx_cal_drag {
  position: absolute;
  z-index: 13;
  background-color: #FFE763;
  border: 1px solid #B7A543;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.dhx_loading {
  position: absolute;
  width: 128px;
  height: 15px;
  background-image: url(imgs/loading.gif);
  z-index: 13;
}
.dhx_multi_day_icon,
.dhx_multi_day {
  background-color: #FFFFFF;
  border-right: 1px solid #CECECE;
}
.dhx_multi_day {
  position: absolute;
  border-top: 1px solid #CECECE;
  background-color: #FFFFFF;
  border-right: none;
  box-shadow: none;
}
.dhx_cal_container_rtl .dhx_multi_day {
  direction: rtl;
}
.dhx_multi_day_icon,
.dhx_multi_day_icon_small {
  background-color: #FFFFFF;
  background-position: center center;
  border-bottom: 1px solid #CECECE;
  border-right: 1px solid #CECECE;
  background-repeat: no-repeat;
}
.dhx_cal_container_rtl .dhx_multi_day_icon,
.dhx_cal_container_rtl .dhx_multi_day_icon_small {
  border-right: 0;
  border-left: 1px solid #CECECE;
}
.dhx_multi_day_icon {
  background-image: url(imgs_dhx_terrace/clock_big.gif);
}
.dhx_multi_day_icon_small {
  background-image: url(imgs_dhx_terrace/clock_small.gif);
}
.dhtmlxLayoutPolyContainer_dhx_skyblue .dhx_cal_container {
  background-color: #d0e5ff;
}
/* left border config option support */
.dhx_scale_hour_border,
.dhx_month_body_border,
.dhx_scale_bar_border,
.dhx_month_head_border {
  border-left: 1px dotted #8894A3;
}
/* export to PDF and iCal buttons start */
.dhx_cal_navline .dhx_cal_export {
  width: 18px;
  height: 18px;
  margin: 2px;
  cursor: pointer;
  top: 0px;
}
.dhx_cal_navline .dhx_cal_export.pdf {
  left: 2px;
  background-image: url('imgs/export_pdf.png');
}
.dhx_cal_navline .dhx_cal_export.ical {
  left: 24px;
  background-image: url('imgs/export_ical.png');
}
/* export to PDF and iCal buttons end */
.dhx_cal_navline.dhx_cal_navline_flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1vw;
  box-sizing: border-box;
  /*.dhx_cal_tab_standalone{
		margin-left: 14px;
	}*/
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab {
  box-sizing: border-box;
  height: 32px;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab_last {
  margin-right: 14px;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab {
  border-left-style: none;
  box-shadow: -1px 0 0 #CECECE;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_date {
  width: auto;
  flex-grow: 1;
}
.dhx_cal_navline.dhx_cal_navline_flex div {
  position: static;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_navbar_row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 1vw;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_prev_button + .dhx_cal_next_button {
  border-left-style: none;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_navbar_rows_container {
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  flex-grow: 1;
  height: 100%;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_line_break,
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_line_spacer {
  display: block;
  width: auto;
  flex-grow: 1;
}
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_today_button,
.dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab_standalone {
  margin: 0 7px;
}
@media only screen and (max-width: 1023px) {
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab.active,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_today_button {
    min-width: 4vw;
    font-size: 1.3vw;
    box-sizing: content-box;
    padding: 0 0.5vw;
    width: auto;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab.active,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_today_button,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_prev_button,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_next_button {
    height: 2.5vw;
    line-height: 2.5vw;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab_last {
    margin-right: 2vw;
  }
}
@media only screen and (max-width: 840px) {
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab.active,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_today_button {
    min-width: 4vw;
    font-size: 1.5vw;
    box-sizing: content-box;
    padding: 0 0.5vw;
    width: auto;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab.active,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_today_button,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_prev_button,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_next_button {
    height: 4vw;
    line-height: 4vw;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab_last {
    margin-right: 1vw;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_date {
    font-size: 2.5vw;
  }
}
@media only screen and (max-width: 480px) {
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab.active,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_today_button {
    font-size: 0.8rem;
    padding: 0 2vw;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_tab.active,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_today_button,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_prev_button,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_next_button {
    height: 6vw;
    line-height: 6vw;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_prev_button,
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_next_button {
    width: 2rem;
  }
  .dhx_cal_navline.dhx_cal_navline_flex .dhx_cal_date {
    font-size: 4vw;
  }
}
.dhx_cal_touch_active {
  overscroll-behavior: none;
}
/*All*/
.dhx_form_repeat,
.dhx_form_repeat input {
  padding: 0;
  margin: 0;
  padding-left: 5px;
  font-family: Tahoma, Verdana;
  font-size: 11px;
  line-height: 24px;
}
.dhx_form_repeat {
  overflow: hidden;
  /*height:115px;*/
  /*background-color: #FFF4B5;*/
  /*border: 1px solid #DCC43E;*/
}
.dhx_cal_light_wide .dhx_form_repeat {
  background-color: transparent;
}
.dhx_repeat_center,
.dhx_repeat_left,
.dhx_repeat_divider,
.dhx_repeat_right {
  height: 115px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.dhx_repeat_center,
.dhx_repeat_left {
  padding: 10px 0 0px 10px;
  float: left;
}
.dhx_repeat_left {
  width: 105px;
}
.dhx_repeat_center {
  width: 345px;
  padding-top: 22px;
}
.dhx_repeat_divider {
  float: left;
  border-left: 1px dotted #DCC43E;
  /*background-color: #DCC43E;*/
  width: 1px;
}
.dhx_repeat_right {
  float: right;
  width: 173px;
  padding: 17px 3px 0px 10px;
}
.dhx_cal_light_rtl .dhx_repeat_center,
.dhx_cal_light_rtl .dhx_repeat_left,
.dhx_cal_light_rtl .dhx_repeat_divider,
.dhx_cal_light_rtl .dhx_repeat_right {
  float: none;
  display: inline-block;
  vertical-align: top;
}
.dhx_cal_light_rtl .dhx_repeat_right {
  margin-right: 0;
}
input.dhx_repeat_text {
  height: 16px;
  width: 27px;
  margin: 0 4px 0 4px;
  line-height: 18px;
  padding: 0 0 0 2px;
}
.dhx_cal_light_rtl input.dhx_repeat_text {
  padding: 0 2px 0 0;
}
.dhx_form_repeat select {
  height: 20px;
  width: 87px;
  padding: 0 0 0 2px;
  margin: 0 4px 0 4px;
}
.dhx_cal_light_rtl .dhx_form_repeat select {
  padding: 0 2px 0 0;
}
input.dhx_repeat_date {
  height: 18px;
  width: 80px;
  padding: 0 0 0 2px;
  margin: 0 4px 0 4px;
  background-repeat: no-repeat;
  background-position: 64px 0;
  border: 1px #7f9db9 solid;
  line-height: 18px;
}
.dhx_cal_light_rtl input.dhx_repeat_date {
  padding: 0 2px 0 0;
}
input[type="radio"].dhx_repeat_radio {
  margin: 5px 4px 0 0;
  display: inline-block;
  position: relative;
  top: 2px;
}
.dhx_cal_light_rtl input[type="radio"].dhx_repeat_radio {
  margin: 5px 0 0 4px;
}
input.dhx_repeat_checkbox {
  margin: 4px 4px 0 0;
}
.dhx_repeat_days td {
  padding-right: 5px;
}
.dhx_repeat_days label {
  font-size: 10px;
}
.dhx_custom_button {
  width: 90px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  border-radius: 4px;
}
.dhx_custom_button_recurring {
  background-image: url(./imgs_dhx_terrace/but_repeat.gif);
  background-position: -5px 20px;
  width: 20px;
  margin-right: 10px;
}
/* increase width of lightbox */
.dhx_cal_light_rec {
  width: 640px;
}
.dhx_cal_light_rec .dhx_cal_larea {
  width: 632px;
}
.dhx_cal_light_rec.dhx_cal_light_wide {
  width: 816px;
}
.dhx_cal_light_rec.dhx_cal_light_wide .dhx_cal_larea {
  width: 808px;
}
.dhx_cal_event .dhx_header,
.dhx_cal_event.dhx_cal_select_menu .dhx_footer {
  display: none;
}
.dhx_cal_event.dhx_cal_editor {
  border: 1px solid transparent;
}
/*.dhx_cal_editor {
	font-size: 12px;
	font-family: Arial, sans-serif;
}*/
div.dhx_menu_head,
div.dhx_menu_icon {
  background-image: url(imgs_dhx_terrace/controls.png);
}
/* event end */
/* navigation start */
.dhx_cal_tab.active {
  text-shadow: 0px 1px 0px white;
}
.dhx_cal_tab_standalone {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px!important;
  padding: 0 5px;
}
/* navigation End */
/* lightbox start */
.dhx_cal_larea {
  margin-left: 0;
}
.dhx_cal_larea {
  border: 1px solid transparent;
}
.dhx_cal_lsection,
.dhx_cal_light_wide .dhx_cal_lsection .dhx_fullday,
.dhx_cal_lsection .dhx_fullday {
  color: #747473;
}
.dhx_cal_light {
  border: 1px solid #CECECE;
}
.dhx_section_time {
  background-color: transparent;
}
.dhx_save_btn,
.dhx_cancel_btn,
.dhx_delete_btn,
.dhx_btn_set div:first-child {
  display: none;
}
.dhx_cal_ltitle span {
  float: left;
}
.dhx_cal_light_rtl .dhx_cal_ltitle span {
  float: none;
}
.dhx_mark {
  display: none;
}
.dhx_close_icon {
  float: right;
  width: 9px;
  height: 9px;
  background: url(imgs_dhx_terrace/close_icon.png) no-repeat center center;
  padding: 10px;
  margin-top: 1px;
}
.dhx_cal_light_wide .dhx_cal_ltext.dhx_cal_template {
  line-height: 22px;
}
.dhx_cal_ltext textarea {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
/* lightbox end */
/* minicalendar */
.dhx_cal_container.dhx_mini_calendar {
  box-sizing: border-box;
  border: 1px solid #CECECE;
  box-shadow: 2px 2px 5px #CCC;
  border-radius: 3px;
}
.dhx_mini_calendar .dhx_year_month {
  border: 1px solid #CECECE;
  font-family: Arial;
}
.dhx_mini_calendar .dhx_month_head,
.dhx_mini_calendar .dhx_year_month,
.dhx_mini_calendar .dhx_month_body,
.dhx_mini_calendar .dhx_scale_bar,
.dhx_mini_calendar .dhx_year_body {
  border-color: transparent;
}
.dhx_mini_calendar .dhx_year_body {
  padding-top: 1px;
}
.dhx_mini_calendar .dhx_scale_bar {
  border-width: 0;
}
.dhx_mini_calendar .dhx_year_week {
  border-bottom: 1px solid #CECECE;
  padding-top: 1px;
}
.dhx_mini_calendar .dhx_month_head {
  padding-right: 0;
  margin-right: 1px;
  text-align: center;
}
.dhx_mini_calendar .dhx_cal_prev_button,
.dhx_mini_calendar .dhx_cal_next_button {
  border: 0;
  height: 20px;
}
/* minicalendar end */
.dhx_cal_navline div.dhx_minical_icon {
  left: 210px;
  top: 14px;
  width: 30px;
  height: 30px;
  background-position: 3px 5px;
}
/* timeline */
.dhx_second_scale_bar {
  border-bottom: 1px solid #CECECE;
}
/* timeline end */
/* recurring */
.dhx_repeat_divider {
  border-left: 1px solid #CECECE;
}
.dhx_custom_button {
  background-color: white;
  border: 1px solid #CECECE;
  color: #747473;
}
/* recurring end */
/* agenda */
.dhx_v_border,
.dhx_agenda_line div {
  border-right: 1px solid #CECECE;
}
.dhx_cal_container_rtl .dhx_v_border,
.dhx_cal_container_rtl .dhx_agenda_line div {
  border-right: 0;
  border-left: 1px solid #CECECE;
}
/* agenda end */
/* year */
.dhx_year_month {
  border: 1px solid #CECECE;
}
.dhx_scale_bar_last {
  border-right: 1px solid #CECECE;
}
.dhx_year_body {
  border-left: 1px solid #CECECE;
}
/* year end */
/* expand */
.dhx_expand_icon {
  top: -3px;
}
/* expand end */
/* units view */
.dhx_cal_header .dhx_cal_next_button,
.dhx_cal_header .dhx_cal_prev_button {
  width: 20px;
  height: 20px;
  top: 0px !important;
  border: 0;
}
.dhx_cal_header .dhx_cal_next_button {
  right: 1px !important;
  border-left: 1px solid #CECECE;
}
.dhx_cal_header .dhx_cal_prev_button {
  left: 1px !important;
  border-right: 1px solid #CECECE;
}
.dhx_cal_tab,
.dhx_cal_date,
.dhx_cal_today_button,
.dhx_cal_prev_button,
.dhx_cal_next_button {
  line-height: 30px;
}
/* units view end */
/* map view */
.dhx_map_line .headline_date,
.dhx_map_line .headline_description {
  border: 0;
}
.dhx_map_line .headline_date {
  border-right: 1px solid #CECECE;
}
/* map view end */
/* tooltip start */
.dhtmlXTooltip.tooltip {
  border-left: 1px solid #CECECE;
  border-top: 1px solid #CECECE;
  color: #747473;
  font-size: 12px;
  line-height: 16px;
}
/* tooltip end */
/* week agenda start */
.dhx_wa_scale_bar {
  border-top: 1px solid #CECECE;
  border-bottom: 1px solid #CECECE;
}
.dhx_wa_column_last .dhx_wa_day_cont {
  border-left: 1px solid #CECECE;
}
.dhx_wa_ev_body {
  border-bottom: 1px solid #CECECE;
}
.dhx_wa_scale_bar {
  background-color: #f0ede7;
}
.dhx_wa_ev_body.dhx_cal_event_selected {
  background-color: #fff3a1;
  color: #362d26;
}
.dhx_wa_dnd {
  background-color: #fddb93 !important;
  color: #747473 !important;
  border: 1px solid #ccb177;
}
/* week agenda end */
/* readonly start */
.dhx_text_disabled {
  color: #2E2E2E;
}
.dhx_cal_ltext .dhx_text_disabled {
  line-height: 22px;
}
/* readonly end */
/* grid view start */
.dhx_grid_v_border {
  border-right-color: #CECECE;
}
.dhx_cal_container_rtl .dhx_grid_v_border {
  border-left-color: #CECECE;
}
/* grid view end*/
/* left border support */
.dhx_scale_hour_border,
.dhx_month_body_border,
.dhx_scale_bar_border,
.dhx_month_head_border {
  border-left: 1px solid #CECECE;
}
/* export to PDF and iCal buttons start */
.dhx_cal_navline .dhx_cal_export {
  width: 32px;
  height: 32px;
  margin: 2px;
  cursor: pointer;
  top: 12px;
}
.dhx_cal_navline .dhx_cal_export.pdf {
  left: auto;
  right: 249px;
  background-image: url('imgs_dhx_terrace/export_pdf.png');
}
.dhx_cal_navline .dhx_cal_export.ical {
  left: auto;
  right: 210px;
  background-image: url('imgs_dhx_terrace/export_ical.png');
}
/* export to PDF and iCal buttons end */
/* minicalendar */
.dhx_mini_calendar {
  padding: 5px;
}
.dhx_mini_calendar .dhx_year_event,
.dhx_mini_calendar .dhx_calendar_click {
  border-radius: 7px;
}
.dhx_mini_calendar .dhx_month_head {
  margin: 2px 2px;
}
.dhx_mini_calendar .dhx_year_month {
  line-height: 20px;
  height: 25px;
  font-size: 14px;
}
.dhx_mini_calendar .dhx_cal_prev_button {
  top: 8px !important;
}
.dhx_mini_calendar .dhx_cal_next_button {
  top: 8px !important;
}
