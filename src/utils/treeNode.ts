import { folder, TreeNode } from "../types/modal";

export function folderToNode(folder: folder): TreeNode {
	return ({
		label: folder.name,
		key: folder.id + "",
		children: folder.children.map(child => folderToNode(child))
	});
}
export function nodeToFolder(node: TreeNode): folder {
	return ({
		name: node.label ?? "no name",
		id: parseInt(node.key),
		children: node.children ? node.children.map(child => nodeToFolder(child)) : []
	});
}