// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let teks1 = "";
  let teks2 = "";
  let teks3 = "";
  let temp = [];
  fs.readFile(file1, "utf8", (err, pesan1) => {
    fs.readFile(file2, "utf8", (err, pesan2) => {
      fs.readFile(file3, "utf8", (err, pesan3) => {
        data = [
          (teks1 = JSON.parse(pesan1)["message"].split(" ")[1]),
          (teks2 = JSON.parse(pesan2)[0]["message"].split(" ")[1]),
          (teks3 = JSON.parse(pesan3)[0]["data"]["message"].split(" ")[1]),
        ];
        temp.push(teks1);
        temp.push(teks2);
        temp.push(teks3);
        fnCallback(err, temp);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
