function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);               
  textAlign(CENTER, CENTER);
}

function draw() {
  background(55,120,190);
  rectMode(CENTER)

  //definisco le variabili delle dimensioni dei quadrati e il gutter
  let larghezza=19;
  let altezza=19;
  let gutter=5;
  //definisco le variabili delle probabilità
  let probblue=0;
  let probpurple=1;
  //definisco il numero di colonne e di righe
  let nwrect=floor((windowWidth*0.8)/(larghezza+gutter));
  let nhrect=floor((windowHeight*0.9)/(altezza+gutter));
  //definisco i colori dei quadrati
  let blue = color(79, 162, 154);
  let purple= color(114, 67, 131);

  //creo due cicli for per ottenere righe e colonne
  for(i=0;i<nwrect;i++){
    for(j=0; j<nhrect;j++){
      let xrect= ((windowWidth-(windowWidth*0.8))/2 + altezza/2) + i*(larghezza+gutter);
      let yrect= ((windowHeight-(windowHeight*0.9))/2 + larghezza/2)+ j*(altezza+gutter);
      noFill();
      noLoop();
      //definisco le probabilità con cui i quadrati sono azzurri o viola
      // moltiplico random per la probabilità dei due colori, se il blu è maggiore allora il colore del quadrato è il blu
      if(random() * probblue > random() * probpurple) {
        stroke(blue);
      }
      else(stroke(purple));

      //stroke(random([blue, purple]));
      strokeWeight(3);
      
      rect(xrect,yrect,larghezza,altezza,1);
      //stroke(random([blue, purple]));
      // moltiplico random per la probabilità dei due colori, se il viola è maggiore allora il colore del quadrato è il viola

      if(random() * probblue > random() * probpurple) {
        stroke(blue);
      }
      else(stroke(purple));
      //definisco il quadrato più piccolo
      rect(xrect,yrect,9,9,0.5);
    }
    //definisco i valori delle variabili
    probblue=probblue+(1/nwrect);
    probpurple=probpurple-(1/nwrect);
    //definisco la posizione e il colore della scritta
    fill("black");
    noStroke();
    fill("white")
    text("Simone Menoni", windowWidth/2, windowHeight*0.98);
   
  }



}

