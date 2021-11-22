import { filterWords } from "../utils"

const rp = require("request-promise")
const createTextVersion = require("textversionjs")

export const urlWordProvider = async (url: string) => {
  const html = await rp(url)

  const textVersion: string = createTextVersion(html)

  const words = textVersion.split(" ").map((word) => word.toLowerCase())

  return filterWords(words)
}
