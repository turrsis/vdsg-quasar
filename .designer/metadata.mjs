import metadataConfigs from 'vdsg-metadata-configs'
import quasarConfigs from 'vdsg-metadata-quasar'
import templates from './metadata.templates.mjs'

export default [
    metadataConfigs,
    quasarConfigs,
    {
        templates: templates,
        elements: {
        },
    }
]