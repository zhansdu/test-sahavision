<template>
	<div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
		<h1>
			Vite + Vue
		</h1>
	</div>
	<div>
		Selected folder : {{ selected_folder?.name ?? 'None selected' }}
	</div>
	<button class="mt-3" @click="openModal">Open modal</button>
	<Dialog v-model:visible="visible" modal header="Select folder" :style="{ width: '25rem' }">
		<ModalComponent />
	</Dialog>
</template>
<script setup lang="ts">
import Dialog from "primevue/dialog";
import ModalComponent from "./ModalComponent.vue";
import modal,{ visible, selected_folder } from "../composable/modal";

const { openModal } = modal();
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>