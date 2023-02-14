export default {
    key: 'vdsg-tests-quasar',
    label: 'quasar tests',
    app: {
        tests: {
            uiSpecsPath: '.designer-tests/.spec',
        },
        router: {
            entryPoint: 'src/router/index.js',
        },
    },
    originhost: 'http://localhost:8080',
    server: {
        host: 'localhost',
        port: 8087,
    }
}