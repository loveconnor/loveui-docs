import { redirect } from "next/navigation"

type Props = {
  params: Promise<{ name: string }>
}

export default async function LegacyTemplatePreviewRedirect({ params }: Props) {
  const { name } = await params
  redirect(`/templates/preview/${name}`)
}
