"use client"

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";

type Props = {
    className?: string;
};

export function LightDarkToggle({ className }: Props) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger
                    className={className}
                    onClick={() => {
                        setIsDarkMode(prevValue => !prevValue);
                        document.body.classList.toggle("dark")
                    }} >
                    {isDarkMode ? <MoonIcon /> : <SunIcon />}
                </TooltipTrigger>
                <TooltipContent>
                    {isDarkMode ? "Go Light Mode" : "Go Dark Mode"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider >
    )
}
