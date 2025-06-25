import { useState, useEffect } from 'react'
import { updateTheme, type SchemeStringType } from 'm3-palettes'
import { HexColorPicker } from "react-colorful"
import BuiTooltip from './components/BaseUI/BUI_Tooltip'
import BuiPopover from './components/BaseUI/BUI_Popover'
import { faPalette, faSun, faMoon, faCircleHalfStroke, faToilet } from '@fortawesome/free-solid-svg-icons'
import M3IconButton from './components/M3/M3_IconButton'
import M3SegmentedButton from './components/M3/M3_SegmentedButton'
import useSound from 'use-sound'
import fartSFX from './assets/fart.mp3'
import BuiSlider from './components/BaseUI/BUI_Slider'

function App() {

    /* MATERIAL 3 COLOR */
    const [color, setColor] = useState('#32a852')
    const [contrast, setContrast] = useState(0)
    const [scheme, setScheme]: [SchemeStringType, (...args: any[]) => void] = useState('content')
    const [darkMode, setDarkMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
    const handleToggleGroupChange = (groupValue: any[]) => {
        if (!groupValue[0]) return
        const scheme = groupValue[0] as SchemeStringType
        setScheme(scheme)
        updateTheme(color, scheme, darkMode, contrast)
    }
    const handleChangeComplete = (newColor: string) => {
        setColor(newColor)
        updateTheme(newColor, scheme, darkMode, contrast)
    }
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode)
        updateTheme(color, scheme, !darkMode, contrast)
    }
    const handleContrastToggle = (value: number) => {
        setContrast(value)
        updateTheme(color, scheme, darkMode, contrast)
    }
    // Initialize theme on page load
    useEffect(() => {
        updateTheme(color, 'content', darkMode, contrast)
    }, [])

    /* COMPONENT BODY */

    return (
        <div className='max-w-screen h-fit bg-surface flex flex-col gap-5 p-20 text-on-surface items-center'>

            {/* BODY */}

            <h1>m3-palettes</h1>

            {/* COLORS */}

            <h2>Material 3 Color Roles</h2>

            <ColorSwatches />

            <div className='sticky bottom-10 flex flex-row gap-2'>
                <ThemeToggleGroup
                    handleChangeComplete={handleChangeComplete}
                    handleContrastToggle={handleContrastToggle}
                    handleDarkModeToggle={handleDarkModeToggle}
                    darkMode={darkMode}
                    color={color}
                />
                <M3SegmentedButton onValueChange={handleToggleGroupChange} initial={scheme} />
            </div>
        </div>
    )
}

function ThemeToggleGroup({
    handleChangeComplete,
    handleContrastToggle,
    handleDarkModeToggle,
    darkMode,
    color,
}: {
    handleChangeComplete: any,
    handleContrastToggle: any,
    handleDarkModeToggle: any,
    darkMode: boolean,
    color: string,
}) {
    const [play] = useSound(fartSFX);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div
                itemID='island'
                className='bg-primary h-fit rounded-full flex flex-row p-2 items-center justify-center gap-3'>
                <BuiTooltip
                    color='on-surface'
                    background='surface-container'
                    text='Change primary color'
                    side='top'
                    offset={20}>
                    <BuiPopover icon={faPalette} offset={20} background='primary' color='on-primary' side='top'>
                        <HexColorPicker color={color} onChange={handleChangeComplete} />
                    </BuiPopover>
                </BuiTooltip>
                <BuiTooltip
                    color='on-surface'
                    background='surface-container'
                    text='Toggle dark mode'
                    side='top'
                    offset={20}>
                    <M3IconButton
                        clickHandler={handleDarkModeToggle}
                        icon={darkMode ? faSun : faMoon}></M3IconButton>
                </BuiTooltip>
                <BuiTooltip
                    color='on-surface'
                    background='surface-container'
                    text='Toggle contrast level'
                    side='top'
                    offset={20}>
                    {/* TODO: FIX THE ARROW, ADD PADDING */}
                    <BuiPopover icon={faCircleHalfStroke} offset={20} side='top' background='primary' color='on-primary'>
                        <BuiSlider min={-1} max={1} step={.01}changeHandler={handleContrastToggle}/>
                    </BuiPopover>
                </BuiTooltip>
                <BuiTooltip
                    color='on-surface'
                    background='surface-container'
                    text='Do not click this.'
                    side='top'
                    offset={20}>
                    <M3IconButton icon={faToilet} clickHandler={play} />
                </BuiTooltip>
            </div>
        </div>
    )
}

function ColorSwatches() {
    return (
        <div itemID='raceway' className='w-[75vw] grid grid-cols-4 grid-rows-6 gap-1'>

            {/* ROW 1 */}
            {/* PRIMARY */}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className=' bg-primary p-2 rounded-t-sm text-sm'>
                    <p className='text-on-primary'>Primary</p>
                </div>
                <div className='bg-on-primary p-2 rounded-b-sm text-sm'>
                    <p className='text-primary'>On Primary</p>
                </div>
            </div>

            {/* SECONDARY */}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className=' bg-secondary p-2 rounded-t-sm text-sm'>
                    <p className='text-on-secondary'>Secondary</p>
                </div>
                <div className='bg-on-secondary p-2 rounded-b-sm text-sm'>
                    <p className='text-secondary'>On Secondary</p>
                </div>
            </div>

            {/* TERTIARY */}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className=' bg-tertiary p-2 rounded-t-sm text-sm'>
                    <p className='text-on-tertiary'>Tertiary</p>
                </div>
                <div className='bg-on-tertiary p-2 rounded-b-sm text-sm'>
                    <p className='text-tertiary'>On Tertiary</p>
                </div>
            </div>

            {/* ERROR */}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className=' bg-error p-2 rounded-t-sm text-sm'>
                    <p className='text-on-error'>Error</p>
                </div>
                <div className='bg-on-error p-2 rounded-b-sm text-sm'>
                    <p className='text-error'>On Error</p>
                </div>
            </div>

            {/* ROW 2 */}
            {/* PRIMARY CONTAINER*/}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className='bg-primary-container p-2 rounded-t-sm text-sm'>
                    <p className='text-on-primary-container'>Primary Container</p>
                </div>
                <div className='bg-on-primary-container p-2 rounded-b-sm text-sm'>
                    <p className='text-primary-container'>On Primary Container</p>
                </div>
            </div>
            {/* SECONDARY CONTAINER*/}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className='bg-secondary-container p-2 rounded-t-sm text-sm'>
                    <p className='text-on-secondary-container'>Secondary Container</p>
                </div>
                <div className='bg-on-secondary-container p-2 rounded-b-sm text-sm'>
                    <p className='text-secondary-container'>On Secondary Container</p>
                </div>
            </div>
            {/* TERTIARY CONTAINER*/}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className='bg-tertiary-container p-2 rounded-t-sm text-sm'>
                    <p className='text-on-tertiary-container'>Tertiary Container</p>
                </div>
                <div className='bg-on-tertiary-container p-2 rounded-b-sm text-sm'>
                    <p className='text-tertiary-container'>On Tertiary Container</p>
                </div>
            </div>
            {/* ERROR CONTAINER */}
            <div className='grid grid-rows-[2fr_1fr]'>
                <div className=' bg-error-container p-2 rounded-t-sm text-sm'>
                    <p className='text-on-error-container'>Error Container</p>
                </div>
                <div className='bg-on-error-container p-2 rounded-b-sm text-sm'>
                    <p className='text-error-container'>On Error Container</p>
                </div>
            </div>

            {/* ROW 3 */}
            {/* PRIMARY FIXED*/}
            <div className='flex flex-col'>
                <div className='rounded-t-sm grid grid-cols-2'>
                    <div className='rounded-tl-sm bg-primary-fixed p-2'>
                        <p className='text-on-primary-fixed overflow-hidden'>Primary Fixed</p>
                    </div>
                    <div className='rounded-tr-sm bg-primary-fixed-dim p-2'>
                        <p className='text-on-primary-fixed-variant overflow-hidden'>Primary Fixed Dim</p>
                    </div>
                </div>
                <div className='bg-on-primary-fixed p-2 text-sm'>
                    <p className='text-primary-fixed overflow-hidden'>On Primary Fixed</p>
                </div>
                <div className='bg-on-primary-fixed-variant rounded-b-sm p-2 text-sm'>
                    <p className='text-primary-fixed-variant overflow-hidden'>On Primary Fixed Variant</p>
                </div>
            </div>

            {/* SECONDARY FIXED*/}
            <div className='flex flex-col'>
                <div className='rounded-t-sm grid grid-cols-2'>
                    <div className='rounded-tl-sm bg-secondary-fixed p-2'>
                        <p className='text-on-secondary-fixed overflow-hidden'>Secondary Fixed</p>
                    </div>
                    <div className='rounded-tr-sm bg-secondary-fixed-dim p-2'>
                        <p className='text-on-secondary-fixed-variant overflow-hidden'>Secondary Fixed Dim</p>
                    </div>
                </div>
                <div className='bg-on-secondary-fixed p-2 text-sm'>
                    <p className='text-secondary-fixed overflow-hidden'>On Secondary Fixed</p>
                </div>
                <div className='bg-on-secondary-fixed-variant rounded-b-sm p-2 text-sm'>
                    <p className='text-secondary-fixed-variant overflow-hidden'>On Secondary Fixed Variant</p>
                </div>
            </div>

            {/* TERTIARY FIXED*/}
            <div className='flex flex-col'>
                <div className='rounded-t-sm grid grid-cols-2'>
                    <div className='rounded-tl-sm bg-tertiary-fixed p-2'>
                        <p className='text-on-tertiary-fixed overflow-hidden'>Tertiary Fixed</p>
                    </div>
                    <div className='rounded-tr-sm bg-tertiary-fixed-dim p-2'>
                        <p className='text-on-tertiary-fixed-variant overflow-hidden'>Tertiary Fixed Dim</p>
                    </div>
                </div>
                <div className='bg-on-tertiary-fixed p-2 text-sm'>
                    <p className='text-tertiary-fixed overflow-hidden'>On Tertiary Fixed</p>
                </div>
                <div className='bg-on-tertiary-fixed-variant rounded-b-sm p-2 text-sm'>
                    <p className='text-tertiary-fixed-variant overflow-hidden'>On Tertiary Fixed Variant</p>
                </div>
            </div>

            <div>{/* BLANK GRID SLOT */}</div>

            {/* ROW 4 + 5 LEFT SIDE */}

            <div className='col-span-3 grid grid-cols-15 gap-1 grid-rows-2'>
                {/* SURFACE */}
                <div className='col-span-5 bg-surface-dim p-2 border-2 border-on-surface rounded-sm text-sm'>
                    <p className='text-on-surface'>Surface Dim</p>
                </div>
                <div className='col-span-5 bg-surface p-2 border-2 border-on-surface rounded-sm text-sm'>
                    <p className='text-on-surface'>Surface</p>
                </div>
                <div className='col-span-5 bg-surface-bright p-2 border-2 border-on-surface rounded-sm text-sm'>
                    <p className='text-on-surface'>Surface Bright</p>
                </div>

                {/* SURFACE CONTAINER */}
                <div className='col-span-3 bg-surface-container-lowest p-2 rounded-sm text-sm '>
                    <p className='text-on-surface'>Surface Container Lowest</p>
                </div>
                <div className='col-span-3 bg-surface-container-low p-2 rounded-sm text-sm '>
                    <p className='text-on-surface'>Surface Container Low</p>
                </div>
                <div className='col-span-3 bg-surface-container p-2 rounded-sm text-sm '>
                    <p className='text-on-surface'>Surface Container</p>
                </div>
                <div className='col-span-3 bg-surface-container-high p-2 rounded-sm text-sm '>
                    <p className='text-on-surface'>Surface Container High</p>
                </div>
                <div className='col-span-3 bg-surface-container-highest p-2 rounded-sm text-sm '>
                    <p className='text-on-surface'>Surface Container Highest</p>
                </div>
            </div>

            {/* ROW 4 + 5 RIGHT SIDE */}

            <div className='grid grid-rows-3 gap-1'>
                <div className='bg-inverse-surface p-2 rounded-sm text-sm '>
                    <p className='text-inverse-on-surface'>Inverse Surface</p>
                </div>
                <div className='bg-inverse-on-surface p-2 rounded-sm text-sm '>
                    <p className='text-inverse-surface'>Inverse On Surface</p>
                </div>
                <div className='bg-inverse-primary p-2 rounded-sm text-sm '>
                    <p className='text-primary'>Inverse Primary</p>
                </div>
            </div>

            {/* ROW 6 */}

            {/* SURFACE EXTRAS */}
            <div className='col-span-3 grid grid-cols-4 gap-1'>
                <div className='bg-on-surface p-2 rounded-sm text-sm '>
                    <p className='text-surface'>On Surface</p>
                </div>
                <div className='bg-on-surface-variant p-2 rounded-sm text-sm '>
                    <p className='text-surface'>On Surface Variant</p>
                </div>
                <div className='bg-outline p-2 rounded-sm text-sm '>
                    <p className='text-surface'>Outline</p>
                </div>
                <div className='bg-outline-variant p-2 rounded-sm text-sm '>
                    <p className='text-variant'>Outline Variant</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-1'>
                <div className='bg-scrim p-2 rounded-sm text-sm '>
                    <p className='text-white'>Scrim</p>
                </div>
                <div className='bg-shadow p-2 rounded-sm text-sm '>
                    <p className='text-white'>Shadow</p>
                </div>
            </div>

        </div>
    )
}

export default App
