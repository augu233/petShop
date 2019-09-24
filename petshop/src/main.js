import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "amfe-flexible";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
          
	let token = store.state.token ? store.state.token:localStorage.getItem("token");
	
	if(token){
	   axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
	}else{
	   if(to.meta.requireAuth){
		   router.push({name:"login",params:{"path":to.path}});
	   }
	}
	next();
	
   
})


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
