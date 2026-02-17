# Example Apps

This directory contains full example applications that showcase loveui components in real-world contexts.

## Structure

```
registry/example-apps/default/
├── starter-dashboard/          # Example app folder
│   ├── metadata.json          # App metadata and configuration
│   ├── app/                   # Next.js app directory
│   │   ├── page.tsx          # Main page
│   │   └── layout.tsx        # Layout wrapper
│   └── components/            # App-specific components
│       ├── sidebar.tsx
│       └── header.tsx
└── your-app-name/            # Add your app here
```

## Adding a New Example App

### 1. Create the App Directory

Create a new folder in `registry/example-apps/default/` with your app name (use kebab-case):

```bash
mkdir registry/example-apps/default/my-project-manager
```

### 2. Create metadata.json

Create a `metadata.json` file in your app directory:

```json
{
  "title": "Project Manager",
  "description": "A full-featured project management application with task tracking, team collaboration, and analytics",
  "category": "project-management",
  "tags": ["kanban", "tasks", "collaboration"],
  "isNew": true,
  "files": [
    {
      "path": "app/page.tsx",
      "type": "page"
    },
    {
      "path": "app/layout.tsx",
      "type": "layout"
    },
    {
      "path": "components/kanban-board.tsx",
      "type": "component"
    }
  ],
  "routes": [
    {
      "path": "/",
      "title": "Dashboard",
      "description": "Project overview and stats"
    },
    {
      "path": "/projects",
      "title": "Projects",
      "description": "All projects list"
    }
  ]
}
```

**Available categories:**
- `dashboards` - Dashboard applications
- `project-management` - Project and task management
- `e-commerce` - Shopping and product catalogs
- `social` - Social networking apps
- `productivity` - Productivity tools

**File types:**
- `page` - Page components
- `layout` - Layout components
- `component` - Reusable components
- `config` - Configuration files
- `style` - CSS/style files
- `lib` - Utility functions
- `other` - Other files

### 3. Create the App Structure

Your app should follow Next.js app directory structure:

```
my-project-manager/
├── metadata.json
├── app/
│   ├── page.tsx              # Main entry point (required)
│   ├── layout.tsx            # Optional layout wrapper
│   ├── projects/
│   │   └── page.tsx          # Additional routes
│   └── globals.css           # Optional styles
├── components/               # App-specific components
│   ├── kanban-board.tsx
│   ├── task-card.tsx
│   └── team-avatar.tsx
└── lib/                      # Utility functions
    ├── utils.ts
    └── api.ts
```

### 4. Create the Main Page Component

Create `app/page.tsx` as your main entry point:

```tsx
"use client"

import { KanbanBoard } from "../components/kanban-board"
import { Header } from "../components/header"

export default function ProjectManagerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>
        <KanbanBoard />
      </main>
    </div>
  )
}
```

### 5. Register Your App

Add your app to the registry in `lib/example-apps/registry.ts`:

```typescript
export const EXAMPLE_APPS: Record<string, ExampleApp> = {
  // ... existing apps
  "my-project-manager": {
    name: "my-project-manager",
    slug: "my-project-manager",
    title: "Project Manager",
    description: "A full-featured project management application",
    category: "project-management",
    tags: ["kanban", "tasks", "collaboration"],
    isNew: true,
    files: [
      { path: "app/page.tsx", type: "page" },
      { path: "app/layout.tsx", type: "layout" },
      { path: "components/kanban-board.tsx", type: "component" },
    ],
    routes: [
      { path: "/", title: "Dashboard" },
      { path: "/projects", title: "Projects" },
    ],
  },
}
```

And add it to the category:

```typescript
export const EXAMPLE_APP_CATEGORIES: ExampleAppCategory[] = [
  // ...
  {
    slug: "project-management",
    name: "Project Management",
    description: "Project and task management applications",
    apps: [
      { name: "my-project-manager" }, // Add here
    ],
  },
]
```

### 6. Test Your App

Your app will be available at:
- List view: `/examples`
- Preview: `/examples/preview/my-project-manager`

Run the dev server and navigate to these URLs to test your app.

## Best Practices

1. **Use loveui Components**: Showcase loveui components in realistic contexts
2. **Keep it Self-Contained**: Each app should work independently
3. **Add Mock Data**: Use realistic mock data for demonstrations
4. **Make it Interactive**: Add interactivity to showcase component capabilities
5. **Follow Design System**: Use consistent styling with the loveui theme
6. **Document Complex Features**: Add comments for non-obvious functionality
7. **Responsive Design**: Ensure your app works on all screen sizes
8. **Accessibility**: Follow ARIA guidelines and keyboard navigation

## Example App Ideas

- **Analytics Dashboard** - Charts, metrics, data visualization
- **E-commerce Store** - Product listings, cart, checkout
- **Task Manager** - Kanban board, task lists, filters
- **Social Feed** - Posts, comments, likes, sharing
- **Email Client** - Inbox, compose, folders
- **Calendar App** - Event scheduling, month/week views
- **Note Taking** - Rich text editor, folders, search
- **CRM Dashboard** - Customer data, pipelines, reports
- **Finance Tracker** - Expenses, budgets, graphs
- **Team Chat** - Messages, channels, notifications

## Troubleshooting

**App not loading?**
- Check that your `app/page.tsx` exports a default component
- Verify the file path in the registry matches your folder structure
- Check for TypeScript errors in your components

**Styles not working?**
- Ensure you're using Tailwind classes from the loveui design system
- Check that your layout includes necessary CSS imports

**Components not found?**
- Verify import paths are correct
- Use `@/registry/example-apps/default/your-app/...` for absolute imports
- Or use relative imports within your app

## Need Help?

Check the `starter-dashboard` example for a complete reference implementation.
