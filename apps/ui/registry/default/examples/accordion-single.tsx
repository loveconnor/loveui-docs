import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"

export default function AccordionSingleDemo() {
  return (
    <Accordion className="w-full" multiple={false}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Updated What is Base UI?</AccordionTrigger>
        <AccordionPanel>
          Updated Base UI is a library of high-quality unstyled React components for
          design systems and web apps.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Updated How do I get started?</AccordionTrigger>
        <AccordionPanel>
          Updated Head to the "Quick start" guide in the docs. If you've used unstyled
          libraries before, you'll feel at home.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Updated Can I use it for my project?</AccordionTrigger>
        <AccordionPanel>
          Updated Of course! Base UI is free and open source.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
