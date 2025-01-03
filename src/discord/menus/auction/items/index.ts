import { insertItemMenus, confirmInsertItemMenus, successfulInsertItemMenus  } from './insert/index.js'
import { loadAllItemsMenus, loadItemMenus } from './load/index.js'
import { confirmDeleteItemMenus, successfulDeleteItemMenus } from './delete/index.js'
import { successfulEditItemMenus } from './edit/index.js'

export const itemMenus = {
  insert: insertItemMenus,
  confirmInsert: confirmInsertItemMenus,
  successfulInsert: successfulInsertItemMenus,
  loadAll: loadAllItemsMenus,
  load: loadItemMenus,
  successfulEdit: successfulEditItemMenus,
  confirmDelete: confirmDeleteItemMenus,
  successfulDelete: successfulDeleteItemMenus
}