import { Crossword } from "./crossword"
import { urlWordProvider } from "./wordProvider/urlWordProvider"

const url = "https://en.wikipedia.org/wiki/Donald_Trump"
const size = 20

const render = (field: string[][]) => {
  console.clear()

  for (const row of field) {
    console.log(row.join(" "))
  }
}

const run = async () => {
  const words = await urlWordProvider(url)

  const crossword = new Crossword(size, size, words)

  setInterval(() => {
    crossword.next()
    render(crossword.field.field)
  }, 1000)
}
