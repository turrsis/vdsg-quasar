export default async ({ app, ssrContext }) => {
  if (!ssrContext) {
    //console.log('quasar.injector: client')
    app.use(
      (await import('vdsg-slave')).default,
      {
        config: await import('./config.mjs'),
        metadata: await import('./metadata.mjs')
      }
    )
  } else {
    //console.log('quasar.injector: server')
    app.directive('__designer', (el, dir, vnode) => { console.log('ssr.__designer.created', dir) })
  }
}
