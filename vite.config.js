//TODO: currently this config doesn't work

// make base.scss to be global styles
export default {
  cssPreprocessOptions: {
    sass: {
      additionalData: '@import "@/styles/base.scss";'
    }
  }
}
// with vue cli
// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: '@import "@/styles/base.scss";'
//       }
//     }
//   }
// }