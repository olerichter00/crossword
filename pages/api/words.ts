import { testWordProvider } from "../../lib/crossword/wordProvider/testWordProvider"
import { urlWordProvider } from "../../lib/crossword/wordProvider/urlWordProvider"

const rp = require("request-promise")
const createTextVersion = require("textversionjs")

const URL = "https://en.wikipedia.org/wiki/Gerhard_Richter"

export default async function handler(req: any, res: any) {
  let words = []

  if (req.query.test) {
    words = testWordProvider()
  } else if (req.query.url) {
    const url = req.query.url || URL

    words = await urlWordProvider(url)
  } else if (req.query.term) {
    const term = req.query.term

    const searchResult = await (
      await fetch(
        `http://en.wikipedia.org/w/api.php?action=opensearch&search=${term}&namespace=0&format=json`
      )
    ).json()

    const url = searchResult[3][0]

    console.log({ url })

    words = await urlWordProvider(url)
    // words = searchResult
  }

  res.status(200).json(words)
}
