module.exports = {
  description: '创建组件',
  prompts: [
    {
      type: 'input',
      name: 'ComponentName',
      message: '请输入组件名（必填），组件名为大驼峰命名',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '组件名称不能为空'
        } else {
          return true
        }
      }
    }
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: 'src/components/{{ComponentName}}/index.vue',
        templateFile: 'plop-tpls/component/index.hbs'
      }
    ]
    return actions
  }
}
