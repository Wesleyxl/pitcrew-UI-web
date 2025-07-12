export async function playSequence(
  words: string[],
  voicePack: Record<string, string>
) {
  for (const word of words) {
    const audio = new Audio(voicePack[word]);
    console.log("🔊 Tocando:", word);
    await new Promise<void>((resolve) => {
      audio.onended = () => resolve();
      audio.play();
    });
  }
}
