import { loadAllItemsEmbed, loadAllItemsRow } from './components/index.js'
import { insertItemRow } from '../insert/components/index.js'

export const loadAllItemsMenus = async () => {
  return {
    ephemeral,
    fetchReply,
    embeds: [loadAllItemsEmbed()],
    components: [await loadAllItemsRow(), insertItemRow()]
  }
}