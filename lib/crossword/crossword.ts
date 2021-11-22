import { shuffle, range } from "lodash"
import { calculateScore } from "./checker"
import { reverse } from "./utils"

const randomInt = (max: number): number => Math.floor(Math.random() * max)

const EMPTY_VALUE: Letter = " "
const MAX_ATTEMPTS: number = 10

export type Letter = string

export type Direction = "|" | "_"

export class Field {
  field: Letter[][] = [[]]
  rows: number
  columns: number

  constructor(rows: number, columns: number) {
    this.field = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => EMPTY_VALUE)
    )

    this.rows = rows
    this.columns = columns
  }

  get(row: number, column: number) {
    if (row < 0 || column < 0 || row >= this.rows || column >= this.columns)
      return false

    return this.field[row][column]
  }

  set(row: number, column: number, letter: string) {
    if (row < 0 || column < 0 || row >= this.rows || column >= this.columns)
      return false

    this.field[row][column] = letter
  }

  hasLetter(row: number, column: number) {
    if (row < 0 || column < 0 || row >= this.rows || column >= this.columns)
      return false

    return this.field[row][column] !== EMPTY_VALUE
  }
}
interface Options {
  firstWord?: string
  deterministic?: boolean
}

export class Crossword {
  words: Word[] = []
  allWords: string[] = []
  rows: number
  columns: number
  field: Field
  allWordsIndex: number = 0
  step = 0
  ended = false
  options: Options = {}
  constructor(
    rows: number,
    columns: number,
    allWords: string[],
    options?: Options
  ) {
    this.allWords = options?.deterministic
      ? [
          ...allWords.map((word) => word.toLowerCase()),
          ...allWords.map((word) => reverse(word.toLowerCase())),
        ]
      : [
          ...shuffle(allWords.map((word) => word.toLowerCase())),
          ...shuffle(allWords.map((word) => reverse(word.toLowerCase()))),
        ]
    this.options = options
    this.rows = rows
    this.columns = columns

    this.createEmptyField()
  }

  public next = () => {
    if (this.ended) return

    let success = false

    if (this.step === 0) {
      this.placeWord(this.options?.firstWord || this.allWords[0])
      success = true
    } else {
      for (const word of this.allWords) {
        if (this.placeWord(word)) {
          success = true
          break
        }
      }
    }

    if (!success) {
      console.log("The end.")
      this.ended = true
    }

    this.createFieldFromWords()

    this.ageWords()

    // this.removeOldWords()
    this.removeLonelyWords()

    this.step += 1
  }

  public resize = (rows: number, columns: number) => {
    this.rows = rows
    this.columns = columns

    this.words = this.words.filter(this.calculateScore)
  }

  private calculateScore = (word) =>
    calculateScore(this.field, this.words, word)

  public clear = () => {
    this.words = []
  }

  public clearSmoothly = () => {
    for (const word of this.words) {
      word.ttl = Math.min(word.ttl, 2)
    }
  }

  public getField = (): Field => this.field

  private removeLonelyWords = () => {
    if (this.words.length <= 1) return

    for (const word of this.words) {
      if (this.isWordAlone(word)) word.ttl = Math.min(word.ttl, 2)
    }
  }

  private removeOldWords = () => {
    this.words = this.words.filter((word) => {
      return word.ttl > 0
    })
  }

  private ageWords = () => {
    for (const word of this.words) {
      word.ttl -= 1
    }
  }

  private createFieldFromWords = () => {
    this.createEmptyField()
    this.words.forEach((word) => {
      this.placeWordOnField(word)
    })
  }

  private placeWord = (word: string): boolean => {
    if (this.words.length === 0) {
      this.placeFirstWord(word)
      return
    }

    let bestMatch: { score: number; word: Word } | undefined

    for (const direction of ["|", "_"]) {
      for (const x of shuffle(
        range(this.columns - (direction === "_" ? word.length : 0))
      )) {
        for (const y of shuffle(
          range(this.rows - (direction === "|" ? word.length : 0))
        )) {
          const newWord = new Word({
            text: word,
            direction: direction as Direction,
            row: y,
            column: x,
            ttl: 300000,
          })

          const score = this.calculateScore(newWord)

          if (score >= 1) {
            this.addWord(newWord)
            return true
          }

          if (score > 0 && (!bestMatch || score > bestMatch?.score)) {
            bestMatch = { score, word: newWord }
          }
        }
      }
    }

    if (bestMatch?.word) {
      this.addWord(bestMatch?.word)
      return true
    }

    return false
  }

  private isWordAlone = (word: Word) => {
    if (word.direction === "|") {
      for (const letterIndex of range(word.text.length)) {
        if (
          this.field.hasLetter(word.row + letterIndex, word.column - 1) ||
          this.field.hasLetter(word.row + letterIndex, word.column + 1)
        )
          return false
      }
    } else {
      for (const letterIndex of range(word.text.length)) {
        if (
          this.field.hasLetter(word.row + 1, word.column + letterIndex) ||
          this.field.hasLetter(word.row - 1, word.column + letterIndex)
        )
          return false
      }
    }

    return true
  }

  private placeFirstWord = (word: string) => {
    const direction = "_"

    const newWord = new Word({
      text: word,
      direction,
      row: Math.floor(this.rows / 2) - 2,
      column: Math.floor(this.columns / 2 - word.length / 2),
      ttl: this.calculateTTL(),
    })

    this.addWord(newWord)
  }

  private calculateTTL = (): number => {
    const min = Math.floor((this.rows + this.columns) / 3)

    const existingTTLs = this.words.map((word) => word.ttl)

    let ttl = min
    while (existingTTLs.includes(ttl)) {
      ttl++
    }

    return ttl
  }

  private addWord = (word: Word) => {
    console.log(word.text)

    this.words.push(word)
    this.allWords = this.allWords.filter((w) => w !== word.text)
  }

  private placeWordOnField = (word: Word) => {
    for (const i of range(word.text.length)) {
      if (word.direction === "_") {
        this.field.set(word.row, word.column + i, word.text[i])
      } else {
        this.field.set(word.row + i, word.column, word.text[i])
      }
    }
  }

  private getNextWord = (): string => {
    const word = this.allWords[this.allWordsIndex % this.allWords.length]

    this.allWordsIndex += 1

    return word
  }

  private createEmptyField = () => {
    this.field = new Field(this.rows, this.columns)
  }
}

interface Coordinate {
  row: number
  column: number
}

interface WordProps {
  text: string
  row: number
  column: number
  direction: "|" | "_"
  ttl?: number
}

export class Word {
  text: string
  row: number
  column: number
  direction: Direction
  ttl: number
  maxTtl: number

  constructor({ text, row, column, direction, ttl = 10 }: WordProps) {
    this.text = text
    this.row = row
    this.column = column
    this.direction = direction
    this.ttl = ttl
    this.maxTtl = ttl
  }

  getCoordinates = (): Coordinate[] => {
    const coordinates: Coordinate[] = []

    for (const letterIndex of range(this.text.length)) {
      const row = this.direction === "_" ? this.row : this.row + letterIndex
      const column =
        this.direction === "_" ? this.column + letterIndex : this.column

      coordinates.push({ row, column })
    }

    return coordinates
  }

  public toObject = () => ({
    text: this.text,
    row: this.row,
    column: this.column,
    direction: this.direction,
  })
}

export const createCrossword = (
  rows: number,
  columns: number,
  allWords: string[],
  options?: Options
) => new Crossword(rows, columns, allWords, options)
