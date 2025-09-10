import React from 'react';

interface DangerZoneProps {
  events: string[];
}

const DangerZone: React.FC<DangerZoneProps> = ({ events }) => {
  return (
    <div className="danger-zone">
      <h2>Danger Zone</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default DangerZone;