import type { CarDamageF124Type } from "../types/f124/TelemetryTypes/car-damage.types"
import type { CarTelemetryF124Type } from "../types/f124/TelemetryTypes/car-telemetry.types"

interface Props {
  carDamage?: CarDamageF124Type | null
  carTelemetry?: CarTelemetryF124Type | null
}

const F1SvgDamage = (props: Props) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* Dianteiro Esquerdo */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          textAlign: "left",
        }}
      >
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresSurfaceTemperature[2]
            : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Temperatura</span>
        </p>
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresPressure[2].toFixed(1)
            : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>PSI</span>
        </p>
        <p>
          {props.carDamage ? 100 - props.carDamage.tyreWear[2] : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>%</span>
        </p>
        <p>
          {props.carTelemetry ? props.carTelemetry.carTelemetryData[0].brakesTemperature[2] : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Breakes Temp</span>
        </p>
      </div>
      {/* Traseiro Esquerdo */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          textAlign: "left",
        }}
      >
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresSurfaceTemperature[0]
            : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Temperatura</span>
        </p>
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresPressure[0].toFixed(1)
            : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>PSI</span>
        </p>
        <p>
          {props.carDamage ? 100 - props.carDamage.tyreWear[0] : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>%</span>
        </p>
        <p>
          {props.carTelemetry ? props.carTelemetry.carTelemetryData[0].brakesTemperature[0] : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Breakes Temp</span>
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={162}
        height={353}
        fill="none"
        viewBox="0 0 162 353"
        style={{ margin: "0 auto" }}
      >
        <path
          stroke="#fff"
          d="m68.743 4.225.533 16.52c-2.605 10.4-3.177 16.234-3.197 26.644l-2.664 51.158c-6.047 21.556-6.78 34.04-9.06 57.02l-31.973 18.651v90.592h12.79v47.428h9.058v6.394h71.941v-6.394h10.658V264.81h11.724v-90.592l-31.441-18.651c-1.619-22.334-2.908-34.81-8.526-57.02l-2.132-51.158c.401-10.562-3.197-25.58-3.197-26.112 0-.533.532-17.052.532-17.052-9.78-4.283-15.265-4.317-25.046 0Z"
        />
        {/* Asa Traseira */}
        <path
          fill="green"
          stroke="#fff"
          d="M44.197 319.132h72.54v33.105h-72.54zM50.592 306.343h59.75v9.658h-59.75z"
        />
        <path
          stroke="#fff"
          fill="green"
          d="M22.914 261.08v-29.309l26.112 17.585c11.87 10.43 14.99 18.616 17.586 37.303v15.987H49.559v-27.711H37.836V261.08H22.914ZM137.487 261.613v-29.31l-26.112 17.586c-11.869 10.43-14.99 18.616-17.586 37.303v15.986h17.053v-27.71h11.724v-13.855h14.921ZM5.862 43.126V18.08L68.743 4.224v16.52H53.29L5.862 43.126ZM94.322 4.224v16.52h14.388l46.895 22.915v-25.58L94.322 4.225Z"
        />
        {/* Pneu Traseiro Esquerdo */}
        <rect
          width={35.237}
          height={52.289}
          x={0.5}
          y={264.777}
          fill="green"
          stroke="#fff"
          rx={5.5}
        />
        {/* Pneu Traseiro Direito */}
        <rect
          width={35.237}
          height={52.289}
          x={126.263}
          y={264.777}
          fill="green"
          stroke="#fff"
          rx={2.5}
        />
        {/* Pneu Dianteiro Direito */}
        <rect
          width={28.842}
          height={52.289}
          x={132.658}
          y={49.488}
          fill="green"
          stroke="#fff"
          rx={2.5}
        />
        {/* Pneu Dianteiro Esquerdo */}
        <rect
          width={28.842}
          height={52.289}
          x={0.5}
          y={49.488}
          fill="green"
          stroke="#fff"
          rx={2.5}
        />
        {/* laterias*/}
        <path
          fill="green"
          stroke="#fff"
          d="M38.868 277.567h6.461v25.645h-6.461zM115.605 278.632h6.461v25.645h-6.461zM122 62.277h6.461v25.645H122zM33.539 62.277H40v25.645h-6.461zM23.947 183.777h21.382v45.895H23.947zM115.605 183.777h21.382v45.895h-21.382zM71.908 226.409h17.118v45.895H71.908z"
        />
        {/* Motor */}
        <path
          fill="green"
          stroke="#fff"
          d="M90.06 223.244H69.808l-9.592-6.395-2.664-35.171h12.256l3.198-5.861h14.92l3.198 6.927h12.257l-3.73 34.105-9.593 6.395ZM121.268 84.782 98.887 96.505M121.303 77.304l-22.381 9.592M121.523 74.067l-23.448-1.066M121.586 65.548l-24.513-4.263M40.732 83.716l22.382 11.723M40.697 76.239l22.381 9.592M40.477 73.001l23.448-1.065M40.414 64.482l24.513-4.263"
        />
      </svg>
      {/* dianteiro Direito */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          textAlign: "left",
        }}
      >
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresSurfaceTemperature[3]
            : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Temperatura</span>
        </p>
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresPressure[3].toFixed(1)
            : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>PSI</span>
        </p>
        <p>
          {props.carDamage ? 100 - props.carDamage.tyreWear[3] : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>%</span>
        </p>
        <p>
          {props.carTelemetry ? props.carTelemetry.carTelemetryData[0].brakesTemperature[3] : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Breakes Temp</span>
        </p>
      </div>
      {/* Traseiro Direito */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          textAlign: "left",
        }}
      >
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresSurfaceTemperature[1]
            : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Temperatura</span>
        </p>
        <p>
          {props.carTelemetry
            ? props.carTelemetry.carTelemetryData[0].tyresPressure[1].toFixed(1)
            : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>PSI</span>
        </p>
        <p>
          {props.carDamage ? 100 - props.carDamage.tyreWear[1] : "0"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>%</span>
        </p>
        <p>
          {props.carTelemetry ? props.carTelemetry.carTelemetryData[0].brakesTemperature[1] : "0 C"}
          <span style={{ opacity: 0.5, marginLeft: "10px" }}>Breakes Temp</span>
        </p>
      </div>
    </div>
  )
}
export default F1SvgDamage
