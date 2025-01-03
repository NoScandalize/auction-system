import { db } from '#database'
import { EmbedData, loadItemEmbed, loadItemRow } from './components/index.js'

export const loadItemMenus = async (id: string) => {
  const item = await db.items.load(id)
  if(!item) return;
  const itemData: EmbedData = {
    id: item._id.toString(),
    name: item.name,
    type: item.type,
    source_boss: item.source_boss,
    item_image: item.item_image,
    boss_image: item.boss_image
  }

  return {
    ephemeral,
    fetchReply,
    embeds: [loadItemEmbed(itemData)],
    components: [loadItemRow()]
  }
}