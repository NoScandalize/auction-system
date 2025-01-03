import { TextInputStyle } from "discord.js";
import { makeModal, makeModalInput } from '#functions'

type ValueModalData = {
  name?: string
  type?: string
  source_boss?: string
  item_image?: string
  boss_image?: string
}

export function insertItemAuctionModal (data: ValueModalData = {}) {
  const prefix = 'auction/item/insert';
  return makeModal({
    custom_id: `${prefix}/modal`,
    title: 'Inserir item',
    components: [
      makeModalInput({
        custom_id: `${prefix}/modal/input/name`,
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