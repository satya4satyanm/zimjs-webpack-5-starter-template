new Frame(FIT, 1024, 768, light, dark, ready);

function ready() {
    new Label("ZIM Custom Cursor - Drag Square", 30, null, black).loc(50, 50).noMouse();
    // put your code here
    console.log('satya');
    new Circle(100, red)
        .center()
        .drag();

}