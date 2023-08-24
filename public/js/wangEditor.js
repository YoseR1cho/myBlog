const { createEditor, createToolbar } = window.wangEditor

const editorConfig = {
    placeholder: '发布您的文章'
}

const editor = createEditor({
    selector: '#editor-container',
    config: editorConfig,
    mode: 'default', // or 'simple'
})

const toolbarConfig = {}

const toolbar = createToolbar({
    editor,
    selector: '#toolbar-container',
    config: toolbarConfig,
    mode: 'default', // or 'simple'
})



