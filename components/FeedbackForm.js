// components/FeedbackForm.js
import { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: '',
    comments: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-xl font-semibold">📝 Feedback rapide</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">🟢 Forces</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.strengths}
            onChange={handleChange('strengths')}
          />
        </div>
        <div>
          <label className="block font-medium">🔴 Faiblesses</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.weaknesses}
            onChange={handleChange('weaknesses')}
          />
        </div>
        <div>
          <label className="block font-medium">🟡 Opportunités</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.opportunities}
            onChange={handleChange('opportunities')}
          />
        </div>
        <div>
          <label className="block font-medium">⚠️ Menaces</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.threats}
            onChange={handleChange('threats')}
          />
        </div>
      </div>
      <div>
        <label className="block font-medium">💬 Autres commentaires</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          value={formData.comments}
          onChange={handleChange('comments')}
        />
      </div>
    </div>
  );
}
