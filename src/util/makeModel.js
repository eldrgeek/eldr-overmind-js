const makeModel = (srcFile, moduleName) => {
  const fs = require('fs');
  let file = fs.readFileSync(file).toString();
  console.log(file);

  let modFile = file.replace(/ZModel/gm, moduleName);
  console.log(modFile);
};

makeModel('/src/components/ZModel.jsx', 'myFile');
