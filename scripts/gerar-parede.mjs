// Gera as imagens da parede de pôsteres (pequena para a parede, grande para ampliar).
// Uso: node scripts/gerar-parede.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const sources = [
  ...['ASFALTOREC', "DON'T YOU REALIZE", 'DREAM', 'FUTURE', 'JNCO JEANS', 'NEXA', 'OLD SAYING', 'PELUK',
    'STAR CHOSEN', 'STUSSY X NIKE', 'STUSSY', 'Y2K'].map((t) => ({ title: t, file: `PARALLAX POSTERS/${t}.jpg` })),
  ...['ADOPT A PUSS', 'BE STELLAR', 'BEAUTIFUL', 'BOTTEGA', 'CAPA LAST', 'EMBALO', 'FASHION MATTERS', 'FXCKIT',
    'ILLUSION', 'LIVING MACHINE', 'TOPS', 'TRYOUT'].map((t) => ({ title: t, file: `POSTERS CAROUSEL/${t}.jpg` })),
  { title: 'OCEANMAN', file: 'POSTERS CAROUSEL/oceanman.png' },
];

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
fs.mkdirSync(path.join(root, 'public/wall/full'), { recursive: true });

const posters = [];
for (const { title, file } of sources) {
  const input = path.join(root, 'public', file);
  const s = slug(title);
  const small = await sharp(input).resize({ width: 640 }).webp({ quality: 76 }).toFile(path.join(root, 'public/wall', `${s}.webp`));
  const big = await sharp(input).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(root, 'public/wall/full', `${s}.webp`));
  posters.push({ slug: s, title, width: small.width, height: small.height });
  console.log(s, `${small.width}x${small.height}`, `${Math.round(small.size / 1024)}KB`, `${Math.round(big.size / 1024)}KB`);
}

fs.writeFileSync(path.join(root, 'src/data/posters.json'), JSON.stringify(posters, null, 2) + '\n');
