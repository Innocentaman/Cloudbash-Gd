import React, { useState } from 'react';

const ControlPanel = () => {
  const [settings, setSettings] = useState({
    api: '',
    color: '#000000',
  });

  const handleSave = () => {
    console.log('Save settings to backend:', settings);
    // Make a POST request to save settings to the backend
  };

  return (
    <div className="control-panel">
      <h2>Widget Control Panel</h2>
      <input
        type="text"
        placeholder="API Endpoint"
        value={settings.api}
        onChange={(e) => setSettings({ ...settings, api: e.target.value })}
      />
      <input
        type="color"
        value={settings.color}
        onChange={(e) => setSettings({ ...settings, color: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ControlPanel;
