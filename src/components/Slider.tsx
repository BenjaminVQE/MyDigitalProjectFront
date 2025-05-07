import Box from '@mui/material/Box';
import { useState} from "react";

interface SliderProps {
    currentStep: number;
  }
const steps = [
    "Design mockup",
    "Informations",
    "Entreprise",
    "Confirmation"
];
export default function Slider({ currentStep }: SliderProps) {  
    return (
    <>
    <Box
        sx={{
        display: 'flex',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        p: 2,
        justifyContent: 'center',
        bgcolor: 'var(--light-bg-color)',

    }}
    >
        {steps.map((item, index) => (
        <Box
            key={item}
            sx={{
                minWidth: '300px',
                height: '50px',
                border: '2px solid #272756',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                display: 'flex',
                justifyContent: 'center',
                alignItems: ' center',
                fontSize: '2rem',
                bgcolor: index === currentStep ? "lightgreen":"var(--light-bg-color)",
                fontSizeAdjust: '0.3',
            }}
        >
            {item}
        </Box>
        ))}
    </Box>

    </>
    )
}