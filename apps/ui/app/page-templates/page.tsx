import { redirect } from "next/navigation"

export default function LegacyPageTemplatesIndexRedirect() {
  redirect("/templates")
}
