import fs from 'node:fs';import path from 'node:path';import Interactions from './components/Interactions';
export default function Home(){const html=fs.readFileSync(path.join(process.cwd(),'app/content/home.html'),'utf8');return <><div dangerouslySetInnerHTML={{__html:html}}/><Interactions/></>}
