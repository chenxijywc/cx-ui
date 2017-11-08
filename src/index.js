import Toast from '../packages/toast/index.js'

const components = {
    Toast
}

components.install = (Vue) => {
    Vue.$Toast = Vue.prototype.$Toast = Toast;
}

export default components;
export {
    Toast
}