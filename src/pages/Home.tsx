
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import googleIconImg from "../assets/google-icon.svg";

import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const History = useHistory();
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    History.push("/room/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustração de perguntas e respostas" />
        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Tire dúvidas em tempo real :D </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="" />
          <button onClick={handleCreateRoom} className="createRoom">
            <img src={googleIconImg} alt="" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Entre em uma Sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
          </form>
          <Button type="submit"> Entrar</Button>
        </div>
      </main>
    </div>
  );
}
