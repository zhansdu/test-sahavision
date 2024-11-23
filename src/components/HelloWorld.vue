<template>
	<button @click="openModal">Open modal</button>
	{{ visible }}
	<Dialog v-model:visible="visible" modal header="Select folder" :style="{ width: '25rem' }">
		<ModalComponent />
	</Dialog>
</template>
<script setup lang="ts">
import Dialog from "primevue/dialog";
import ModalComponent from "./ModalComponent.vue";
import modal,{ visible } from "../composable/modal";

const { openModal } = modal();
</script>
