"use client"

import { useState } from "react"
import { faker } from "@faker-js/faker"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

import type { DragEndEvent } from "../../../../../packages/list"
import {
  ListGroup,
  ListHeader,
  ListItem,
  ListItems,
  ListProvider,
} from "../../../../../packages/list"

// Seed faker to ensure consistent data between server and client
faker.seed(123)

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const statuses = [
  { id: faker.string.uuid(), name: "Updated Planned", color: "#6B7280" },
  { id: faker.string.uuid(), name: "Updated In Progress", color: "#F59E0B" },
  { id: faker.string.uuid(), name: "Updated Done", color: "#10B981" },
]

const users = Array.from({ length: 4 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    image: faker.image.avatar(),
  }))

const exampleFeatures = Array.from({ length: 20 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: capitalize(faker.company.buzzPhrase()),
    startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
    endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
    status: faker.helpers.arrayElement(statuses),
    owner: faker.helpers.arrayElement(users),
  }))

const Example = () => {
  const [features, setFeatures] = useState(exampleFeatures)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) {
      return
    }

    const status = statuses.find((status) => status.name === over.id)

    if (!status) {
      return
    }

    setFeatures(
      features.map((feature) => {
        if (feature.id === active.id) {
          return { ...feature, status }
        }

        return feature
      })
    )
  }

  return (
    <ListProvider onDragEnd={handleDragEnd}>
      {statuses.map((status) => (
        <ListGroup id={status.name} key={status.name}>
          <ListHeader color={status.color} name={status.name} />
          <ListItems>
            {features
              .filter((feature) => feature.status.name === status.name)
              .map((feature, index) => (
                <ListItem
                  id={feature.id}
                  index={index}
                  key={feature.id}
                  name={feature.name}
                  parent={feature.status.name}
                >
                  <div
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: feature.status.color }}
                  />
                  <p className="m-0 flex-1 text-sm font-medium">
                    {feature.name}
                  </p>
                  {feature.owner && (
                    <Avatar className="h-4 w-4 shrink-0">
                      <AvatarImage src={feature.owner.image} />
                      <AvatarFallback>
                        {feature.owner.name?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </ListItem>
              ))}
          </ListItems>
        </ListGroup>
      ))}
    </ListProvider>
  )
}

export default Example
