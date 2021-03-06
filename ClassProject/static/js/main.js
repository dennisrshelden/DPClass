// Function onLoad is where any preliminary setup happens
function onLoad() {

  _2DView = new View2D();
  _3DView = new View3D();



  //!Class: your onLoad() setup functions here

  // set the class that is drawn when the mouse is clicked
  _currentElementClass = EllipseOnePointElement;

  onResize();

  // load any resources, media, etc.
  _human3D = _2DView.p5.loadModel('media/human3D.obj', false);
  _human2D = _3DView.p5.loadImage('media/human2D.png');


  // var anElement = new EllipseOnePointElement([{ x: 80, y: 80, z: 0 }]);
  // _elementList.push(anElement);

  // Data Table stuff
  _table = new DataTable("DataTableDIV", _elementList, _tableSpec);
  _table.refresh();



  //End Class: onLoad() setup functions 
}

function onResize() {

  var div2d = document.getElementById("Canvas2DDIV");
  _2DView.p5.resizeCanvas(div2d.clientWidth, div2d.clientHeight);
  var div3d = document.getElementById("Canvas2DDIV");
  _3DView.p5.resizeCanvas(div3d.clientWidth, div3d.clientHeight);

}

function onClassChange(aclass) {
  _currentElementClass = eval(aclass);
}

function onChangeAmbientValue(aval) {
  _ambientVal = aval;

}

  //!Class: any callback functions here

