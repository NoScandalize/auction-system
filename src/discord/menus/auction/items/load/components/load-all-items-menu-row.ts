
import { db } from "#database"
import { ActionRowBuilder, StringSelectMenuBuilder } from "discord.js"

export const loadAllItemsRow = async () => {
  const itemData = await db.items.loadAll()
  return new ActionRowBuilder<StringSelectMenuBuilder>({
    components: [
      new StringSelectMenuBuilder({
        custom_id: 'auction/item/load',
        placeholder: 'Selecione um item para gerenciar',
        options: itemData.length ? itemData.map(item => {
          return {
            label: item.name,
            value: item._id.toString()
          }
        }) : [
          {
            label: 'Nenhum item foi encontrado!',
            value: 'nodatafound'
          }
        ]
      })
    ]
  })
}