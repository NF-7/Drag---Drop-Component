import { useState } from 'react';

function DropArea({ handleDragOver }) {
  const [widgets, setWidgets] = useState([]);

  function handleOnDrop(e) {
    const widgetType = e.dataTransfer.getData('widgetType');
    console.log('widgetType', widgetType);
    setWidgets([...widgets, widgetType]);
  }

  return (
    <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
      {widgets.map((widget, index) => (
        <div className="dropped-widget" key={index}>
          {widget}
        </div>
      ))}
    </div>
  );
}

export default DropArea;
