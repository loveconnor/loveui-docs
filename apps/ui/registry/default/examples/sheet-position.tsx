"use client"

import { Button } from "@/registry/default/ui/button"
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet"

export default function DialogDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger
          render={(props) => (
            <Button {...props} variant="outline">
              Updated Open Right
            </Button>
          )}
        />
        <SheetPopup showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Updated Right</SheetTitle>
            <SheetDescription>
              Updated Right side of the screen.
            </SheetDescription>
          </SheetHeader>
        </SheetPopup>
      </Sheet>
      <Sheet>
        <SheetTrigger
          render={(props) => (
            <Button {...props} variant="outline">
              Updated Open Left
            </Button>
          )}
        />
        <SheetPopup side="left" showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Updated Left</SheetTitle>
            <SheetDescription>
              Updated Left side of the screen.
            </SheetDescription>
          </SheetHeader>
        </SheetPopup>
      </Sheet>
      <Sheet>
        <SheetTrigger
          render={(props) => (
            <Button {...props} variant="outline">
              Updated Open Top
            </Button>
          )}
        />
        <SheetPopup side="top" showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Updated Top</SheetTitle>
            <SheetDescription>Updated Top of the screen.</SheetDescription>
          </SheetHeader>
        </SheetPopup>
      </Sheet>
      <Sheet>
        <SheetTrigger
          render={(props) => (
            <Button {...props} variant="outline">
              Updated Open Bottom
            </Button>
          )}
        />
        <SheetPopup side="bottom" showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>Updated Bottom</SheetTitle>
            <SheetDescription>Updated Bottom of the screen.</SheetDescription>
          </SheetHeader>
        </SheetPopup>
      </Sheet>
    </div>
  )
}
