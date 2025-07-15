// src/utils/playPenaltiesAudio.ts

function getPenaltyAudioPath(type: string): string {
  const warningTrackLimitVoices = [
    "voice/penalties/cut_track_prac_or_qual_1/1.wav",
    "voice/penalties/cut_track_prac_or_qual_2/2.wav",
  ]

  const invalidTrackLimitVoices = [
    "voice/penalties/cut_track_race_1/1.wav",
    "voice/penalties/cut_track_race_2/2.wav",
    "voice/penalties/cut_track_race_3/3.wav",
  ]

  const genericVoices = ["voice/penalties/generic_1/1.wav", "voice/penalties/generic_2/2.wav"]

  function getRandom(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  console.log(type)

  switch (type) {
    case "warning_track_limit":
      return getRandom(warningTrackLimitVoices)
    case "invalidated_track_limit":
      return getRandom(invalidTrackLimitVoices)
    default:
      return getRandom(genericVoices)
  }
}

export async function playPenaltyAlert(type: string) {
  const audioPath = getPenaltyAudioPath(type)

  await new Promise<void>((resolve) => {
    const audio = new Audio(`/${audioPath}`)
    audio.volume = 1
    audio.onended = () => resolve()
    audio.onerror = () => resolve()
    audio.play().catch(resolve)
  })
}
