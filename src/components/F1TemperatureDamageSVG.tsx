import React from "react";

interface F1VisualizerProps {
  /** Tire temperatures in °C (array of four values: RL, RR, FL, FR) */
  tireTemps: [number, number, number, number];
  /** Body damage percentage (0–100) */
  bodyDamage: number;
}

/**
 * Map a temperature (0–100) to a color gradient from blue (cold) through yellow to red (hot).
 */
function getTemperatureColor(temp: number): string {
  const clamped = Math.max(0, Math.min(100, temp));
  if (clamped <= 50) {
    const ratio = clamped / 50;
    // blue (0,0,255) -> yellow (255,255,0)
    const r = Math.round(255 * ratio);
    const g = Math.round(255 * ratio);
    return `rgb(${r}, ${g}, 0)`;
  } else {
    const ratio = (clamped - 50) / 50;
    // yellow (255,255,0) -> red (255,0,0)
    const g = Math.round(255 * (1 - ratio));
    return `rgb(255, ${g}, 0)`;
  }
}

/**
 * Map a damage percentage (0–100) to a semi-transparent overlay from transparent (no damage) to red (full damage).
 */
function getDamageOverlay(bodyDamage: number): string {
  const clamped = Math.max(0, Math.min(100, bodyDamage));
  const alpha = (clamped / 100) * 0.6; // max 0.6 opacity
  return `rgba(255, 0, 0, ${alpha})`;
}

/**
 * SVG component showing a simplified F1 silhouette with tires colored by temperature
 * and body overlaid by damage tint.
 */
const F1TemperatureDamageSVG: React.FC<F1VisualizerProps> = ({
  tireTemps,
  bodyDamage,
}) => {
  const damageColor = getDamageOverlay(bodyDamage);

  // Positions for the tire circles: RL, RR, FL, FR
  const tirePositions = [
    { cx: 60, cy: 80 }, // Rear-left
    { cx: 240, cy: 80 }, // Rear-right
    { cx: 60, cy: 30 }, // Front-left
    { cx: 240, cy: 30 }, // Front-right
  ];

  return (
    <svg
      width={300}
      height={110}
      viewBox="0 0 300 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car body */}
      <path
        d="M20,40 L280,40 L260,70 L40,70 Z"
        fill="#555"
        stroke="#333"
        strokeWidth={2}
      />
      {/* Damage overlay on body */}
      <path d="M20,40 L280,40 L260,70 L40,70 Z" fill={damageColor} />

      {/* Tires colored by temperature */}
      {tireTemps.map((temp, idx) => {
        const pos = tirePositions[idx];
        return (
          <circle
            key={idx}
            cx={pos.cx}
            cy={pos.cy}
            r={15}
            fill={getTemperatureColor(temp)}
            stroke="#000"
            strokeWidth={1}
          />
        );
      })}
    </svg>
  );
};

export default F1TemperatureDamageSVG;
