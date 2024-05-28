// Thanks! https://www.evennia.com/docs/latest/Components/Webclient.html#writing-your-own-plugins
var goldenlayout_config = {
    content: [{
        type: 'column',
        content: [{
            type: 'row',
            content: [{
                type: 'column',
                content: [{
                    type: 'component',
                    componentName: 'Main',
                    isClosable: false,
                    tooltip: 'Main - drag to desired position.',
                    componentState: {
                        cssClass: 'content',
                        types: 'untagged',
                        updateMethod: 'newlines',
                    },
                }, {
                    type: 'component',
                    componentName: 'input',
                    id: 'inputComponent',
                    height: 10,
                    tooltip: 'Input - The last input in the layout is always the default.',
                }, {
                    type: 'component',
                    componentName: 'input',
                    id: 'inputComponent',
                    height: 10,
                    isClosable: false,
                    tooltip: 'Input - The last input in the layout is always the default.',
                }]
            }, {
                type: 'column',
                content: [{
                    type: 'component',
                    componentName: 'evennia',
                    componentId: 'evennia',
                    title: 'example',
                    height: 60,
                    isClosable: false,
                    componentState: {
                        types: 'some-tag-here',
                        updateMethod: 'newlines',
                    },
                }, {
                    type: 'component',
                    componentName: 'evennia',
                    componentId: 'evennia',
                    title: 'sheet',
                    isClosable: false,
                    componentState: {
                        types: 'sheet',
                        updateMethod: 'replace',
                    },
                }],
            }],
        }]
    }]
};