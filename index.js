// Parameters
t = 0;
dt = 1;

// Neuron parameters
Vt = -45.0;
Vreset = -65.0;
EL = -65.0;
V = EL*1e-3;
gL = 20.0;
C = 2000.0; 

dT = 2.0;
Vexp = -40.0;
exp_act = 0.0;

I = 500;

while(true) {
	var hrstart = process.hrtime();

	neuron_update();
	t = t + dt;

	var hrend = process.hrtime(hrstart);
    console.info("Execution time: " + hrend[1]/1000 + ' us');
}

function neuron_update() {

  // Calculate new membrane potential
  if (V < Vt*1e-3) {
    V = V + dt*1e-3*(-gL*1e-9*(V-EL*1e-3)/(C*1e-12) + exp_act*gL*1e-9*dT*1e-3*Math.pow(2.71, ((V-Vexp*1e-3)/(dT*1e-3)))/(C*1e-12) + I*1e-12/(C*1e-12));
  }
  else {
    V = Vreset*1e-3;
  } 

  //console.log(V*1000);

}

  