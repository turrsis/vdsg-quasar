export default {
    key: 'vdsg-tests-quasar',
    label: 'quasar tests',
    tests: {
        uiSpecsPath: '.designer-tests/.spec',
    },
    routesEntryPoint: 'src/router/index.js',
    originhost: 'http://localhost:8080',
    server: {
        host: 'localhost',
        port: 8087,
    }
}