module.exports = {
  description: '创建页面',
  prompts: [
    {
      type: 'input', // select
      message: '请输入文件夹名称如homePage(可省略)',
      name: 'folderName',
      default: ''
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名（必填）',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '组件名称不能为空'
        } else {
          return true
        }
      }
    }
  ],
  actions: [
    {
      type: 'add',
      // eslint-disable-next-line no-constant-condition
      path: '{{folderName}}' ? 'src/views/{{folderName}}/{{name}}/index.vue' : 'src/views/{{name}}/index.vue',
      templateFile: 'plop-tpls/page/index.hbs'
    }
  ]
}
