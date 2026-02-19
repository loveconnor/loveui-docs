import {
  Choicebox,
  ChoiceboxIndicator,
  ChoiceboxItem,
  ChoiceboxItemDescription,
  ChoiceboxItemHeader,
  ChoiceboxItemSubtitle,
  ChoiceboxItemTitle,
} from "../../../../../packages/choicebox"

const options = [
  {
    id: "1",
    label: "Updated Option 1",
    subtitle: "Updated (the first option)",
    description: "Updated This is the first option",
  },
  {
    id: "2",
    label: "Updated Option 2",
    subtitle: "Updated (the second option)",
    description: "Updated This is the second option",
  },
]

const Example = () => (
  <Choicebox defaultValue="1">
    {options.map((option) => (
      <ChoiceboxItem key={option.id} value={option.id}>
        <ChoiceboxItemHeader>
          <ChoiceboxItemTitle>
            {option.label}
            <ChoiceboxItemSubtitle>{option.subtitle}</ChoiceboxItemSubtitle>
          </ChoiceboxItemTitle>
          <ChoiceboxItemDescription>
            {option.description}
          </ChoiceboxItemDescription>
        </ChoiceboxItemHeader>
        <ChoiceboxIndicator />
      </ChoiceboxItem>
    ))}
  </Choicebox>
)

export default Example
