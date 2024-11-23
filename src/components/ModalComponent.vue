<template>
	<div>
		<TreeSelect @node-select="nodeSelect" selection-mode="single" :options="nodes" placeholder="Select Item" class="w-full" />
		<div class="mt-4 flex justify-between">
			<button class="bg-blue-500" @click="saveFolder(localFolder)">Ok</button>
			<button class="ms-10 bg-red-500" @click="closeModal">Cancel</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import TreeSelect from "primevue/treeselect";
import { folder, TreeNode } from "../types/modal";
import { ref } from "vue";
import { mockFolders } from "../assets/mock_data";

import modal from "../composable/modal";
import { folderToNode, nodeToFolder } from "../utils/treeNode";

const localFolder = ref<folder>();
const nodes:TreeNode[] = mockFolders.map(folder => folderToNode(folder));

function nodeSelect(event:TreeNode):void {
	localFolder.value = nodeToFolder(event);
}

const { closeModal, saveFolder } = modal();
</script>
  