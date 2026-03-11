function doGet(e) {
  // ตั้งค่า CORS เพื่อให้ GitHub เข้าถึงข้อมูลได้
  const output = JSON.stringify(getData());
  return ContentService.createTextOutput(output)
    .setMimeType(ContentService.MimeType.JSON);
}

function getData() {
  const ssId = '1UGBm-acdlhog4OQe8viWHGikOMJg758Pwv4P5Wgp3sg';
  try {
    const ss = SpreadsheetApp.openById(ssId);
    const sheet = ss.getSheets()[0];
    const data = sheet.getDataRange().getDisplayValues();
    return data;
  } catch (err) {
    return ["Error: " + err.toString()];
  }
}

// **สำคัญมาก**: 
// 1. กด "Deploy" > "New Deployment"
// 2. เลือกประเภทเป็น "Web App"
// 3. ตั้งค่า "Who has access" เป็น "Anyone" (เพื่อให้ GitHub ดึงข้อมูลได้โดยไม่ต้อง Login)
// 4. ก๊อปปี้ "Web App URL" ไว้เพื่อนำไปใส่ในไฟล์ HTML
