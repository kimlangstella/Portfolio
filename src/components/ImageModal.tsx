// app/components/ImpactModal.tsx
'use client';

type Props = {
  impact: string;
  onClose: () => void;
};

export default function ImpactModal({ impact, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Impact Details</h2>
        <p className="text-gray-700">{impact}</p>
      </div>
    </div>
  );
}
