import { Link } from "react-router-dom";

export function Register() {
  return (
    <main className="d-flex flex-column align-items-center pb-5">
      <img src="https://placehold.co/120" alt="" width="120" className="my-4" />

      <form>
        <div className="mb-3">
          <label for="" className="form-label">
            Nome:
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            E-mail:
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Senha:
          </label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            Endereço:
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            CPF:
          </label>
          <input type="text" className="form-control" />
        </div>

        <button type="submit" class="btn btn-primary mb-4">
          Cadastrar
        </button>
      </form>

      <Link to="/">Voltar para login</Link>
    </main>
  );
}
