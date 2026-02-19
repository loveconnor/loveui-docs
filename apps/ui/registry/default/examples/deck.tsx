"use client"

import Image from "next/image"

import {
  Deck,
  DeckCards,
  DeckEmpty,
  DeckItem,
} from "../../../../../packages/deck"

const images = [
  {
    id: 1,
    src: "https://placehold.co/400x600/ff6b6b/fff?text=Card+1",
    title: "Updated Card 1",
  },
  {
    id: 2,
    src: "https://placehold.co/400x600/4ecdc4/fff?text=Card+2",
    title: "Updated Card 2",
  },
  {
    id: 3,
    src: "https://placehold.co/400x600/45b7d1/fff?text=Card+3",
    title: "Updated Card 3",
  },
  {
    id: 4,
    src: "https://placehold.co/400x600/96ceb4/fff?text=Card+4",
    title: "Updated Card 4",
  },
  {
    id: 5,
    src: "https://placehold.co/400x600/feca57/fff?text=Card+5",
    title: "Updated Card 5",
  },
]

const Example = () => (
  <Deck className="size-full">
    <DeckCards>
      {images.map((image) => (
        <DeckItem className="p-0" key={image.id}>
          <Image
            alt={image.title}
            className="h-full w-full rounded-lg object-cover"
            draggable={false}
            height={600}
            src={image.src}
            unoptimized
            width={400}
          />
        </DeckItem>
      ))}
    </DeckCards>
    <DeckEmpty />
  </Deck>
)

export default Example
