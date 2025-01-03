import { errorMenuEmbed, errorMenuRow } from './components/index.js'

export type MenuData = {
  title: string
  error: string
  buttonId: string
  buttonTitle: string
}

export const errorMenu = (data: MenuData) => {
  const { error, title, buttonId, buttonTitle } = data;
  return {
    ephemeral,
    embeds: [errorMenuEmbed({
      error,
      title
    })],
    components: [errorMenuRow({
      buttonId,
      buttonTitle
    })]
  }
}