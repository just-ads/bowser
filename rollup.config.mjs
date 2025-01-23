import {defineConfig} from "rollup";
import terser from "@rollup/plugin-terser";

export default defineConfig({
    input: 'src/bowser.js',
    output: [{
        file: 'dist/bowser.es.js',
        format: 'es',
    }, {
        file: 'dist/bowser.umd.js',
        format: 'umd',
        name: 'geofile',
    }],
    plugins: [
        terser()
    ]
})
