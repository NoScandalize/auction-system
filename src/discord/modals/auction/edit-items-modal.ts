import { TextInputStyle } from "discord.js";
import { makeModal, makeModalInput } from '#functions'
import { db } from "#database";

export async function editItemAuctionModal (id: string) {
  const prefix = 'auction/item/update';
  const data = await db.items.load(id)
  if(!data) return
  return makeModal({
    custom_id: `${prefix}/modal`,
    title: `Editar item`,
    components: [
      makeModalInput({
        custom_id: `${data._id}/${prefix}/modal/input/name`,
        label: 'Nome: ',
        placeholder: 'Digite o nome do item',
        style: TextInputStyle.Short,
        value: data.name ? data.name : ''
      }),
      makeModalInput({
        custom_id: `${prefix}/modal/input/type`,
        label: 'Tipo: ',
        placeholder: 'Digite o tipo item',
        style: TextInputStyle.Short,
        value: data.type ? data.type : ''
      }),
      makeModalInput({
        custom_id: `${prefix}/modal/input/source_boss`,
        label: 'Boss de origem: ',
        placeholder: 'Digite o nome do boss de origem do item',
        style: TextInputStyle.Short,
        value: data.source_boss ? data.source_boss : ''
      }),
      makeModalInput({
        custom_id: `${prefix}/modal/input/item_image`,
        label: 'Image do item: ',
        placeholder: 'Digite a URL da imagem do item',
        style: TextInputStyle.Short,
        value: data.item_image ? data.item_image : ''
      }),
      makeModalInput({
        custom_id: `${prefix}/modal/input/boss_image`,
        label: 'Image do boss: ',
        placeholder: 'Digite a URL da imagem do boss',
        style: TextInputStyle.Short,
        value: data.boss_image ? data.boss_image : ''
      }),
    ]
  })
}