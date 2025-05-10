// pages/login.js
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const PASSWORD = "luma2025"

export default function Login() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("access") === "granted") {
      router.replace("/")
    }
  }, [])

  const handleLogin = () => {
    if (input === PASSWORD) {
      localStorage.setItem("access", "granted")
      router.replace("/")
    } else {
      setError("Mot de passe incorrect.")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white text-black">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Accès au test Luma</h1>

        <input
          type="password"
          placeholder="Mot de passe"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center text-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 mt-2 bg-black text-white rounded-xl hover:bg-gray-900 transition"
        >
          Se connecter
        </button>

        {error && (
          <p className="text-red-600 text-center mt-4 font-medium">{error}</p>
        )}
      </div>
    </div>
  )
}
