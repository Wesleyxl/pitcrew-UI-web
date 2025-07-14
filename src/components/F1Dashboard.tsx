import { Box, Grid, GridItem, Text, VStack, HStack, Flex } from "@chakra-ui/react"
import F1SvgDamage from "./F1Damage"
import { socketTelemetry } from "api/socketTelemetry"
import { alertsSocket } from "api/socketAlert"
import React from "react"
import type { LapF124Type } from "../types/f124/TelemetryTypes/lap.types"
import type { CarTelemetryF124Type } from "../types/f124/TelemetryTypes/car-telemetry.types"
import type { CarDamageF124Type } from "../types/f124/TelemetryTypes/car-damage.types"
import type { TimeTrialF124Type } from "../types/f124/TelemetryTypes/time-trial.types"

function formatTime(ms: number): string {
  const totalSeconds = ms / 1000
  const m = Math.floor(totalSeconds / 60)
  const s = String(Math.floor(totalSeconds % 60)).padStart(2, "0")
  const msPart = String(Math.floor((totalSeconds % 1) * 1000)).padStart(3, "0")
  return `${m}:${s}.${msPart}`
}

const F1Dashboard = () => {
  const lit = 5 // exemplo de segmentos ativos

  const [lap, setLap] = React.useState<LapF124Type | null>(null)
  const [carTelemetry, setCarTelemetry] = React.useState<CarTelemetryF124Type | null>(null)
  const [carDamage, setCarDamage] = React.useState<CarDamageF124Type | null>(null)
  const [timeTrial, setTimeTrial] = React.useState<TimeTrialF124Type | null>(null)

  React.useEffect(() => {
    function onTelemetry(data: { type: string; data: any }) {
      switch (data.type) {
        case "lap":
          setLap(data.data)
          break
        case "carTelemetry":
          setCarTelemetry(data.data)
          break
        case "carDamage":
          setCarDamage(data.data)
          break
        case "timeTrial":
          setTimeTrial(data.data)
          break
        default:
          break
      }
    }
    socketTelemetry.on("telemetry", onTelemetry)
    return () => {
      socketTelemetry.off("telemetry", onTelemetry)
    }
  }, [])

  React.useEffect(() => {
    const handler = (payload: { message: string }) => {
      console.log(payload.message)

      const u = new SpeechSynthesisUtterance(payload.message)
      u.lang = "pt-BR"
      window.speechSynthesis.speak(u)
    }
    alertsSocket.on("alert", handler)
    return () => {
      alertsSocket.off("alert", handler)
    }
  }, [])
  return (
    <Grid
      templateColumns="repeat(20, 1fr)"
      templateRows="repeat(12, 1fr)"
      w="100%"
      h="100vh"
      gap={1}
      p={1}
      bg="black"
      color="white"
    >
      <GridItem colSpan={20} rowSpan={1}>
        <Flex gap={1}>
          {Array.from({ length: 20 }).map((_, i) => (
            <Box key={i} flex="1" h="8px" bg={i < lit ? "lime" : "gray.700"} borderRadius="sm" />
          ))}
        </Flex>
      </GridItem>

      <GridItem colSpan={6} rowStart={2}>
        <HStack p={4} border="1px solid gray">
          <Text fontSize="lg">Lap:</Text>
          <Text fontSize="2xl">{lap ? lap.currentLapNum : "0"}</Text>
        </HStack>
      </GridItem>

      <GridItem colSpan={8} colStart={7} rowStart={2} border="1px solid gray" p={2}>
        <Text>Voice</Text>
      </GridItem>

      <GridItem colSpan={6} colStart={15} rowStart={2}>
        <HStack p={4} border="1px solid gray">
          <Text fontSize="lg">Pos:</Text>
          <Text fontSize="2xl">10</Text>
        </HStack>
      </GridItem>

      <GridItem colSpan={8} rowStart={3} rowSpan={2} bg="yellow" border="1px solid gray" p={2}>
        <Text>Battery</Text>
      </GridItem>

      <GridItem
        colSpan={4}
        colStart={9}
        rowStart={3}
        rowSpan={4}
        bg="red.500"
        border="1px solid gray"
      >
        <Flex justify="center" align="center" h="100%" fontSize="6xl" fontWeight="bold">
          {carTelemetry ? carTelemetry.carTelemetryData[0].gear : "N"}
        </Flex>
      </GridItem>

      <GridItem colSpan={8} colStart={13} rowStart={3} rowSpan={2} border="1px solid gray">
        <VStack h="100%" justify="center">
          <Text fontSize="lg">Volta Atual:</Text>
          <Text fontSize="3xl">{lap ? formatTime(lap.currentLapTimeMs) : "0:00.000"}</Text>
        </VStack>
      </GridItem>

      <GridItem colSpan={8} rowStart={5} border="1px solid gray">
        <VStack h="100%" justify="center">
          <Text fontSize="lg">Velocidade:</Text>
          <Text fontSize="3xl">
            {carTelemetry ? `${carTelemetry.carTelemetryData[0].speed} KM` : "0"}
          </Text>
        </VStack>
      </GridItem>

      <GridItem colSpan={8} colStart={13} rowStart={5} border="1px solid gray">
        <VStack h="100%" justify="center">
          <Text fontSize="lg">Delta:</Text>
          <Text fontSize="3xl">{lap ? lap.deltaToCarInFrontMsPart : "0"}</Text>
        </VStack>
      </GridItem>

      <GridItem colSpan={8} rowStart={7} rowSpan={6} border="1px solid gray">
        <F1SvgDamage carTelemetry={carTelemetry} carDamage={carDamage} />
      </GridItem>

      <GridItem
        colSpan={4}
        colStart={9}
        rowStart={7}
        rowSpan={2}
        bg="white"
        color="black"
        fontWeight="bold"
        fontSize="2xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Overtake
      </GridItem>

      <GridItem
        colSpan={4}
        colStart={9}
        rowStart={9}
        rowSpan={2}
        bg="blue.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Rich
      </GridItem>

      <GridItem colSpan={4} colStart={9} rowStart={11}>
        <Text>+1.36</Text>
      </GridItem>

      <GridItem colSpan={4} colStart={9} rowStart={12}>
        <Text>6.0</Text>
      </GridItem>

      <GridItem colSpan={8} colStart={13} rowStart={7} rowSpan={2} border="1px solid gray">
        <VStack h="100%" justify="center">
          <Text fontSize="lg">Melhor Volta:</Text>
          <Text fontSize="3xl">
            {timeTrial ? formatTime(timeTrial.personalBest.lapTimeMs) : "0:00.000"}
          </Text>
        </VStack>
      </GridItem>

      <GridItem colSpan={8} colStart={13} rowStart={9} rowSpan={2} border="1px solid gray">
        <VStack h="100%" justify="center">
          <Text fontSize="lg">Volta Anterior:</Text>
          <Text fontSize="3xl">{lap ? formatTime(lap.lastLapTimeMs) : "0:00.000"}</Text>
        </VStack>
      </GridItem>

      <GridItem colSpan={8} colStart={13} rowStart={11} rowSpan={2} border="1px solid gray">
        <Text>Car Config</Text>
      </GridItem>
    </Grid>
  )
}

export default F1Dashboard
