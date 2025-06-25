import { Toggle } from '@base-ui-components/react/toggle';
import { ToggleGroup } from '@base-ui-components/react/toggle-group';

export default function M3SegmentedButton({ onValueChange, initial }: { onValueChange: (groupValue: any[], event: Event) => void, initial: string }) {

    return (
        <>
            <ToggleGroup
                value={[initial]}
                className={`flex p-2 gap-1 rounded-full h-[56px] bg-primary`}
                onValueChange={onValueChange}
                
            >
                <Toggle
                    aria-label="Content"
                    value="content"
                    className={`transition flex items-center justify-center rounded-l-3xl p-2 rounded-r-sm text-on-primary select-none hover:bg-primary-container hover:text-on-primary-container focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-inverse-surface active:bg-on-primary data-[pressed]:bg-on-primary data-[pressed]:text-primary`}
                >
                    <span>Content</span>
                </Toggle>
                <Toggle
                    aria-label="Expressive"
                    value="expressive"
                    className={`transition flex items-center justify-center p-2 rounded-sm text-on-primary select-none hover:bg-primary-container hover:text-on-primary-container focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-inverse-surface active:bg-on-primary data-[pressed]:bg-on-primary data-[pressed]:text-primary`}
                >
                    <span>Expressive</span>
                </Toggle>
                <Toggle
                    aria-label="Fidelity"
                    value="fidelity"
                    className={`transition flex items-center justify-center p-2 rounded-sm text-on-primary select-none hover:bg-primary-container hover:text-on-primary-container focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-inverse-surface active:bg-on-primary data-[pressed]:bg-on-primary data-[pressed]:text-primary`}
                >
                    <span>Fidelity</span>
                </Toggle>
                <Toggle
                    aria-label="Monochrome"
                    value="monochrome"
                    className={`transition flex items-center justify-center p-2 rounded-sm text-on-primary select-none hover:bg-primary-container hover:text-on-primary-container focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-inverse-surface active:bg-on-primary data-[pressed]:bg-on-primary data-[pressed]:text-primary`}
                >
                    <span>Monochrome</span>
                </Toggle>
                <Toggle
                    aria-label="Neutral"
                    value="neutral"
                    className={`transition flex items-center justify-center p-2 rounded-sm text-on-primary select-none hover:bg-primary-container hover:text-on-primary-container focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-inverse-surface active:bg-on-primary data-[pressed]:bg-on-primary data-[pressed]:text-primary`}
                >
                    <span>Neutral</span>
                </Toggle>
                <Toggle
                    aria-label="Tonal Spot"
                    value="tonalSpot"
                    className={`transition flex items-center justify-center p-2 rounded-sm text-on-primary select-none hover:bg-primary-container hover:text-on-primary-container focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-inverse-surface active:bg-on-primary data-[pressed]:bg-on-primary data-[pressed]:text-primary`}
                >
                    <span>Tonal Spot</span>
                </Toggle>
                <Toggle
                    aria-label="Vibrant"
                    value="vibrant"
                    className={`transition flex items-center justify-center p-2 rounded-r-3xl rounded-l-sm text-on-primary select-none hover:bg-primary-container hover:text-on-primary-container focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-inverse-surface active:bg-on-primary data-[pressed]:bg-on-primary data-[pressed]:text-primary`}
                >
                    <span>Vibrant</span>
                </Toggle>
            </ToggleGroup>
        </>
    )
}