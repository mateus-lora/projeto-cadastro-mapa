import { Link } from "react-router-dom";

export function Login() {
  return (
    <main className="d-flex flex-column align-items-center">
      <img src="https://placehold.co/120" alt="" width="120" className="my-4" />

      <form>
        <div className="mb-3">
          <label for="" className="form-label">
            Email:
          </label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label for="" className="form-label">
            Senha:
          </label>
          <input type="password" className="form-control" />
        </div>

        <button type="submit" class="btn btn-primary mb-4">
          Acessar
        </button>
      </form>

      <Link to="/register">Clique aqui e se cadastre</Link>
    </main>
  );
}
