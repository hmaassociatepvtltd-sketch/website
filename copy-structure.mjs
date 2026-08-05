import fs from 'fs';
import path from 'path';

const src = 'C:\\Users\\PC 03\\.gemini\\antigravity-ide\\brain\\49d530fa-4101-4a0f-88ed-87c741184014\\media__1785757446642.png';
const targetDir = path.join(process.cwd(), 'public', 'assets');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.copyFileSync(src, path.join(targetDir, 'company-structure.png'));

console.log('Successfully copied company-structure.png to public/assets/');
