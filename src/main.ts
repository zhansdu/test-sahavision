import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "./assets/style/tailwind.css";
import "./assets/style/style.css";
import App from "./App.vue";

createApp(App)
	.use(PrimeVue, {
		theme: {
			preset: Aura
		}
	})
	.mount("#app");
