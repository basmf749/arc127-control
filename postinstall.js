const fs=require('fs');fs.writeFileSync(__dirname+'/../ARC129_CONTROL_INSTALLED.txt','ARC129_CONTROL_INSTALLED '+new Date().toISOString()+'\n');console.log('ARC129 control postinstall');
