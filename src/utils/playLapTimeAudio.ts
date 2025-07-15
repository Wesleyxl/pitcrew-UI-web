// ✅ src/utils/playLapTimeAudio.ts
function formatLapTime(ms: number): string[] {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const hundredths = Math.floor((ms % 1000) / 10)

  const paths: string[] = []

  console.log(`${minutes}_${seconds}`)

  // Intro
  paths.push(`voice/lap/time_intro.wav`)

  // Minuto e segundo
  paths.push(`voice/numbers/${minutes}_${seconds}/${minutes}-${seconds}.wav`)

  //
  paths.push(`voice/numbers/point${hundredths}/ponto${hundredths}.wav`)

  return paths
}

export async function playLapTimeAudio(ms: number) {
  const files = formatLapTime(ms)

  for (const file of files) {
    await new Promise<void>((resolve) => {
      const audio = new Audio(`/${file}`)
      audio.volume = 1
      audio.onended = () => resolve()
      audio.onerror = () => resolve()
      audio.play().catch(resolve)
    })
  }
}
