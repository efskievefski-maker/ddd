'use client';

import React, { useEffect, useState } from 'react';

export default function OrderButton() {
  const [isEditorMode, setIsEditorMode] = useState(false);

  useEffect(() => {
    // Check if we're in v0 editor/design mode by looking for design mode indicator
    const isInEditorMode = document.documentElement.classList.contains('v0-design-mode-active') || 
                           typeof window !== 'undefined' && (window as any).__v0_editor_mode__ === true;
    
    setIsEditorMode(isInEditorMode);
  }, []);

  // Only show button in editor mode, hide in production
  if (!isEditorMode) {
    return null;
  }

  return (
    <button 
      onClick={() => alert('Поръчката е приета!')}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200"
    >
      Поръчай сега
    </button>
  );
}
