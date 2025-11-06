"use client"

import { useState } from "react"

import { ShaderRipple } from "@loveui/shader-ripple"

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
    color1: "#FF00FF",
    color2: "#FF00FF",
    color3: "#FF6EC7",
  },
  {
    name: "Blue Cyan",
    color1: "#0000FF",
    color2: "#00FFFF",
    color3: "#00BFFF",
  },
  {
    name: "Orange Red",
    color1: "#FF4500",
    color2: "#FF6347",
    color3: "#FFD700",
  },
  {
    name: "Green Teal",
    color1: "#00FF00",
    color2: "#00FA9A",
    color3: "#00CED1",
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
  step = 0.01,
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

export default function ShaderRippleDemo() {
  const [presetIndex, setPresetIndex] = useState(0)
  const [speed, setSpeed] = useState(0.05)
  const [lineWidth, setLineWidth] = useState(0.002)
  const [rippleCount, setRippleCount] = useState(8)
  const [colorLayers, setColorLayers] = useState(3)
  const [rotation, setRotation] = useState(135)
  const [timeScale, setTimeScale] = useState(0.5)
  const [opacity, setOpacity] = useState(1.0)
  const [waveIntensity, setWaveIntensity] = useState(0)
  const [animationSpeed, setAnimationSpeed] = useState(1.0)
  const [loopDuration, setLoopDuration] = useState(0.7)
  const [scale, setScale] = useState(1)
  const [mod, setMod] = useState(0.2)

  const currentPreset = colorPresets[presetIndex] || colorPresets[0]!

  return (
    <div className="space-y-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-card">
        <div className="relative h-[460px] w-full overflow-hidden rounded-[2.2rem] border border-border/60 bg-black">
          <ShaderRipple
            speed={speed}
            lineWidth={lineWidth}
            rippleCount={rippleCount}
            colorLayers={colorLayers}
            backgroundColor="transparent"
            rotation={rotation}
            timeScale={timeScale}
            opacity={opacity}
            waveIntensity={waveIntensity}
            animationSpeed={animationSpeed}
            loopDuration={loopDuration}
            scale={scale}
            color1={currentPreset.color1}
            color2={currentPreset.color2}
            color3={currentPreset.color3}
            mod={mod}
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
                      style={{ backgroundColor: preset.color1 }}
                    />
                    <span
                      className="flex-1"
                      style={{ backgroundColor: preset.color2 }}
                    />
                    <span
                      className="flex-1"
                      style={{ backgroundColor: preset.color3 }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SliderRow
              label="Speed"
              value={speed}
              onChange={setSpeed}
              min={0.01}
              max={0.2}
              step={0.01}
            />
            <SliderRow
              label="Line Width"
              value={lineWidth}
              onChange={setLineWidth}
              min={0.001}
              max={0.01}
              step={0.001}
              format={(val) => val.toFixed(3)}
            />
            <SliderRow
              label="Ripple Count"
              value={rippleCount}
              onChange={setRippleCount}
              min={1}
              max={20}
              step={1}
              format={(val) => Math.round(val).toString()}
            />
            <SliderRow
              label="Color Layers"
              value={colorLayers}
              onChange={setColorLayers}
              min={1}
              max={3}
              step={1}
              format={(val) => Math.round(val).toString()}
            />
            <SliderRow
              label="Rotation"
              value={rotation}
              onChange={setRotation}
              min={0}
              max={360}
              step={1}
              format={(val) => `${Math.round(val)}°`}
            />
            <SliderRow
              label="Time Scale"
              value={timeScale}
              onChange={setTimeScale}
              min={0.1}
              max={2}
              step={0.1}
            />
            <SliderRow
              label="Opacity"
              value={opacity}
              onChange={setOpacity}
              min={0}
              max={1}
              step={0.05}
            />
            <SliderRow
              label="Wave Intensity"
              value={waveIntensity}
              onChange={setWaveIntensity}
              min={0}
              max={0.1}
              step={0.005}
              format={(val) => val.toFixed(3)}
            />
            <SliderRow
              label="Animation Speed"
              value={animationSpeed}
              onChange={setAnimationSpeed}
              min={0.1}
              max={3}
              step={0.1}
            />
            <SliderRow
              label="Loop Duration"
              value={loopDuration}
              onChange={setLoopDuration}
              min={0.1}
              max={2}
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
              label="Modulation"
              value={mod}
              onChange={setMod}
              min={0.01}
              max={1}
              step={0.01}
            />
          </div>
        </CardPanel>
      </Card>
    </div>
  )
}
