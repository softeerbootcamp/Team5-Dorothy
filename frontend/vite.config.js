import { defineConfig } from 'vite';

export default () =>
    defineConfig({
        server: {
            proxy: {
                '/api': {
                    target: 'https://dorothy-5z.site/api/v1',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                    secure: false,
                    ws: true,
                },
            },
        },
    });
