/**
 * deno run --allow-read --allow-write ./scripts/generate-global-compoents-types.ts
 */

import glob from 'npm:glob'
import * as path from 'https://deno.land/std/path/mod.ts'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))

const basePath = path.resolve(__dirname, '..')
const srcPath = path.resolve(basePath, 'src')
const componentPath = path.resolve(srcPath, 'components/')
const items = glob.sync(path.resolve(componentPath, '**/*.vue'))
const componentNames = items.map((item: string) => path.parse(item).name)

const output = `
import type {
 ${componentNames.join(', ')}
} from '@kweli/cs-vue-vite-plugin/dist/types/components/'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ${componentNames.map((name) => `${name}: typeof ${name}`).join('\n')}
  }
}

export {}
`
console.log(output)
