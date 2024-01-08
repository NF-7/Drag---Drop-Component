import { useState } from 'react';
import Widgets from './components/Widgets';

function App() {
  const [widgets, setWidgets] = useState([]);

  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData('widgetType', widgetType);
  }

  function handleOnDrop(e) {
    const widgetType = e.dataTransfer.getData("widgetType")
    console.log("widgetType", widgetType)
    setWidgets([...widgets, widgetType])
  }

  function handleDragOver(e) {
    e.preventDefault()
  }
  
    return (
      <div className="app">
        <h1>React Drag & Drop Component</h1>
          <div className="widget-container">
            <Widgets handleOnDrag={handleOnDrag} />

            <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
              {widgets.map((widget, index) => (
                <div className="dropped-widget" key={index}>
                  {widget}
                </div>
              ))}
            </div>
          </div>
      </div>
    ); 
}

export default App;
