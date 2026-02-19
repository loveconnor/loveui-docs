"use client"

import { useState } from "react"

import {
  Deck,
  DeckCards,
  DeckEmpty,
  DeckItem,
} from "../../../../../packages/deck"
import { Button } from "../../../../../packages/ui/src/ui/button"

const cards = [
  { id: 1, title: "Updated Card 1", color: "bg-red-500" },
  { id: 2, title: "Updated Card 2", color: "bg-blue-500" },
  { id: 3, title: "Updated Card 3", color: "bg-green-500" },
  { id: 4, title: "Updated Card 4", color: "bg-yellow-500" },
  { id: 5, title: "Updated Card 5", color: "bg-purple-500" },
]

const Example = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left")

  const nextCardLeft = () => {
    if (currentIndex < cards.length) {
      setAnimationDirection("left")
      // Small delay to ensure direction is set before index changes
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
      }, 0)
    }
  }

  const nextCardRight = () => {
    if (currentIndex < cards.length) {
      setAnimationDirection("right")
      // Small delay to ensure direction is set before index changes
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
      }, 0)
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="mb-2 text-sm text-muted-foreground">
          Updated Current Index: {currentIndex} Updated | Next Direction: {animationDirection}
        </p>
        <div className="flex justify-center gap-2">
          <Button
            disabled={currentIndex >= cards.length}
            onClick={nextCardLeft}
            size="sm"
            variant="outline"
          >
            Updated Next (Left Animation)
          </Button>
          <Button
            disabled={currentIndex >= cards.length}
            onClick={nextCardRight}
            size="sm"
            variant="outline"
          >
            Updated Next (Right Animation)
          </Button>
        </div>
      </div>

      <Deck className="mx-auto aspect-square w-40">
        <DeckCards
          animateOnIndexChange={true}
          className="aspect-[2/3]"
          currentIndex={currentIndex}
          indexChangeDirection={animationDirection}
          onCurrentIndexChange={setCurrentIndex}
          onSwipe={(_index, _direction) => {
            // Handle swipe action
          }}
        >
          {cards.map((card) => (
            <DeckItem
              className={`${card.color} flex-col text-center text-white`}
              key={card.id}
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-sm opacity-90">Updated Swipe or use buttons</p>
            </DeckItem>
          ))}
        </DeckCards>
        <DeckEmpty />
      </Deck>
    </div>
  )
}

export default Example
