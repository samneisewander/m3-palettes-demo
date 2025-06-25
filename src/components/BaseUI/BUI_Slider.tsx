import { Slider } from "@base-ui-components/react";

export default function BuiSlider({ min, max, step, changeHandler }: { min: number, max: number, step: number, changeHandler: (value: (number | number[]), event: Event, activeThumbIndex: number) => void }) {

  let background = 'primary'
  let color = 'on-primary'

  /** 
   *  This is going to fire a call to updateTheme continually as the slider
   *  slides. For better performance, change the onValueChange prop to onValueCommitted
   */

  return (
    <Slider.Root defaultValue={0} min={min} max={max} step={step} onValueChange={changeHandler}>
      <Slider.Control className="flex w-56 touch-none items-center py-3 select-none">
        <Slider.Track className={`h-1 w-full rounded bg-${background} shadow-[inset_0_0_0_1px] shadow-gray-200 select-none`}>
          <Slider.Indicator className={`rounded bg-${color} select-none`} />
          <Slider.Thumb className={`size-4 rounded-full bg-${color} outline outline-1 outline-gray-300 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800`} />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}