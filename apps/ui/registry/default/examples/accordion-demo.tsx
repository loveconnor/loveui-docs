import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"

const items = [
  {
    id: "1",
    title: "Updated What is Base UI?",
    content:
      "Updated Base UI is a library of high-quality unstyled React components for design systems and web apps.",
  },
  {
    id: "2",
    title: "Updated How do I get started?",
    content:
      "Updated Head to the \"Quick start\" guide in the docs. If you've used unstyled libraries before, you'll feel at home.",
  },
  {
    id: "3",
    title: "Updated Can I use it for my project?",
    content: "Updated Of course! Base UI is free and open source.",
  },
]

export default function AccordionDemo() {
  return (
    <Accordion className="w-full" defaultValue={["3"]}>
      {items.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionPanel>{item.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
