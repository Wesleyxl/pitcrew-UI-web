import "./App.css";
import F1Dashboard from "./components/F1TelemtryDash1/F1Dashboard";
import { useAlertsWithVoice } from "./hooks/useAlertsWithVoice";
import { useVoiceUnlock } from "./hooks/useVoiceUnlock";

const voicePack = {
  radioCheck: "/voice/radio_check/test-2.wav",
};

export default function App() {
  const { unlocked, unlock } = useVoiceUnlock(voicePack.radioCheck);

  // SEM IF AQUI! Hook SEMPRE CHAMADO!
  useAlertsWithVoice(unlocked);

  return (
    <div className="App">
      <h1>🏎 PitCrew Dashboard</h1>
      <div>
        {!unlocked ? (
          <button onClick={unlock}>🔊 Ativar Sons do Engenheiro Virtual</button>
        ) : (
          <div>
            <F1Dashboard />
            <p>✅ Sons Ativados! Agora o app pode falar com você.</p>
          </div>
        )}
      </div>
    </div>
  );
}
