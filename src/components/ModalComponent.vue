<template>
	<div class="flex">
		<TreeSelect v-model="localFolder" :options="nodes" placeholder="Select Item" class="w-100" />
	</div>
</template>
<script setup lang="ts">
import TreeSelect from "primevue/treeselect";
import { folder, TreeNode } from "../types/modal";
import { ref } from "vue";
import { mockFolders } from "../assets/mock_data";

const localFolder = ref<folder>();

function folderToNode(folder:folder):TreeNode {
	return ({
		label: folder.name,
		key: folder.id + "",
		children: folder.children.map(child => folderToNode(child))
	});
}

const nodes:TreeNode[] = mockFolders.map(folder => folderToNode(folder));

</script>
  