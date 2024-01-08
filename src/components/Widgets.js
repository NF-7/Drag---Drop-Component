function Widgets({handleOnDrag}) {

    return (
      <div className="widgets">
        <div
          className="widget"
          draggable
          onDragStart={e => handleOnDrag(e, 'Widget A')}
        >
          Widget A
        </div>
        <div
          className="widget"
          draggable
          onDragStart={e => handleOnDrag(e, 'Widget B')}
        >
          Widget B
        </div>
        <div
          className="widget"
          draggable
          onDragStart={e => handleOnDrag(e, 'Widget C')}
        >
          Widget C
        </div>
      </div>
    );
}

export default Widgets;
