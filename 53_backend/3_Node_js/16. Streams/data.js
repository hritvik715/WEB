import fs from "fs";

for (let i = 0; i <= 10000; i++) {
  fs.writeFileSync("./data.txt", `${i}\n`, { flag: "a" });
}


//imp-> isse run karne kay baad ek data.txt file generate hui hogi dekho sabse last mey file aai hogi iss folder se bahar