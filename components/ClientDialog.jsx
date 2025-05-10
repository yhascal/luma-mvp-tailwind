'use client';

import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import profileDetails from '../data/profileDetails';

export default function ClientDialog({ profile }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Voir le profil {profile}
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded p-6 max-w-xl shadow-xl">
            <Dialog.Title className="text-lg font-bold mb-4">
              {profileDetails[profile].title}
            </Dialog.Title>
            <ul>
              {profileDetails[profile].content.map(([label, value], idx) => (
                <li key={idx}><strong>{label}</strong> : {value}</li>
              ))}
            </ul>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
