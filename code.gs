const SS_ID = "1-zEEqdvDaWNiw_qK2ePzyEGa3pk67arDwgAkRhP2Dvk";

function doGet(e) {
  const action = e.parameter.action;
  let result;
  
  if (action === "getNameList") result = getNameList();
  else if (action === "getStaffHistory") result = getStaffHistory(e.parameter.name);
  else if (action === "getStaffHistorySecure") result = getStaffHistorySecure(e.parameter.name, e.parameter.pin);
  else if (action === "processPunch") result = processPunch(e.parameter.name, e.parameter.type);
  else if (action === "generatePDF") result = generateMonthlyPaySlips(e.parameter.targetMonth);
  
  return ContentService.createTextOutput(JSON.stringify(result || {error: "No action"}))
    .setMimeType(ContentService.MimeType.JSON);
}

// 既存の getNameList, getStaffHistory, getStaffHistorySecure, processPunch, generateMonthlyPaySlips はそのまま下に貼り付けてください。
