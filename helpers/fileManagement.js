import fs from "fs";

const outputFile = "./output/output.json";

export const saveDB = (data) => {
  fs.writeFileSync(outputFile, JSON.stringify(data));
};

export const readSingleFile = (file2Read) => {
  if (!fs.existsSync(file2Read)) {
    return null;
  }
  const readingFile = fs.readFileSync(file2Read, "utf8");
  const fileRead = JSON.parse(readingFile);

  return fileRead;
};
