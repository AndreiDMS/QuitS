var log, counter, qsi;

function draw() {
  qsi.update();
  console.log('Progress:', qsi.getProgress());
  //console.log('S', qsi.serialize());
  console.log('H', qsi.getHealth());
  log.innerHTML = counter++ + "<br />";
}

function start(){
	log = document.getElementById("log");
	counter = 0;
	
	qsi = new QuitS.QS();
	qsi.setQuitDate(2017, 1, 13, 20, 0);
	qsi.addCraving(new QuitS.Craving(new Date(), 2));

	draw();
}