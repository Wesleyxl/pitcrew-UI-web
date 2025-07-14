import { useState } from "react"

export function useVoiceUnlock(initialSoundUrl: string | null) {
  const [unlocked, setUnlocked] = useState(false)

  if (!initialSoundUrl) {
    return { unlocked, unlock: () => {} }
  }
  const unlock = () => {
    const audio = new Audio(initialSoundUrl)
    audio
      .play()
      .then(() => {
        setUnlocked(true)
        console.log("🔓 Áudio desbloqueado com sucesso")
      })
      .catch((err) => {
        console.warn("🔇 Erro ao tentar desbloquear o áudio:", err)
      })
  }

  return { unlocked, unlock }
}
