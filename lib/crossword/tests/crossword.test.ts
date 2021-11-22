import { Crossword, Word, Direction } from "../crossword"

describe("Crossword", () => {
  describe("constructor", () => {
    const crossword = new Crossword(2, 2, [])

    it("creates a crossword", () => {
      expect(crossword.field.field).toEqual([
        [" ", " "],
        [" ", " "],
      ])
    })
  })

  describe("next", () => {
    const crossword = new Crossword(6, 6, ["sooo"], {
      firstWord: "first",
      deterministic: true,
    })

    it("fills in first words", () => {
      crossword.next()

      expect(crossword.field.field).toEqual([
        [" ", " ", " ", " ", " ", " "],
        ["f", "i", "r", "s", "t", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
      ])

      crossword.next()

      expect(crossword.field.field).toEqual([
        [" ", " ", " ", " ", " ", " "],
        ["f", "i", "r", "s", "t", " "],
        [" ", " ", " ", "o", " ", " "],
        [" ", " ", " ", "o", " ", " "],
        [" ", " ", " ", "o", " ", " "],
        [" ", " ", " ", " ", " ", " "],
      ])
    })
  })

  describe("calculateScore", () => {
    const crossword = new Crossword(10, 10, ["second"], { firstWord: "first" })

    crossword.field.field = [
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", "a", "b", "c", "d", "e", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ]
    // @ts-ignore
    crossword.addWord(
      new Word({ text: "abcde", row: 3, column: 3, direction: "_" })
    )

    describe("when word can be placed", () => {
      it("when word can be placed", () => {
        let word = new Word({
          text: "abcde",
          row: 3,
          column: 3,
          direction: "|",
        })
        // @ts-ignore
        expect(crossword.calculateScore(word)).toBeTruthy()

        word = new Word({ text: "bcde", row: 0, column: 7, direction: "|" })
        // @ts-ignore
        expect(crossword.calculateScore(word)).toBeTruthy()

        word = new Word({ text: "abc", row: 2, column: 4, direction: "|" })
        // @ts-ignore
        expect(crossword.calculateScore(word)).toBeTruthy()
      })

      xit("can place parallel a parallel fitting word", () => {
        let word = new Word({ text: "ab", row: 3, column: 3, direction: "|" })
        // @ts-ignore
        crossword.addWord(word)
        // @ts-ignore
        crossword.createFieldFromWords()

        // word = new Word({ text: 'ba', row: 4, column: 3, direction: '|' })
        word = new Word({ text: "ab", row: 4, column: 2, direction: "_" })

        // @ts-ignore
        expect(crossword.calculateScore(word)).toBeTruthy()
      })
    })

    describe("when word can not be placed", () => {
      it("can't overlap different letter", () => {
        let word = new Word({ text: "bbb", row: 2, column: 3, direction: "_" })
        // @ts-ignore
        expect(crossword.calculateScore(word)).toBeFalsy()
      })

      it("can't make word longer", () => {
        let word = new Word({ text: "edf", row: 3, column: 7, direction: "_" })
        // @ts-ignore
        expect(crossword.calculateScore(word)).toBeFalsy()
      })

      it("can't place parallel word next to", () => {
        let word = new Word({ text: "ab", row: 3, column: 3, direction: "|" })
        // @ts-ignore
        crossword.addWord(word)
        // @ts-ignore
        crossword.createFieldFromWords()

        word = new Word({ text: "ba", row: 4, column: 3, direction: "_" })

        // @ts-ignore
        expect(crossword.calculateScore(word)).toBeFalsy()
      })
    })
  })
})
