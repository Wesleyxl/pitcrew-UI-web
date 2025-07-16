import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

import CarFront from "assets/f1-car1.png"

export function CarGap() {
  // quantos LEDs em cada zona
  const rpmLedsSlow = 10
  const rpmLedsMiddle = 20
  const totalLeds = 30

  // função que retorna keyframes de glow pra cor passada
  const makeGlow = (color: string) => keyframes`
    0%   { box-shadow: 0 0 4px ${color}; }
    100% { box-shadow: 0 0 16px ${color}; }
  `

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      // agora 4 linhas: LEDs, Speed/RPM, Battery, Caixinhas
      templateRows="repeat(2, 1fr)"
      gap={2}
      h="100%"
      w="100%"
    >
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
        <Flex justify="space-between" flexDir={"column"} align="center" gap={1}>
          <span>Lewis Hammithon</span>
          <img src={CarFront} alt="" style={{ width: "200px" }} />
          <span>-3.000</span>
        </Flex>
      </GridItem>
      <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
        <Flex justify="space-between" flexDir={"column"} align="center" gap={1}>
          <span>Max Verstappen</span>
          <img src={CarFront} alt="" style={{ width: "200px" }} />
          <span>-3.000</span>
        </Flex>
      </GridItem>
    </Grid>
  )
}
