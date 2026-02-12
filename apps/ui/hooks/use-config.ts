import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type Config = {
  packageManager: "npm"
  installationType: "cli" | "manual"
}

const configAtom = atomWithStorage<Config>("config", {
  packageManager: "npm",
  installationType: "cli",
}, undefined, {
  // Keep SSR and first client render in sync to avoid hydration mismatches.
  getOnInit: false,
})

export function useConfig() {
  return useAtom(configAtom)
}
