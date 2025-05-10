// components/ProfileButton.js
import { useState } from 'react'
import profileDetails from '../data/profileDetails'

export default function ProfileButton({ profile }) {
  const [showDetails, setShowDetails] = useState(false)
  const key = `profile-${profile.toLowerCase()}`
  const details = profileDetails[key]
  if (!details) return null

  // Static palette for Tailwind to detect
  const palette = {
    'profile-a': {
      bg: 'bg-blue-500',
      border: 'border-blue-500',
      title: 'text-blue-600'
    },
    'profile-b': {
      bg: 'bg-green-500',
      border: 'border-green-500',
      title: 'text-green-600'
    },
    'profile-c': {
      bg: 'bg-purple-500',
      border: 'border-purple-500',
      title: 'text-purple-600'
    }
  }
  const p = palette[key]

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className={`px-4 py-2 text-white rounded ${p.bg} hover:opacity-90 transition`}
      >
        {details.title}
      </button>

      {showDetails && (
        <div className={`mt-4 border-2 rounded-lg p-4 bg-white shadow-lg ${p.border}`}>
          <h2 className={`text-xl font-semibold mb-3 ${p.title}`}>
            {details.title}
          </h2>
          <ul className="space-y-2 text-sm">
            {details.content.map(([label, value], idx) => (
              <li key={idx} className="flex">
                <span className="w-40 font-bold text-black">{label}:</span>
                <span className="text-gray-900 ml-2">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
