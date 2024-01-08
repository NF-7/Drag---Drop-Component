import Widgets from './components/Widgets';
import DropArea from './components/DropArea';

function App() {

  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData('widgetType', widgetType);
  }

  function handleDragOver(e) {
    e.preventDefault()
  }
  
    return (
      <div className="app">
        <h1>React Drag & Drop Component</h1>
          <div className="widget-container">
            <Widgets 
              handleOnDrag={handleOnDrag} 
            />
            <DropArea 
              handleDragOver={handleDragOver}
            />
          </div>
      </div>
    ); 
}

export default App;