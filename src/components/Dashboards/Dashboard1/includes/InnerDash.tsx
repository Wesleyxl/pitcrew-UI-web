import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import SoftImage from "assets/tyres/F1_tire_Pirelli_PZero_Red_18.png"

export function InnerDash() {
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
      templateColumns="1fr 2fr 1fr"
      // agora 4 linhas: LEDs, Speed/RPM, Battery, Caixinhas
      templateRows="auto auto auto auto"
      gap={2}
      h="100%"
      w="100%"
      p={2}
    >
      {/* Linha 1: LEDs de RPM */}
      <GridItem colStart={1} colEnd={4} rowStart={1} rowEnd={2}>
        <Flex justify="center" align="center" gap={1}>
          {Array.from({ length: totalLeds }).map((_, i) => {
            // define cor CSS
            const color =
              i < rpmLedsSlow
                ? "#00FF00" // verde
                : i < rpmLedsMiddle
                  ? "#FFFF00" // amarelo
                  : "#FF0000" // vermelho

            // cria keyframes para essa cor
            const glow = makeGlow(color)

            return (
              <Box
                key={i}
                w="16px"
                h="16px"
                bg={color}
                borderRadius="50%"
                // aplica a animação
                animation={`${glow} 1s ease-in-out infinite alternate`}
              />
            )
          })}
        </Flex>
      </GridItem>

      {/* Linha 2 */}
      {/* 1. Velocidade + RPM */}
      <GridItem colStart={1} colEnd={2} rowStart={2} rowEnd={3}>
        <Text fontSize="7xl" fontWeight="bold" color={"red"} textAlign={"right"}>
          150
          <span style={{ fontSize: "20px", color: "white" }}>km</span>
        </Text>
        <Flex bg={"white"} w={"50%"} justify={"right"} textAlign={"right"} ml={"auto"} h={1} />
        <Text fontSize="3xl" mt={2} color="yellow.300" textAlign={"right"}>
          9496
          <span style={{ fontSize: "16px", color: "white" }}>RPM</span>
        </Text>
      </GridItem>

      {/* 2. Marcha (spans Speed + Battery rows) */}
      <GridItem
        colStart={2}
        colEnd={3}
        rowStart={2}
        rowEnd={4}
        display="flex"
        alignItems="start"
        justifyContent="center"
      >
        <Text fontSize="140px" fontWeight="black" style={{ padding: "0", margin: "0" }}>
          4
        </Text>
      </GridItem>

      {/* 3. Pneu (ícone/texto) */}
      <GridItem
        colStart={3}
        colEnd={4}
        rowStart={2}
        rowEnd={3}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={SoftImage} alt="tyre" style={{ width: "70%", margin: "0 auto 20px auto" }} />
      </GridItem>

      {/* Linha 3: Battery (agora row 3) */}
      <GridItem colStart={1} colEnd={4} rowStart={3} rowEnd={4} textAlign="center">
        <Box
          height="20px"
          w={"80%"}
          bg="gray.700"
          borderRadius="4px"
          overflow="hidden"
          m={"0 auto"}
        >
          <Box width="40%" height="100%" bg="yellow.400" />
        </Box>
      </GridItem>

      {/* Linha 4: As duas caixinhas com a barra branca */}
      <GridItem colStart={1} colEnd={4} rowStart={4} rowEnd={5}>
        <Grid templateColumns="1fr 1fr" gap={2}>
          {/* primeira caixinha */}
          <Box bg="gray.700" p={2}>
            <Box height="8px" bg="white" borderRadius="4px" />
          </Box>
          {/* segunda caixinha */}
          <Box bg="gray.700" p={2}>
            <Box height="8px" bg="white" borderRadius="4px" />
          </Box>
        </Grid>
      </GridItem>
    </Grid>
  )
}
