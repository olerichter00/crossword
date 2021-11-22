export const filterWords = (words: string[]) => {
  return words
    .filter((word) => /^[a-z0-9]+$/i.test(word))
    .filter((word) => word.length > 3)
}

export const reverse = (input: string) =>
  input
    .split("")
    .map((_, index) => input[input.length - index - 1])
    .join("")
