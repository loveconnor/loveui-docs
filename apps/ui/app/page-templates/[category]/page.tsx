import { redirect } from "next/navigation"

type Props = {
  params: Promise<{ category: string }>
}

export default async function LegacyPageTemplatesCategoryRedirect({
  params,
}: Props) {
  const { category } = await params
  redirect(`/templates/${category}`)
}
