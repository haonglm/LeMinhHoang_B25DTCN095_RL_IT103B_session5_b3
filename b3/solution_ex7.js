let rawRecord = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

let parts = rawRecord.split("-");
let rawDoctor = parts[0];
let rawDept = parts[1];
let time = parts[2];
let rawRoom = parts[3];

let doctorClean = rawDoctor.replace("BS.", "").replaceAll("_", " ").toLowerCase();
let doctorWords = doctorClean.split(" ");
let doctorName = "";

for (let i = 0; i < doctorWords.length; i++) {
  let word = doctorWords[i];

  let capitalized = word[0].toUpperCase() + word.slice(1);
  doctorName += capitalized + " ";
}
doctorName = doctorName.trim();

let deptClean = rawDept.replaceAll("_", " ").toLowerCase();
let deptWords = deptClean.split(" ");
let department = "";

for (let i = 0; i < deptWords.length; i++) {
  let word = deptWords[i];
  let capitalized = word[0].toUpperCase() + word.slice(1);
  department += capitalized + " ";
}
department = department.trim();

let room = rawRoom.replace("PHONG_", "Phòng ");

console.log(`
========================================
       BẢNG PHÂN CÔNG LỊCH KHÁM
========================================
- Bác sĩ:      ${doctorName}
- Chuyên khoa: ${department}
- Giờ khám:    ${time}
- Phòng:       ${room}
========================================
`);