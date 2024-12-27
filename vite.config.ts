import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import browserslistToEsbuild from 'browserslist-to-esbuild'

import path from "path";
const pathSrc = path.resolve(__dirname, "./src");

export default defineConfig({
    base: '',
    plugins: [react(), viteTsconfigPaths()],
    server: {
        open: true,
        port: 3000,
    },  
    css: {
        preprocessorOptions: {
          scss: { 
            additionalData: 
            `@use "${pathSrc}/styles/variables"; 
             @use "${pathSrc}/styles/mixins" as *;` 
            },
        },
    },
    build: {
        target: browserslistToEsbuild([
            '>0.2%',
            'not dead',
            'not op_mini all'
        ]),
    }
})