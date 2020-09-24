import Vue from "nativescript-vue";
import * as application from 'application';


// import Home from "./components/Home";
import routes from "./routes";
import BackendService from "./services/backend-service";

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

const backendService = new BackendService();
Vue.prototype.$backendService = backendService;

Vue.registerElement('CheckBox', () => require('nativescript-checkbox').CheckBox, {
	model: {
		prop: 'checked',
		event: 'checkedChange'
	}
});

new Vue({
	render: h => h("frame", [h(routes.terms)]),
	created: function(){
		if (application.android) {
			application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
				args.cancel = true; //this cancels the normal backbutton behaviour
			});
		}
	}
}).$start();