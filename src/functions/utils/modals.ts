import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js"

type ModalData = {
  custom_id: string
  title: string
  components: Array<ActionRowBuilder<TextInputBuilder>>
}

type ModalInputData = {
  custom_id: string
  label: string
  placeholder: string
  style: TextInputStyle
  value: string
}

export const makeModal = (data: ModalData): ModalBuilder => {
  const { custom_id, title, components } = data;
  return new ModalBuilder({ 
    custom_id,
    title,
    components
  })
}

export const makeModalInput = (data: ModalInputData): ActionRowBuilder<TextInputBuilder> => {
  const { custom_id, label, placeholder, style, value } = data;
  return new ActionRowBuilder<TextInputBuilder>({
    components: [
      new TextInputBuilder({
        custom_id,
        label,
        placeholder,
        style,
        value
      })
    ]
  })
}