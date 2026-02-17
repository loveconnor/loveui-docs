"use client"

import { ComponentType } from "react"
import dynamic from "next/dynamic"
import { LoaderCircleIcon } from "lucide-react"
import type { RegistryItem } from "shadcn/registry"

interface ComponentLoaderProps {
  component: RegistryItem
}

export default function ComponentLoader<TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  if (!component?.name) {
    return null
  }

  const Component = dynamic(
    () =>
      import(
        `@/registry/building-blocks/default/components/${component.name}`
      ).catch(() => () => null),
    {
      loading: () => (
        <div
          data-comp-loading="true"
          className="peer flex min-h-20 items-center justify-center"
        >
          <span className="sr-only">Loading component...</span>
          <LoaderCircleIcon
            className="-ms-1 animate-spin text-input"
            size={24}
            aria-hidden="true"
          />
        </div>
      ),
      ssr: false,
    }
  ) as ComponentType<TProps>

  return <Component {...(props as TProps)} currentPage={1} totalPages={10} />
}
