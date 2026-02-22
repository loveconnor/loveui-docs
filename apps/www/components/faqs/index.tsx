import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../packages/ui/src/ui/accordion";

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16">
      <div className="space-y-2">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Answers to the questions we hear most about adopting LoveUI in production. Still unsure? Reach out and we'll help you evaluate the fit.
        </p>
      </div>
      <Accordion
        className="-space-y-px w-full rounded-lg bg-card shadow dark:bg-card/50"
        defaultValue={["item-1"]}
        multiple={false}
      >
        {questions.map((item) => (
          <AccordionItem
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-muted-foreground">
        Can't find what you're looking for? Email us at{" "}
        <a className="text-primary hover:underline" href="mailto:loveconnor2005@gmail.com">
          loveconnor2005@gmail.com
        </a>{" "}
        and we'll get back within a day.
      </p>
    </div>
  );
}

const questions = [
  {
    id: "item-1",
    title: "What is LoveUI?",
    content:
      "LoveUI is an open-source UI library for React. It gives you ready-to-use components, backgrounds, and building blocks so you can ship polished interfaces without starting from scratch.",
  },
  {
    id: "item-2",
    title: "How do I install it?",
    content:
      "Run npx love-ui@latest add loveui in your project root. You can also copy any component manually from the docs — just grab the code and install the listed dependencies.",
  },
  {
    id: "item-3",
    title: "What do I need before I start?",
    content:
      "You need a React app with Tailwind CSS v4 and a global stylesheet. It works great with Next.js, and should drop into any other React setup too.",
  },
  {
    id: "item-4",
    title: "Can I customize the components?",
    content:
      "Yes. Components are built with Tailwind CSS, so you can change colors, spacing, typography, and more. Start with the defaults and adjust as your design evolves.",
  },
  {
    id: "item-5",
    title: "Are the components accessible?",
    content:
      "Yes. Components are built to be keyboard-friendly and screen-reader compatible. Accessibility is part of the design, not an afterthought.",
  },
  {
    id: "item-6",
    title: "Can I contribute or request a component?",
    content:
      "Yes. Open a GitHub issue to request a component or report a bug. If you want to contribute, check the Contributing Guide in the docs for step-by-step instructions.",
  },
];
