export type folder = {
  id:number,
  name:string,
  children:folder[]
}

export type modal_functions ={
  openModal:()=>void,
  closeModal:()=>void,
  setFolder:(folder:folder)=>void
}

export type TreeNode = {
  key: string; // Unique identifier for the node
  label?: string; // Display label for the node
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any; // Any custom data associated with the node
  icon?: string; // Icon for the node
  disabled?: boolean; // Disable the node (non-interactive)
  selectable?: boolean; // If the node is selectable
  children?: TreeNode[]; // Child nodes (nested structure)
}
