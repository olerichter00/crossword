import { range } from "lodash"
import { Field, Word } from "./crossword"

export const checkBorders = (field: Field, words: Word[], word: Word) => {
  if (
    word.row < 0 ||
    word.row + (word.direction === "|" ? word.text.length : 0) >= field.rows ||
    word.column < 0 ||
    word.column + (word.direction === "_" ? word.text.length : 0) >=
      field.columns
  )
    return false

  return true
}

export const checkIfOtherWordBorders = (
  field: Field,
  words: Word[],
  word: Word
) => {
  for (const { row, column } of word.getCoordinates()) {
    if (word.direction === "_") {
      if (
        (field.hasLetter(row + 1, column) ||
          field.hasLetter(row - 1, column)) &&
        !field.hasLetter(row, column)
      ) {
        return false
      }
    }
    if (word.direction === "|") {
      if (
        (field.hasLetter(row, column + 1) ||
          field.hasLetter(row, column - 1)) &&
        !field.hasLetter(row, column)
      ) {
        return false
      }
    }
  }

  return true
}

export const countOverlaps = (field: Field, words: Word[], word: Word) => {
  let overlapingCount = 0

  for (const { row, column } of word.getCoordinates()) {
    if (field.hasLetter(row, column)) {
      overlapingCount += 1
    }
  }

  return overlapingCount
}

export const checkWordEnds = (field: Field, words: Word[], word: Word) => {
  if (
    (word.direction === "_" &&
      (field.hasLetter(word.row, word.column + word.text.length) ||
        field.hasLetter(word.row, word.column - 1))) ||
    (word.direction === "|" &&
      (field.hasLetter(word.row + word.text.length, word.column) ||
        field.hasLetter(word.row - 1, word.column)))
  ) {
    return false
  }

  return true
}

export const checkWrongLetter = (field: Field, words: Word[], word: Word) => {
  for (const letterIndex of range(word.text.length)) {
    const row = word.direction === "_" ? word.row : word.row + letterIndex
    const column =
      word.direction === "_" ? word.column + letterIndex : word.column

    if (
      field.hasLetter(row, column) &&
      field.get(row, column) !== word.text[letterIndex]
    ) {
      return false
    }
  }

  return true
}

export const checkParallels = (field: Field, words: Word[], word: Word) => {
  for (const anotherWord of words) {
    if (
      (anotherWord.direction === "_" &&
        word.direction === "_" &&
        Math.abs(anotherWord.row - word.row) === 1) ||
      (anotherWord.direction === "|" &&
        word.direction === "|" &&
        Math.abs(anotherWord.column - word.column) === 1) ||
      (anotherWord.direction === "_" &&
        word.direction === "|" &&
        (anotherWord.column + anotherWord.text.length === word.column - 1 ||
          anotherWord.column === word.column + 1)) ||
      (anotherWord.direction === "|" &&
        word.direction === "_" &&
        (anotherWord.row + anotherWord.text.length === word.row - 1 ||
          anotherWord.row === word.row + 1))
    )
      return false
  }

  return true
}

export const calculateScore = (field: Field, words: Word[], word: Word) => {
  if (
    !(
      checkBorders(field, words, word) &&
      checkIfOtherWordBorders(field, words, word) &&
      checkWordEnds(field, words, word) &&
      checkWrongLetter(field, words, word) &&
      checkParallels(field, words, word)
    )
  )
    return 0

  return countOverlaps(field, words, word)
}
