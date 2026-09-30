// Gera as capas leves da grade de projetos a partir da imagem principal de cada projeto.
// Páginas compridas são recortadas do topo: 16:10 por padrão, 4:5 nos projetos de PORTRAIT. Uso: node scripts/gerar-capas.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const src = fs.readFileSync(path.join(root, 'src/data/projects.ts'), 'utf8');
const outDir = path.join(root, 'public/work');
fs.mkdirSync(outDir, { recursive: true });

const entries = [];
const re = /^    id: (\d+),[\s\S]*?^    img: '([^']+)',[\s\S]*?^  \},/gm;
for (const m of src.matchAll(re)) {
  const block = m[0];
  const pos = block.match(/objectPosition: '([^']+)'/)?.[1] ?? 'top';
  entries.push({ id: Number(m[1]), img: m[2], pos });
}

const WIDTH = 1200;
// Projetos cuja capa funciona melhor em retrato.
const PORTRAIT = new Set([12]);
const covers = {};

for (const { id, img, pos } of entries) {
  const file = path.join(root, 'public', img);
  const meta = await sharp(file).metadata();
  const ratio = meta.width / meta.height;
  let pipeline = sharp(file);

  if (ratio < 0.8) {
    const cropH = Math.round(meta.width * (PORTRAIT.has(id) ? 1.25 : 0.625));
    const yPct = pos.includes('%') ? parseFloat(pos.split(' ')[1]) / 100 : 0;
    const top = Math.min(Math.round((meta.height - cropH) * yPct), meta.height - cropH);
    pipeline = pipeline.extract({ left: 0, top: Math.max(0, top), width: meta.width, height: cropH });
  }

  const { info } = await pipeline
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(outDir, `${id}.webp`))
    .then((info) => ({ info }));

  covers[id] = { src: `/work/${id}.webp`, width: info.width, height: info.height };
  console.log(id, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
}

fs.writeFileSync(path.join(root, 'src/data/covers.json'), JSON.stringify(covers, null, 2) + '\n');
