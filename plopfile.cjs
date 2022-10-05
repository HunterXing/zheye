module.exports = (plop) => {
  plop.setWelcomeMessage('请选择需要创建的模式：')
  plop.setGenerator('page', require('./plop-tpls/page/prompt.cjs'))
  plop.setGenerator('component', require('./plop-tpls/component/prompt.cjs'))
}
