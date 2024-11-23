import { ref } from "vue";
import { folder, modal_functions } from "../types/modal";

export const visible = ref<boolean>(false);
export const selected_folder = ref<folder>(); 

export default ():modal_functions=>{
	function openModal():void {
		visible.value = true;
	}
	function closeModal():void {
		visible.value = false;
	}
	function setFolder(folder:folder):void {
		selected_folder.value = folder;
	}
	return {
		openModal,
		closeModal,
		setFolder
	};
};