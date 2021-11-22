import { urlWordProvider } from "../urlWordProvider"

describe("urlWordProvider", () => {
  const testUrl = "https://en.wikipedia.org/wiki/Donald_Trump"

  it("Provides words from URL", async () => {
    const words = await urlWordProvider(testUrl)
    expect(words.slice(0, 10)).toMatchInlineSnapshot(`
Array [
  "free",
  "president",
  "united",
  "other",
  "trump",
  "white",
  "house",
  "presidential",
  "head",
  "shot",
]
`)
  })
})
