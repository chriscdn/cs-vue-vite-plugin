/**
 * deno run --allow-read --allow-write ./scripts/generate-component-index.ts
 */

import glob from 'npm:glob'
import * as path from 'https://deno.land/std/path/mod.ts'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))

const basePath = path.resolve(__dirname, '..')
const srcPath = path.resolve(basePath, 'src')
const componentPath = path.resolve(srcPath, 'components/')
const targetFile = path.resolve(componentPath, 'index.ts')

const items = glob.sync(path.resolve(componentPath, '**/*.vue'))

const componentNames = items.map((item) =>
  item.replace(componentPath + '/', ''),
)

const componentNamesLines = componentNames.map(
  (item) => `export { default as ${path.parse(item).name} } from './${item}'`,
)

// ${export { default as KCard } from './components/Card/KCard.vue'}
const output = componentNamesLines.join('\n')

console.log(output)
Deno.writeTextFile(targetFile, output)
