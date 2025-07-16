import { Box, Grid, GridItem } from "@chakra-ui/react"
import React from "react"
import { InnerDash } from "./includes/InnerDash"
import { CarGap } from "./includes/CarsGap"

const Dashboard1: React.FC = () => {
  return (
    <Grid
      w="100vw"
      h="100vh"
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(8, 1fr)"
      gap={2}
      bg="black"
      color="white"
      p={2}
    >
      <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={4} bg={"green"} />
      <GridItem colStart={3} colEnd={8} rowStart={1} rowEnd={4}>
        <InnerDash />
      </GridItem>
      <GridItem colStart={8} colEnd={-1} rowStart={1} rowEnd={4}>
        <CarGap />
      </GridItem>

      <GridItem colStart={1} colEnd={4} rowStart={4} rowEnd={-1} bg={"yellow"} />

      <GridItem colStart={4} colEnd={5} rowStart={4} rowEnd={5} bg={"red"} />
      <GridItem colStart={4} colEnd={5} rowStart={5} rowEnd={6} bg={"yellow"} />
      <GridItem colStart={4} colEnd={5} rowStart={6} rowEnd={7} bg={"blue"} />
      <GridItem colStart={4} colEnd={5} rowStart={7} rowEnd={8} bg={"green"} />
      <GridItem colStart={4} colEnd={5} rowStart={8} rowEnd={9} bg={"orange"} />

      <GridItem colStart={5} colEnd={8} rowStart={4} rowEnd={7} bg={"green"} />

      <GridItem colStart={8} colEnd={13} rowStart={4} rowEnd={7} bg={"orange  "} />

      <GridItem colStart={5} colEnd={8} rowStart={7} rowEnd={9} bg={"red"} />
      <GridItem colStart={8} colEnd={13} rowStart={7} rowEnd={9} bg={"blue"} />
    </Grid>
  )
}

export default Dashboard1
