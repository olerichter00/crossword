import { calculateScore } from "../checker"
import { Crossword, Word, Direction } from "../crossword"

describe("Crossword", () => {
  describe("next", () => {
    const crossword = new Crossword(6, 6, ["sooo"], {
      firstWord: "first",
      deterministic: true,
    })

    fit("fills in first words", () => {
      crossword.next()

      expect(crossword.field.field).toEqual([
        [" ", " ", " ", " ", " ", " "],
        ["f", "i", "r", "s", "t", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
      ])

      const newWord = new Word({
        text: "sooo",
        direction: "|",
        row: 1,
        column: 3,
        ttl: 300000,
      })

      expect(calculateScore(crossword.field, crossword.words, newWord)).toEqual(
        1
      )
    })
  })
})
