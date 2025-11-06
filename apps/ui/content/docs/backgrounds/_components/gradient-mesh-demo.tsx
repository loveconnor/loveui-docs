"use client"

import { useState } from "react"

import { GradientMesh } from "@loveui/gradient-mesh"

import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/registry/default/ui/card"
import { Label } from "@/registry/default/ui/label"
import { Slider } from "@/registry/default/ui/slider"

const colorPresets = [
  {
    name: "Purple Pink",
    colors: ["#3b2a8d", "#aaa7d7", "#f75092"],
  },
  {
    name: "Ocean Blue",
    colors: ["#1e3a8a", "#3b82f6", "#06b6d4"],
  },
  {
    name: "Sunset",
    colors: ["#7c2d12", "#f97316", "#fbbf24"],
  },
  {
    name: "Forest",
    colors: ["#14532d", "#22c55e", "#84cc16"],
  },
]

type SliderRowProps = {
  label: string
  value: number
  onChange: (next: number) => void
  min: number
  max: number
  step?: number
  format?: (val: number) => string
}

function SliderRow({
  label,
  value,
  onChange,
  min,
  max,
  step = 0.1,
  format = (val) => val.toFixed(2).replace(/\.00$/, ""),
}: SliderRowProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </Label>
        <span className="text-sm tabular-nums">{format(value)}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={(next) => onChange(Array.isArray(next) ? next[0] : (next as number))}
      />
    </div>
  )
}

export default function GradientMeshDemo() {
  const [presetIndex, setPresetIndex] = useState(0)
  const [distortion, setDistortion] = useState(5)
  const [swirl, setSwirl] = useState(0.5)
  const [speed, setSpeed] = useState(1.0)
  const [scale, setScale] = useState(1)
  const [offsetX, setOffsetX] = useState(0.0)
  const [offsetY, setOffsetY] = useState(0.0)
  const [rotation, setRotation] = useState(90)
  const [waveAmp, setWaveAmp] = useState(0.1)
  const [waveFreq, setWaveFreq] = useState(10.0)
  const [waveSpeed, setWaveSpeed] = useState(0.2)
  const [grain, setGrain] = useState(0.06)

  const currentPreset = colorPresets[presetIndex] || colorPresets[0]!

  return (
    <div className="space-y-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-card">
        <div className="relative h-[460px] w-full overflow-hidden rounded-[2.2rem] border border-border/60 bg-black">
          <GradientMesh
            colors={currentPreset.colors}
            distortion={distortion}
            swirl={swirl}
            speed={speed}
            scale={scale}
            offsetX={offsetX}
            offsetY={offsetY}
            rotation={rotation}
            waveAmp={waveAmp}
            waveFreq={waveFreq}
            waveSpeed={waveSpeed}
            grain={grain}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customize</CardTitle>
          <CardDescription>
            Adjust parameters and experiment with different color presets in real time.
          </CardDescription>
        </CardHeader>
        <CardPanel className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Color Preset
            </Label>
            <div className="flex flex-wrap gap-2">
              {colorPresets.map((preset, index) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => setPresetIndex(index)}
                  className={`relative h-12 w-24 overflow-hidden rounded-2xl border-2 transition-all ${
                    index === presetIndex ? "border-foreground scale-105" : "border-border hover:border-foreground/50"
                  }`}
                >
                  <span className="sr-only">{preset.name}</span>
                  <div className="absolute inset-0 flex">
                    <span
                      className="flex-1"
                      style={{ backgroundColor: preset.colors[0] }}
                    />
                    <span
                      className="flex-1"
                      style={{ backgroundColor: preset.colors[1] }}
                    />
                    <span
                      className="flex-1"
                      style={{ backgroundColor: preset.colors[2] }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SliderRow
              label="Distortion"
              value={distortion}
              onChange={setDistortion}
              min={1}
              max={15}
              step={0.5}
            />
            <SliderRow
              label="Swirl"
              value={swirl}
              onChange={setSwirl}
              min={0}
              max={2}
              step={0.1}
            />
            <SliderRow
              label="Speed"
              value={speed}
              onChange={setSpeed}
              min={0.1}
              max={3}
              step={0.1}
            />
            <SliderRow
              label="Scale"
              value={scale}
              onChange={setScale}
              min={0.5}
              max={3}
              step={0.1}
            />
            <SliderRow
              label="Offset X"
              value={offsetX}
              onChange={setOffsetX}
              min={-1}
              max={1}
              step={0.05}
            />
            <SliderRow
              label="Offset Y"
              value={offsetY}
              onChange={setOffsetY}
              min={-1}
              max={1}
              step={0.05}
            />
            <SliderRow
              label="Rotation"
              value={rotation}
              onChange={setRotation}
              min={0}
              max={360}
              step={5}
              format={(val) => `${Math.round(val)}°`}
            />
            <SliderRow
              label="Wave Amplitude"
              value={waveAmp}
              onChange={setWaveAmp}
              min={0}
              max={0.5}
              step={0.01}
            />
            <SliderRow
              label="Wave Frequency"
              value={waveFreq}
              onChange={setWaveFreq}
              min={1}
              max={30}
              step={0.5}
            />
            <SliderRow
              label="Wave Speed"
              value={waveSpeed}
              onChange={setWaveSpeed}
              min={0.1}
              max={1}
              step={0.05}
            />
            <SliderRow
              label="Grain"
              value={grain}
              onChange={setGrain}
              min={0}
              max={0.2}
              step={0.01}
            />
          </div>
        </CardPanel>
      </Card>
    </div>
  )
}
