// Parameters
t = 0;
dt = 1;

var Neuron = function() {

  // Neuron parameters
  this.Vt = -45.0;
  this.Vreset = -65.0;
  this.EL = -65.0;
  this.V = this.EL*1e-3;
  this.gL = 20.0;
  this.C = 2000.0; 

  this.dT = 2.0;
  this.Vexp = -40.0;
  this.exp_act = 0.0;

  this.I = 500;

};

Neuron.prototype.update = function(t, dt) {

  // Calculate new membrane potential
  if (this.V < this.Vt*1e-3) {
    this.V = this.V + dt*1e-3*(-this.gL*1e-9*(this.V-this.EL*1e-3)/(this.C*1e-12) + this.exp_act*this.gL*1e-9*this.dT*1e-3*Math.pow(2.71, ((this.V-this.Vexp*1e-3)/(this.dT*1e-3)))/(this.C*1e-12) + this.I*1e-12/(this.C*1e-12));
  }
  else {
    this.V = this.Vreset*1e-3;
  }

};

// Neurons
neuron1 = new Neuron();
neuron2 = new Neuron();

while(true) {
	var hrstart = process.hrtime();

	neuron1.update(t, dt);
	neuron2.update(t, dt);
	t = t + dt;

	var hrend = process.hrtime(hrstart);
    console.info("Execution time: " + hrend[1]/1000 + ' us');
}
  