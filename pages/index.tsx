import { useCallback, useEffect, useReducer, useRef, useState } from "react"
import { createCrossword, Crossword, Word } from "../lib/crossword/crossword"
import { debounce } from "lodash"
// import useSound from 'use-sound'

const DEFAULT_DELAY = 3000
const MAX_WORDS = 20

export default function Home() {
  const [term, setterm] = useState<string>("Gerhard Richter")

  const [delay, setDelay] = useState(DEFAULT_DELAY)
  const [round, nextRound] = useReducer((state) => state + 1, 0)

  const inputRef = useRef(null)

  const [size, _setSize] = useState<[number, number]>([0, 0])
  const sizeRef = useRef(size)
  const setSize = (data) => {
    sizeRef.current = data
    _setSize(data)
  }

  const [crossword, _setCrossword] = useState<Crossword>()
  const crosswordRef = useRef(crossword)
  const setCrossword = (data) => {
    crosswordRef.current = data
    _setCrossword(data)
  }

  const [scheduler, setScheduler] = useState<any>()

  const getSize = () => {
    const rows = Math.floor((window.innerHeight - 160) / 22)
    const columns = Math.floor((window.innerWidth - 50) / 17)

    return [rows, columns]
  }

  const initialize = async () => {
    const words = await (await fetch(`api/words?term=${term}`)).json()

    console.log({ term: term, words: words.length })

    const newSize = getSize()
    const newCrossword = createCrossword(newSize[0], newSize[1], words)
    setSize(newSize)
    setCrossword(newCrossword)

    window.addEventListener("resize", debounce(handleResize, 100))
  }

  useEffect(() => {
    initialize()
  }, [])

  const handleResize = () => {
    const newSize = getSize()

    console.log("resized from: ", sizeRef.current, " to ", newSize)

    if (!newSize) return

    setSize(newSize)
  }

  useEffect(() => {
    if (!crossword) return

    crossword.resize(size[0], size[1])
    nextRound()
  }, [size[0], size[1]])

  const clear = () => {
    if (scheduler) {
      crosswordRef?.current?.clearSmoothly()
    } else {
      crosswordRef?.current?.clear()
      nextRound()
    }
  }

  const next = () => {
    if (!crosswordRef?.current) return

    crosswordRef.current.next()

    if (crosswordRef.current.words.length >= MAX_WORDS) {
      stop()
    }

    nextRound()
  }

  const start = () => {
    if (!crosswordRef) return

    clear()
    stop()
    initialize()
    setScheduler(setInterval(next, delay))
    nextRound()
  }

  const stop = () => {
    const currentScheduler = scheduler

    setScheduler(null)
    clearInterval(currentScheduler)
  }

  const field = crossword?.getField()

  const crosswordWords = crossword?.words

  const increaseDelay = () => {
    setDelay(Math.min(10000, delay + 500))
    start()
  }

  const decreaseDelay = () => {
    setDelay(Math.max(delay - 500, 100))
    start()
  }

  return (
    <main className="leading-none mx-4 sm:mx-17 my-2 sm:my-10">
      <div className="pb-6">
        <input
          className="shadow appearance-none border py-2 px-3 m-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="term"
          value={term}
          onChange={(event) => setterm(event.target.value)}
          ref={inputRef}
        ></input>
        <button
          className="text-white focus:outline-none border-white border py-2 px-3 overflow-hidden m-1"
          onClick={start}
        >
          Go
        </button>

        <button
          onClick={increaseDelay}
          className="ml-5 text-white focus:outline-none border-white border py-2 px-3 overflow-hidden m-1"
        >
          -
        </button>
        {Math.floor(10000.0 / delay)}
        <button
          onClick={decreaseDelay}
          className=" text-white focus:outline-none border-white border py-2 px-3 overflow-hidden m-1"
        >
          +
        </button>
        <button
          className="text-white focus:outline-none border-white border py-2 px-3 overflow-hidden m-1"
          onClick={() => next()}
        >
          Add Word
        </button>
        <button
          className="text-white focus:outline-none border-white border py-2 px-3 overflow-hidden m-1"
          onClick={() => clear()}
        >
          Clear
        </button>
      </div>
      <div className="py-2 relative">
        {!!field &&
          crosswordWords.map((word) => (
            <AWord
              word={word}
              key={`word-${word.column}-${word.row}-${word.direction}-${word.text}`}
            />
          ))}
      </div>
    </main>
  )
}

const AWord = ({ word }: { word: Word }) => {
  return (
    <div
      className={`${
        word.ttl < 3 || word.ttl === word.maxTtl - 1
          ? "opacity-0"
          : "opacity-100"
      } fade-in transition-all duration-1000`}
      style={{
        position: "absolute",
        top: word.row * 22,
        left: word.column * 17,
      }}
    >
      {word.text.split("").map((letter, i) => (
        <Letter
          letter={letter}
          isInline={word.direction === "_"}
          key={`letter-${word.column}-${word.row}-${word.direction}-${word.text}-${i}`}
        />
      ))}
    </div>
  )
}
const Letter = ({
  letter,
  isInline,
}: {
  letter: string
  isInline: boolean
}) => {
  return (
    <div
      className={`${isInline && "inline-block"}`}
      style={{
        width: "17px",
        maxWidth: "17px",
        height: "22px",
        maxHeight: "22px",
      }}
    >
      {letter}
    </div>
  )
}
