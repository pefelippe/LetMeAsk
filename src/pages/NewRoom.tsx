import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

import logoImg from "../assets/logo.svg";
import illustrationImg from "../assets/illustration.svg";

import "../styles/auth.scss";

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustração de perguntas e respostas" />
        <strong>Crie salas de Q&A ao-vivo</strong>
        <p>Tire dúvidas em tempo real :D </p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <h2>Criar uma nova Sala</h2>

          <form action="">
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar Sala</Button>
          </form>

          <p>
            Entrar em sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
