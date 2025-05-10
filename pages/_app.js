// pages/_app.js
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    const access = localStorage.getItem("access")
    const onLoginPage = router.pathname === "/login"

    if (access === "granted") {
      setAuthChecked(true)
    } else if (!onLoginPage) {
      router.replace("/login")
    } else {
      setAuthChecked(true)
    }
  }, [router])

  if (!authChecked) return null
  return <Component {...pageProps} />
}
