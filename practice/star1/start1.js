/**
 * 1.1 計数理解テスト：四則逆算　専用メソッド
 * 　　選択数 	5
 * 　　制限時間 9分
 * 　　問題数		50問
 **/

// 初期値
var start 		= new Date();
var hour 			= 0;
var min 			= 0;
var sec 			= 0;
var now 			= 0;
var datet 		= 0;
var answer1 	= new Object();
var answer2 	= new Object();
var answer3 	= new Object();
var answer4 	= new Object();
var answer5 	= new Object();
var question	= Array();
var answer		= Array();

// 経過時間の解析
function disp(){
	now 	= new Date();
	datet = parseInt((now.getTime() - start.getTime()) / 1000);
	hour 	= parseInt(datet / 3600);
	min 	= parseInt(datet / 60);
	sec 	= datet % 60;
	// 数値が1桁の場合、頭に0を付けて2桁で表示する指定
	if ( hour < 10 ) {
		hour = "0" + hour;
	}
	if ( min < 10 ) {
		min = "0" + min;
	}
	if ( sec < 10 ) {
		sec = "0" + sec;
	}
	// テキストフィールドにデータを渡す処理
	document.startForm.nowTime.value = now.getTime();
	document.startForm.startTime.value = start.getTime();
	// 制限時間の設定
	if ( datet < 540 ) {
		setTimeout( "disp()", 1000 );
	} else {
		msg();
	}
}

// 制限時間
function msg() {
	alert( "制限時間です！" );
	return;
}

// テスト開始
function startWebTest() {
	disp();
	document.startForm.submit();
	return;
}

// 選択肢情報
function answerData() {
	// 選択肢１番目
	this.answer1[1] 	= "8";
	this.answer1[2] 	= "10.4";
	this.answer1[3] 	= "3.2";
	this.answer1[4] 	= "3";
	this.answer1[5] 	= "6";
	this.answer1[6] 	= "7";
	this.answer1[7] 	= "129";
	this.answer1[8] 	= "10";
	this.answer1[9] 	= "1/2";
	this.answer1[10] 	= "2/35";
	this.answer1[11] 	= "1/3";
	this.answer1[12] 	= "5％";
	this.answer1[13] 	= "10.5％";
	this.answer1[14] 	= "55";
	this.answer1[15] 	= "2";
	this.answer1[16] 	= "1/4";
	this.answer1[17] 	= "4";
	this.answer1[18] 	= "90";
	this.answer1[19] 	= "6/7";
	this.answer1[20] 	= "2";
	this.answer1[21] 	= "1.2";
	this.answer1[22] 	= "42";
	this.answer1[23] 	= "1";
	this.answer1[24] 	= "40";
	this.answer1[25] 	= "5％";
	this.answer1[26] 	= "1/8";
	this.answer1[27] 	= "32";
	this.answer1[28] 	= "1482";
	this.answer1[29] 	= "40";
	this.answer1[30] 	= "2";
	this.answer1[31] 	= "18";
	this.answer1[32] 	= "1/3";
	this.answer1[33] 	= "1";
	this.answer1[34] 	= "1/11";
	this.answer1[35] 	= "7";
	this.answer1[36] 	= "1";
	this.answer1[37] 	= "40";
	this.answer1[38] 	= "1";
	this.answer1[39] 	= "5％";
	this.answer1[40] 	= "18.2";
	this.answer1[41] 	= "8";
	this.answer1[42] 	= "8";
	this.answer1[43] 	= "3/32";
	this.answer1[44] 	= "32";
	this.answer1[45] 	= "1/2";
	this.answer1[46] 	= "3";
	this.answer1[47] 	= "3";
	this.answer1[48] 	= "2";
	this.answer1[49] 	= "2/4";
	this.answer1[50] 	= "1";
	this.answer1[51] 	= "1";
	this.answer1[52] 	= "7";
	this.answer1[53] 	= "1/2";
	this.answer1[54] 	= "46";
	this.answer1[55] 	= "1404";
	this.answer1[56] 	= "1/11";
	this.answer1[57] 	= "2％";
	this.answer1[58] 	= "7％";
	this.answer1[59] 	= "1.75";
	this.answer1[60] 	= "360";
	this.answer1[61] 	= "0.3";
	this.answer1[62] 	= "20";
	this.answer1[63] 	= "0.4";
	this.answer1[64] 	= "10";
	this.answer1[65] 	= "0.5";
	this.answer1[66] 	= "2/3";
	this.answer1[67] 	= "2";
	this.answer1[68] 	= "1/4";
	this.answer1[69] 	= "1/3";
	this.answer1[70] 	= "35";
	this.answer1[71] 	= "2";
	this.answer1[72] 	= "1/2";
	this.answer1[73] 	= "15";
	this.answer1[74] 	= "25";
	this.answer1[75] 	= "4";
	this.answer1[76] 	= "1/4";
	this.answer1[77] 	= "1/2";
	this.answer1[78] 	= "11/28";
	this.answer1[79] 	= "30％";
	this.answer1[80] 	= "219";
	this.answer1[81] 	= "2";
	this.answer1[82] 	= "5";
	this.answer1[83] 	= "3";
	this.answer1[84] 	= "6％";
	this.answer1[85] 	= "25％";
	this.answer1[86] 	= "7/60";
	this.answer1[87] 	= "5/8";
	this.answer1[88] 	= "18";
	this.answer1[89] 	= "30";
	this.answer1[90] 	= "2";
	this.answer1[91] 	= "30％";
	this.answer1[92] 	= "1/4";
	this.answer1[93] 	= "10";
	this.answer1[94] 	= "2/3";
	this.answer1[95] 	= "16";
	this.answer1[96] 	= "24";
	this.answer1[97] 	= "24";
	this.answer1[98] 	= "1/3";
	this.answer1[99] 	= "2/5";
	this.answer1[100] = "10";

	// 選択肢２番目
	this.answer2[1] 	= "16";
	this.answer2[2] 	= "19.4";
	this.answer2[3] 	= "3.3";
	this.answer2[4] 	= "120";
	this.answer2[5] 	= "12";
	this.answer2[6] 	= "8";
	this.answer2[7] 	= "172";
	this.answer2[8] 	= "12";
	this.answer2[9] 	= "1/3";
	this.answer2[10] 	= "3/35";
	this.answer2[11] 	= "3/7";
	this.answer2[12] 	= "10％";
	this.answer2[13] 	= "11％";
	this.answer2[14] 	= "66";
	this.answer2[15] 	= "3";
	this.answer2[16] 	= "3/4";
	this.answer2[17] 	= "6";
	this.answer2[18] 	= "94";
	this.answer2[19] 	= "7/6";
	this.answer2[20] 	= "3";
	this.answer2[21] 	= "1.4";
	this.answer2[22] 	= "44";
	this.answer2[23] 	= "2";
	this.answer2[24] 	= "50";
	this.answer2[25] 	= "6％";
	this.answer2[26] 	= "3/8";
	this.answer2[27] 	= "33";
	this.answer2[28] 	= "1539";
	this.answer2[29] 	= "48";
	this.answer2[30] 	= "3";
	this.answer2[31] 	= "21";
	this.answer2[32] 	= "1/2";
	this.answer2[33] 	= "2";
	this.answer2[34] 	= "2/11";
	this.answer2[35] 	= "8";
	this.answer2[36] 	= "2";
	this.answer2[37] 	= "56";
	this.answer2[38] 	= "1/4";
	this.answer2[39] 	= "10％";
	this.answer2[40] 	= "20.4";
	this.answer2[41] 	= "10";
	this.answer2[42] 	= "10";
	this.answer2[43] 	= "7/32";
	this.answer2[44] 	= "33";
	this.answer2[45] 	= "1/3";
	this.answer2[46] 	= "6";
	this.answer2[47] 	= "4";
	this.answer2[48] 	= "4";
	this.answer2[49] 	= "3/4";
	this.answer2[50] 	= "2";
	this.answer2[51] 	= "5";
	this.answer2[52] 	= "8";
	this.answer2[53] 	= "1/3";
	this.answer2[54] 	= "48";
	this.answer2[55] 	= "1408";
	this.answer2[56] 	= "2/13";
	this.answer2[57] 	= "4％";
	this.answer2[58] 	= "9％";
	this.answer2[59] 	= "1.8";
	this.answer2[60] 	= "380";
	this.answer2[61] 	= "0.4";
	this.answer2[62] 	= "25";
	this.answer2[63] 	= "0.5";
	this.answer2[64] 	= "11";
	this.answer2[65] 	= "0.6";
	this.answer2[66] 	= "5/4";
	this.answer2[67] 	= "3";
	this.answer2[68] 	= "1/6";
	this.answer2[69] 	= "1/4";
	this.answer2[70] 	= "40";
	this.answer2[71] 	= "2/3";
	this.answer2[72] 	= "3/2";
	this.answer2[73] 	= "18";
	this.answer2[74] 	= "26";
	this.answer2[75] 	= "5";
	this.answer2[76] 	= "3/4";
	this.answer2[77] 	= "1/3";
	this.answer2[78] 	= "15/32";
	this.answer2[79] 	= "35％";
	this.answer2[80] 	= "2/21";
	this.answer2[81] 	= "3";
	this.answer2[82] 	= "6";
	this.answer2[83] 	= "3.5";
	this.answer2[84] 	= "6.5％";
	this.answer2[85] 	= "40％";
	this.answer2[86] 	= "9/60";
	this.answer2[87] 	= "7/8";
	this.answer2[88] 	= "20";
	this.answer2[89] 	= "35";
	this.answer2[90] 	= "2.5";
	this.answer2[91] 	= "35％";
	this.answer2[92] 	= "1/5";
	this.answer2[93] 	= "10.5";
	this.answer2[94] 	= "5/4";
	this.answer2[95] 	= "18";
	this.answer2[96] 	= "25";
	this.answer2[97] 	= "25";
	this.answer2[98] 	= "2/3";
	this.answer2[99] 	= "4/5";
	this.answer2[100] = "11";

	// 選択肢３番目
	this.answer3[1] 	= "24";
	this.answer3[2] 	= "20.4";
	this.answer3[3] 	= "3.4";
	this.answer3[4] 	= "269";
	this.answer3[5] 	= "18";
	this.answer3[6] 	= "9";
	this.answer3[7] 	= "258";
	this.answer3[8] 	= "13";
	this.answer3[9] 	= "1/4";
	this.answer3[10] 	= "6/35";
	this.answer3[11] 	= "7/24";
	this.answer3[12] 	= "15％";
	this.answer3[13] 	= "11.5％";
	this.answer3[14] 	= "77";
	this.answer3[15] 	= "4";
	this.answer3[16] 	= "3/5";
	this.answer3[17] 	= "8";
	this.answer3[18] 	= "96";
	this.answer3[19] 	= "7/8";
	this.answer3[20] 	= "4";
	this.answer3[21] 	= "1.6";
	this.answer3[22] 	= "46";
	this.answer3[23] 	= "3";
	this.answer3[24] 	= "60";
	this.answer3[25] 	= "7％";
	this.answer3[26] 	= "2/9";
	this.answer3[27] 	= "34.5";
	this.answer3[28] 	= "1566";
	this.answer3[29] 	= "54";
	this.answer3[30] 	= "4";
	this.answer3[31] 	= "23";
	this.answer3[32] 	= "1";
	this.answer3[33] 	= "3";
	this.answer3[34] 	= "3/11";
	this.answer3[35] 	= "9";
	this.answer3[36] 	= "3";
	this.answer3[37] 	= "66";
	this.answer3[38] 	= "1/3";
	this.answer3[39] 	= "15％";
	this.answer3[40] 	= "23.2";
	this.answer3[41] 	= "12";
	this.answer3[42] 	= "－4";
	this.answer3[43] 	= "4/45";
	this.answer3[44] 	= "34";
	this.answer3[45] 	= "3/4";
	this.answer3[46] 	= "9";
	this.answer3[47] 	= "5";
	this.answer3[48] 	= "6";
	this.answer3[49] 	= "5/4";
	this.answer3[50] 	= "3";
	this.answer3[51] 	= "10";
	this.answer3[52] 	= "9";
	this.answer3[53] 	= "1/4";
	this.answer3[54] 	= "50";
	this.answer3[55] 	= "1464";
	this.answer3[56] 	= "1/18";
	this.answer3[57] 	= "6％";
	this.answer3[58] 	= "10％";
	this.answer3[59] 	= "2";
	this.answer3[60] 	= "400";
	this.answer3[61] 	= "0.45";
	this.answer3[62] 	= "30";
	this.answer3[63] 	= "0.6";
	this.answer3[64] 	= "12";
	this.answer3[65] 	= "0.7";
	this.answer3[66] 	= "4/5";
	this.answer3[67] 	= "4";
	this.answer3[68] 	= "1/7";
	this.answer3[69] 	= "3/4";
	this.answer3[70] 	= "50";
	this.answer3[71] 	= "3";
	this.answer3[72] 	= "3/4";
	this.answer3[73] 	= "22.5";
	this.answer3[74] 	= "28";
	this.answer3[75] 	= "6";
	this.answer3[76] 	= "2/5";
	this.answer3[77] 	= "2";
	this.answer3[78] 	= "19/32";
	this.answer3[79] 	= "40％";
	this.answer3[80] 	= "2/23";
	this.answer3[81] 	= "4";
	this.answer3[82] 	= "7";
	this.answer3[83] 	= "4";
	this.answer3[84] 	= "7％";
	this.answer3[85] 	= "45％";
	this.answer3[86] 	= "11/60";
	this.answer3[87] 	= "4/9";
	this.answer3[88] 	= "22";
	this.answer3[89] 	= "38";
	this.answer3[90] 	= "3";
	this.answer3[91] 	= "40％";
	this.answer3[92] 	= "1/6";
	this.answer3[93] 	= "11";
	this.answer3[94] 	= "4/5";
	this.answer3[95] 	= "19";
	this.answer3[96] 	= "26";
	this.answer3[97] 	= "26";
	this.answer3[98] 	= "1/4";
	this.answer3[99] 	= "5/6";
	this.answer3[100] = "11.5";

	// 選択肢４番目
	this.answer4[1] 	= "32";
	this.answer4[2] 	= "22.4";
	this.answer4[3] 	= "3.5";
	this.answer4[4] 	= "452";
	this.answer4[5] 	= "24";
	this.answer4[6] 	= "10";
	this.answer4[7] 	= "301";
	this.answer4[8] 	= "14";
	this.answer4[9] 	= "1/5";
	this.answer4[10] 	= "16/35";
	this.answer4[11] 	= "21";
	this.answer4[12] 	= "25％";
	this.answer4[13] 	= "12.5％";
	this.answer4[14] 	= "88";
	this.answer4[15] 	= "5";
	this.answer4[16] 	= "4/5";
	this.answer4[17] 	= "12";
	this.answer4[18] 	= "98";
	this.answer4[19] 	= "8/7";
	this.answer4[20] 	= "5";
	this.answer4[21] 	= "2.0";
	this.answer4[22] 	= "54";
	this.answer4[23] 	= "4";
	this.answer4[24] 	= "70";
	this.answer4[25] 	= "8％";
	this.answer4[26] 	= "3/9";
	this.answer4[27] 	= "35.5";
	this.answer4[28] 	= "1600";
	this.answer4[29] 	= "64";
	this.answer4[30] 	= "5";
	this.answer4[31] 	= "34";
	this.answer4[32] 	= "2";
	this.answer4[33] 	= "11/3";
	this.answer4[34] 	= "3/22";
	this.answer4[35] 	= "10";
	this.answer4[36] 	= "4";
	this.answer4[37] 	= "78";
	this.answer4[38] 	= "1/2";
	this.answer4[39] 	= "18％";
	this.answer4[40] 	= "34.6";
	this.answer4[41] 	= "14";
	this.answer4[42] 	= "－12";
	this.answer4[43] 	= "7/45";
	this.answer4[44] 	= "35";
	this.answer4[45] 	= "2/5";
	this.answer4[46] 	= "12";
	this.answer4[47] 	= "6";
	this.answer4[48] 	= "8";
	this.answer4[49] 	= "7/4";
	this.answer4[50] 	= "4";
	this.answer4[51] 	= "12";
	this.answer4[52] 	= "10";
	this.answer4[53] 	= "1/5";
	this.answer4[54] 	= "52";
	this.answer4[55] 	= "1502";
	this.answer4[56] 	= "2/21";
	this.answer4[57] 	= "8％";
	this.answer4[58] 	= "12％";
	this.answer4[59] 	= "2.15";
	this.answer4[60] 	= "410";
	this.answer4[61] 	= "0.5";
	this.answer4[62] 	= "35";
	this.answer4[63] 	= "0.7";
	this.answer4[64] 	= "13";
	this.answer4[65] 	= "0.8";
	this.answer4[66] 	= "7/6";
	this.answer4[67] 	= "5";
	this.answer4[68] 	= "1/8";
	this.answer4[69] 	= "2/5";
	this.answer4[70] 	= "55";
	this.answer4[71] 	= "4/5";
	this.answer4[72] 	= "4/5";
	this.answer4[73] 	= "23.5";
	this.answer4[74] 	= "29";
	this.answer4[75] 	= "7";
	this.answer4[76] 	= "3/5";
	this.answer4[77] 	= "5/2";
	this.answer4[78] 	= "11/26";
	this.answer4[79] 	= "50％";
	this.answer4[80] 	= "2/25";
	this.answer4[81] 	= "5";
	this.answer4[82] 	= "8";
	this.answer4[83] 	= "4.5";
	this.answer4[84] 	= "7.5％";
	this.answer4[85] 	= "55％";
	this.answer4[86] 	= "13/60";
	this.answer4[87] 	= "7/16";
	this.answer4[88] 	= "24";
	this.answer4[89] 	= "40";
	this.answer4[90] 	= "3.5";
	this.answer4[91] 	= "45％";
	this.answer4[92] 	= "1/7";
	this.answer4[93] 	= "11.5";
	this.answer4[94] 	= "7/5";
	this.answer4[95] 	= "20";
	this.answer4[96] 	= "27";
	this.answer4[97] 	= "27";
	this.answer4[98] 	= "3/4";
	this.answer4[99] 	= "7/6";
	this.answer4[100] = "12";

	// 選択肢５番目
	this.answer5[1] 	= "34";
	this.answer5[2] 	= "24.4";
	this.answer5[3] 	= "3.6";
	this.answer5[4] 	= "896";
	this.answer5[5] 	= "36";
	this.answer5[6] 	= "11";
	this.answer5[7] 	= "344";
	this.answer5[8] 	= "15";
	this.answer5[9] 	= "1/6";
	this.answer5[10] 	= "21/35";
	this.answer5[11] 	= "42";
	this.answer5[12] 	= "30％";
	this.answer5[13] 	= "13％";
	this.answer5[14] 	= "99";
	this.answer5[15] 	= "6";
	this.answer5[16] 	= "1/6";
	this.answer5[17] 	= "16";
	this.answer5[18] 	= "102";
	this.answer5[19] 	= "8/9";
	this.answer5[20] 	= "6";
	this.answer5[21] 	= "2.4";
	this.answer5[22] 	= "68";
	this.answer5[23] 	= "5";
	this.answer5[24] 	= "80";
	this.answer5[25] 	= "20％";
	this.answer5[26] 	= "5/12";
	this.answer5[27] 	= "37.5";
	this.answer5[28] 	= "1625";
	this.answer5[29] 	= "70";
	this.answer5[30] 	= "6";
	this.answer5[31] 	= "45";
	this.answer5[32] 	= "5";
	this.answer5[33] 	= "7/2";
	this.answer5[34] 	= "5/22";
	this.answer5[35] 	= "11";
	this.answer5[36] 	= "5";
	this.answer5[37] 	= "99";
	this.answer5[38] 	= "3/4";
	this.answer5[39] 	= "20％";
	this.answer5[40] 	= "45.8";
	this.answer5[41] 	= "16";
	this.answer5[42] 	= "－18";
	this.answer5[43] 	= "5/56";
	this.answer5[44] 	= "36";
	this.answer5[45] 	= "7/8";
	this.answer5[46] 	= "15";
	this.answer5[47] 	= "7";
	this.answer5[48] 	= "10";
	this.answer5[49] 	= "9/4";
	this.answer5[50] 	= "5";
	this.answer5[51] 	= "15";
	this.answer5[52] 	= "11";
	this.answer5[53] 	= "1/8";
	this.answer5[54] 	= "56";
	this.answer5[55] 	= "1524";
	this.answer5[56] 	= "3/23";
	this.answer5[57] 	= "10％";
	this.answer5[58] 	= "13％";
	this.answer5[59] 	= "2.25";
	this.answer5[60] 	= "420";
	this.answer5[61] 	= "0.55";
	this.answer5[62] 	= "40";
	this.answer5[63] 	= "0.8";
	this.answer5[64] 	= "14";
	this.answer5[65] 	= "0.9";
	this.answer5[66] 	= "8/7";
	this.answer5[67] 	= "6";
	this.answer5[68] 	= "1/9";
	this.answer5[69] 	= "3/5";
	this.answer5[70] 	= "60";
	this.answer5[71] 	= "5";
	this.answer5[72] 	= "6/5";
	this.answer5[73] 	= "25";
	this.answer5[74] 	= "30";
	this.answer5[75] 	= "8";
	this.answer5[76] 	= "4/7";
	this.answer5[77] 	= "3";
	this.answer5[78] 	= "13/36";
	this.answer5[79] 	= "55％";
	this.answer5[80] 	= "2/27";
	this.answer5[81] 	= "6";
	this.answer5[82] 	= "9";
	this.answer5[83] 	= "5";
	this.answer5[84] 	= "8％";
	this.answer5[85] 	= "60％";
	this.answer5[86] 	= "19/60";
	this.answer5[87] 	= "9/16";
	this.answer5[88] 	= "26";
	this.answer5[89] 	= "45";
	this.answer5[90] 	= "4";
	this.answer5[91] 	= "50％";
	this.answer5[92] 	= "1/8";
	this.answer5[93] 	= "12";
	this.answer5[94] 	= "8/7";
	this.answer5[95] 	= "21";
	this.answer5[96] 	= "28";
	this.answer5[97] 	= "28";
	this.answer5[98] 	= "1/5";
	this.answer5[99] 	= "6/7";
	this.answer5[100] = "12.5";
	return;
}

// 答え情報
function getCorrectAnswer( n, aid ) {
	rs = "";
	this.answer[1] 		= "4";
	this.answer[2] 		= "2";
	this.answer[3] 		= "1";
	this.answer[4] 		= "5";
	this.answer[5] 		= "2";
	this.answer[6] 		= "4";
	this.answer[7] 		= "3";
	this.answer[8] 		= "1";
	this.answer[9] 		= "2";
	this.answer[10] 	= "4";
	this.answer[11] 	= "3";
	this.answer[12] 	= "4";
	this.answer[13] 	= "4";
	this.answer[14] 	= "3";
	this.answer[15] 	= "4";
	this.answer[16] 	= "3";
	this.answer[17] 	= "5";
	this.answer[18] 	= "2";
	this.answer[19] 	= "2";
	this.answer[20] 	= "5";
	this.answer[21] 	= "3";
	this.answer[22] 	= "1";
	this.answer[23] 	= "4";
	this.answer[24] 	= "5";
	this.answer[25] 	= "1";
	this.answer[26] 	= "2";
	this.answer[27] 	= "5";
	this.answer[28] 	= "2";
	this.answer[29] 	= "4";
	this.answer[30] 	= "1";
	this.answer[31] 	= "3";
	this.answer[32] 	= "3";
	this.answer[33] 	= "1";
	this.answer[34] 	= "3";
	this.answer[35] 	= "3";
	this.answer[36] 	= "3";
	this.answer[37] 	= "3";
	this.answer[38] 	= "4";
	this.answer[39] 	= "5";
	this.answer[40] 	= "3";
	this.answer[41] 	= "1";
	this.answer[42] 	= "4";
	this.answer[43] 	= "2";
	this.answer[44] 	= "5";
	this.answer[45] 	= "4";
	this.answer[46] 	= "3";
	this.answer[47] 	= "5";
	this.answer[48] 	= "2";
	this.answer[49] 	= "4";
	this.answer[50] 	= "5";
	this.answer[51] 	= "2";
	this.answer[52] 	= "4";
	this.answer[53] 	= "1";
	this.answer[54] 	= "2";
	this.answer[55] 	= "1";
	this.answer[56] 	= "4";
	this.answer[57] 	= "2";
	this.answer[58] 	= "4";
	this.answer[59] 	= "5";
	this.answer[60] 	= "5";
	this.answer[61] 	= "3";
	this.answer[62] 	= "1";
	this.answer[63] 	= "2";
	this.answer[64] 	= "3";
	this.answer[65] 	= "5";
	this.answer[66] 	= "2";
	this.answer[67] 	= "5";
	this.answer[68] 	= "4";
	this.answer[69] 	= "4";
	this.answer[70] 	= "3";
	this.answer[71] 	= "3";
	this.answer[72] 	= "2";
	this.answer[73] 	= "5";
	this.answer[74] 	= "5";
	this.answer[75] 	= "1";
	this.answer[76] 	= "2";
	this.answer[77] 	= "1";
	this.answer[78] 	= "5";
	this.answer[79] 	= "4";
	this.answer[80] 	= "2";
	this.answer[81] 	= "2";
	this.answer[82] 	= "3";
	this.answer[83] 	= "5";
	this.answer[84] 	= "1";
	this.answer[85] 	= "2";
	this.answer[86] 	= "4";
	this.answer[87] 	= "2";
	this.answer[88] 	= "5";
	this.answer[89] 	= "2";
	this.answer[90] 	= "3";
	this.answer[91] 	= "4";
	this.answer[92] 	= "3";
	this.answer[93] 	= "1";
	this.answer[94] 	= "3";
	this.answer[95] 	= "2";
	this.answer[96] 	= "2";
	this.answer[97] 	= "5";
	this.answer[98] 	= "2";
	this.answer[99] 	= "4";
	this.answer[100] 	= "5";

	// 答え合わせ
	if ( this.answer[n] == aid ) {
		rs = "<font color=\"#FF0000\">正解</font>";
	} else {
		rs = "不正解";
	}
	return rs;
}

// 選択肢情報の取得
function getAnswer( rid ) {
	answerData();
	document.write( "<input type=\"radio\" name=\"sa\" value=\"1\">"+this.answer1[ rid ]+"<br>\n");
	document.write( "<input type=\"radio\" name=\"sa\" value=\"2\">"+this.answer2[ rid ]+"<br>\n");
	document.write( "<input type=\"radio\" name=\"sa\" value=\"3\">"+this.answer3[ rid ]+"<br>\n");
	document.write( "<input type=\"radio\" name=\"sa\" value=\"4\">"+this.answer4[ rid ]+"<br>\n");
	document.write( "<input type=\"radio\" name=\"sa\" value=\"5\">"+this.answer5[ rid ]+"<br>\n");
	return;
}

// 選択肢情報の取得（既に回答済みで「戻るボタン」処理対応）
function getSelectAnswer( rid, aid ) {
	answerData();
	if ( aid == "1" ) {
		document.write( "<input type=\"radio\" name=\"sa\" value=\"1\" CHECKED>"+this.answer1[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"2\">"+this.answer2[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"3\">"+this.answer3[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"4\">"+this.answer4[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"5\">"+this.answer5[ rid ]+"<br>\n");
	} else if ( aid == "2" ) {
		document.write( "<input type=\"radio\" name=\"sa\" value=\"1\">"+this.answer1[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"2\" CHECKED>"+this.answer2[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"3\">"+this.answer3[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"4\">"+this.answer4[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"5\">"+this.answer5[ rid ]+"<br>\n");
	} else if ( aid == "3" ) {
		document.write( "<input type=\"radio\" name=\"sa\" value=\"1\">"+this.answer1[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"2\">"+this.answer2[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"3\" CHECKED>"+this.answer3[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"4\">"+this.answer4[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"5\">"+this.answer5[ rid ]+"<br>\n");
	} else if ( aid == "4" ) {
		document.write( "<input type=\"radio\" name=\"sa\" value=\"1\">"+this.answer1[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"2\">"+this.answer2[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"3\">"+this.answer3[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"4\" CHECKED>"+this.answer4[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"5\">"+this.answer5[ rid ]+"<br>\n");
	} else if ( aid == "5" ) {
		document.write( "<input type=\"radio\" name=\"sa\" value=\"1\">"+this.answer1[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"2\">"+this.answer2[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"3\">"+this.answer3[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"4\">"+this.answer4[ rid ]+"<br>\n");
		document.write( "<input type=\"radio\" name=\"sa\" value=\"5\" CHECKED>"+this.answer5[ rid ]+"<br>\n");
	}
	return;
}

// 指定の回答を取得
function getAnswerMatch( aname, qid ) {
	ra = "";
	answerData();
	if ( aname == "answer1" ) {
		ra = this.answer1[qid];
	} else if ( aname == "answer2" ) {
		ra = this.answer2[qid];
	} else if ( aname == "answer3" ) {
		ra = this.answer3[qid];
	} else if ( aname == "answer4" ) {
		ra = this.answer4[qid];
	} else {
		ra = this.answer5[qid];
	}
	return ra;
}

// 質問情報
function questionData() {
	this.question[0] 		= "1";
	this.question[1] 		= "2";
	this.question[2] 		= "3";
	this.question[3] 		= "4";
	this.question[4] 		= "5";
	this.question[5] 		= "6";
	this.question[6] 		= "7";
	this.question[7] 		= "8";
	this.question[8] 		= "9";
	this.question[9] 		= "10";
	this.question[10] 	= "11";
	this.question[11] 	= "12";
	this.question[12] 	= "13";
	this.question[13] 	= "14";
	this.question[14] 	= "15";
	this.question[15] 	= "16";
	this.question[16] 	= "17";
	this.question[17] 	= "18";
	this.question[18] 	= "19";
	this.question[19] 	= "20";
	this.question[20] 	= "21";
	this.question[21] 	= "22";
	this.question[22] 	= "23";
	this.question[23] 	= "24";
	this.question[24] 	= "25";
	this.question[25] 	= "26";
	this.question[26] 	= "27";
	this.question[27] 	= "28";
	this.question[28] 	= "29";
	this.question[29] 	= "30";
	this.question[30] 	= "31";
	this.question[31] 	= "32";
	this.question[32] 	= "33";
	this.question[33] 	= "34";
	this.question[34] 	= "35";
	this.question[35] 	= "36";
	this.question[36] 	= "37";
	this.question[37] 	= "38";
	this.question[38] 	= "39";
	this.question[39] 	= "40";
	this.question[40] 	= "41";
	this.question[41] 	= "42";
	this.question[42] 	= "43";
	this.question[43] 	= "44";
	this.question[44] 	= "45";
	this.question[45] 	= "46";
	this.question[46] 	= "47";
	this.question[47] 	= "48";
	this.question[48] 	= "49";
	this.question[49] 	= "50";
	this.question[50] 	= "51";
	this.question[51] 	= "52";
	this.question[52] 	= "53";
	this.question[53] 	= "54";
	this.question[54] 	= "55";
	this.question[55] 	= "56";
	this.question[56] 	= "57";
	this.question[57] 	= "58";
	this.question[58] 	= "59";
	this.question[59] 	= "60";
	this.question[60] 	= "61";
	this.question[61] 	= "62";
	this.question[62] 	= "63";
	this.question[63] 	= "64";
	this.question[64] 	= "65";
	this.question[65] 	= "66";
	this.question[66] 	= "67";
	this.question[67] 	= "68";
	this.question[68] 	= "69";
	this.question[69] 	= "70";
	this.question[70] 	= "71";
	this.question[71] 	= "72";
	this.question[72] 	= "73";
	this.question[73] 	= "74";
	this.question[74] 	= "75";
	this.question[75] 	= "76";
	this.question[76] 	= "77";
	this.question[77] 	= "78";
	this.question[78] 	= "79";
	this.question[79] 	= "80";
	this.question[80] 	= "81";
	this.question[81] 	= "82";
	this.question[82] 	= "83";
	this.question[83] 	= "84";
	this.question[84] 	= "85";
	this.question[85] 	= "86";
	this.question[86] 	= "87";
	this.question[87] 	= "88";
	this.question[88] 	= "89";
	this.question[89] 	= "90";
	this.question[90] 	= "91";
	this.question[91] 	= "92";
	this.question[92] 	= "93";
	this.question[93] 	= "94";
	this.question[94] 	= "95";
	this.question[95] 	= "96";
	this.question[96] 	= "97";
	this.question[97] 	= "98";
	this.question[98] 	= "99";
	this.question[99] 	= "100";
	return;
}

// ランダム処理
function randomData() {
	for( i = 0; i < this.question.length; i++ ) {
		var tmpA, tmpB, rnd;
		rnd		= Math.floor( Math.random() * this.question.length );
		tmpA 	= this.question[i];
		tmpB 	= this.question[rnd];
		this.question[i] 		= tmpB;
		this.question[rnd] 	= tmpA;
	}
	var r = "";
	end = this.question.length;
	end--;
	for( i = 0; i < this.question.length; i++ ) {
		tmp = this.question[i];
		if ( end == i ) {
			r += tmp;
		} else {
			r += tmp.concat(".");
		}
	}
	document.write( "<input type=\"hidden\" name=\"rlist\" value="+r+"><br>\n");
	return;
}
