import React from 'react';

const Waveform = ({ color, strokeWidth, frequency }: { color: string, strokeWidth: number, frequency: number }) => {
    const points = [];
    for (let i = 0; i <= 400; i += frequency) {
        const x = i;
        const y = Math.sin((i / 400) * 4 * Math.PI) * 30 + 50; // Ajuste a amplitude da onda conforme necessário
        points.push(`${x},${y}`);
    }
    const pathData = `M ${points.join(' L ')}`;

    return (
        <svg width="400" height="100">
            <path d={pathData} fill="none" stroke={color} strokeWidth={strokeWidth} />
        </svg>
    );
}

Waveform.defaultProps = {
    color: "black",
    strokeWidth: 2,
    frequency: 10
};

export default Waveform;
