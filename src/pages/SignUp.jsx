import { Input } from "../components/Input";
import { DefaultLayout } from "../layouts/App";

export function SignIn() {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="mb-6 text-[#0EA5E9] text-3xl">
          Aluritter
        </h1>

        <form className="w-96 flex flex-col gap-2">
          <Input
            placeholder="email@exemplo.com"
          />
          
          <Input
            placeholder="Senha"
            type="password"
          />

          <button className="mt-6 p-3 bg-green-500 text-gray-50 rounded transition-colors hover:bg-green-400 focus:outline-green-900">
            Acessar plataforma
          </button>
        </form>

        <a href="#" className="text-sm mt-1 focus:outline-none focus:underline">
          Não possui uma conta?
          <span className="text-[#0EA5E9]">Crie uma agora!</span>
        </a>
      </div>
    </DefaultLayout>
  )
}