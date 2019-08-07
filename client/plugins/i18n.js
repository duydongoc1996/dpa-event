// / ~/plugins/myplugin.js
export default ({ app }) => {
  app.i18n.localePath = (path) => {
    app.localePath(path)
  }
  app.i18n.switchLocalePath = (code) => {
    app.switchLocalePath(code)
  }
}
