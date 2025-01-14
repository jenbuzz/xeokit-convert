import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy'

export default {
    input: './index.dist.js',
    output: [
        {
            file: './dist/xeokit-convert.es.js',
            include: '/node_modules/',
            format: 'es',
            name: 'bundle'
        }        ,
        {
            file: './dist/xeokit-convert.cjs.js',
            include: '/node_modules/',
            format: 'cjs',
            name: 'bundle2'
        }
    ],
    plugins: [
        resolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs(),
        copy({
            targets: [
                {
                    src: './node_modules/web-ifc/web-ifc.wasm',
                    dest: 'dist'
                }
            ]
        })
    ]
}