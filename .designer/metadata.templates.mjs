export default {
    groups: {
        'quasar-elements': 'quasar-elements',
    },
    elements: {
        'quasar-elements': {
            label: 'quasar elements',
            templates: {
                'div': {
                    label: 'div-text',
                    template: {
                        tag: 'div',
                        children: ['quasar text in div']
                    }
                },
                'span': {
                    label: 'span-text',
                    template: {
                        tag: 'span',
                        children: ['quasar text in span']
                    }
                }
            }
        },
    }
}