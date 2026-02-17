import type { Metadata } from "next"
import Link from "next/link"

import {
  getExampleAppCategories,
  getAllExampleApps,
} from "@/lib/example-apps"

export const metadata: Metadata = {
  title: "Example Apps - loveui",
  description:
    "Explore full example applications built with loveui components. See how to build dashboards, project management tools, and more.",
}

export default function ExampleAppsPage() {
  const categories = getExampleAppCategories()
  const allApps = getAllExampleApps()

  return (
    <div className="container py-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-heading font-bold">Example Apps</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore full example applications built with loveui components.
          See how to build real-world applications with production-ready code.
        </p>
      </div>

      {allApps.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-muted/50 p-12 text-center">
          <h3 className="mb-2 text-lg font-semibold">No example apps yet</h3>
          <p className="text-sm text-muted-foreground">
            Example apps will appear here once they are added to the registry.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryApps = allApps.filter(
              (app) => app.category === category.slug
            )

            if (categoryApps.length === 0) {
              return null
            }

            return (
              <section key={category.slug}>
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-heading font-bold">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryApps.map((app) => (
                    <Link
                      key={app.name}
                      href={`/examples/preview/${app.name}`}
                      className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/20 hover:bg-muted/50"
                    >
                      {app.isNew && (
                        <span className="absolute top-4 right-4 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          New
                        </span>
                      )}
                      <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                        {app.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                        {app.description}
                      </p>
                      {app.tags && app.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {app.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-muted px-2 py-1 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
