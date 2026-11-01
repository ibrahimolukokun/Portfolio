import fs from 'node:fs/promises';
import sharp from 'sharp';
const photo=await fs.readFile('src/app/icon.png');
// Crop in SVG coordinates, retaining the original photograph unchanged.
const svg=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="46 65 420 420"><image width="512" height="512" href="data:image/png;base64,${photo.toString('base64')}"/></svg>`);
const render=size=>sharp(svg).resize(size,size).png().toBuffer();
await fs.writeFile('app/icon.png',await render(512));
await fs.writeFile('app/apple-icon.png',await render(180));
const sizes=[16,32,48,64,128,256],images=await Promise.all(sizes.map(render));
const header=Buffer.alloc(6+16*sizes.length);header.writeUInt16LE(1,2);header.writeUInt16LE(sizes.length,4);
let offset=header.length;
images.forEach((data,i)=>{const at=6+16*i,size=sizes[i];header[at]=size===256?0:size;header[at+1]=size===256?0:size;header.writeUInt16LE(1,at+4);header.writeUInt16LE(32,at+6);header.writeUInt32LE(data.length,at+8);header.writeUInt32LE(offset,at+12);offset+=data.length;});
await fs.writeFile('app/favicon.ico',Buffer.concat([header,...images]));
console.log('Generated portrait icons: 16, 32, 48, 64, 128, 180, 256 and 512px.');
