import {createStore} from 'vuex'
// 导入插件 vuex-persistedstate,做数据持久化
import createPersistedState from 'vuex-persistedstate'
// 模块
import cart from '@/store/modules/cart'


export default createStore({
    modules: {
        cart
    },
    // 配置插件
    plugins: [
        // 默认存储在 localStorage
        createPersistedState({
            // 本地存储名字
            key: 'rice_blog',
            // 自动需要存储的模块
            paths: ['cart']
        })
    ]
})
