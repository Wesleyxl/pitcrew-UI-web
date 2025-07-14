import React from "react"
import { Box, Button, Text } from "@chakra-ui/react"
import { useVoiceUnlock } from "hooks/useVoiceUnlock"
import F1Dashboard from "components/F1Dashboard"

const radioChecks = [
  "/voice/radio_check/test-1.wav",
  "/voice/radio_check/test-2.wav",
  "/voice/radio_check/test-3.wav",
  "/voice/radio_check/test-4.wav",
  "/voice/radio_check/test-5.wav",
]
const DashboardF1V1: React.FC = () => {
  const [currentSound, setCurrentSound] = React.useState<string | null>(null)
  const { unlocked, unlock } = useVoiceUnlock(currentSound)

  const handleClick = () => {
    const randomSound = radioChecks[Math.floor(Math.random() * radioChecks.length)]
    setCurrentSound(randomSound)
    unlock()
  }

  return (
    <div>
      {unlocked ? (
        <F1Dashboard />
      ) : (
        <Box bg="gray.900" color="white" minH="100vh" p={4}>
          <Text fontSize="2xl" fontWeight="bold">
            PitCrew Dashboard
          </Text>
          <Button mt={4} colorScheme="red" onClick={handleClick}>
            Start Engine
          </Button>
        </Box>
      )}
    </div>
  )
}

export default DashboardF1V1
