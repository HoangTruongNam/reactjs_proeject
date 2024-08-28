import React, { useState } from 'react';
import '../asset/css/Toggle.css'
function Toggle() {
  const [toggled, setToggled] = useState(false);

  return (
    <div>
      <button className={`toggle-btn ${toggled ? 'toggled' :"" }`} onClick={() => setToggled(!toggled)}>
        <div className="thumb"></div>
      </button>
    </div>
  );
}

export default Toggle;
