// Namespace
var QuitS = QuitS || {};

/**
 * lvl	: craving level, 1,2,3
 */
QuitS.Craving = function(lvl, time, place) {
  this.level = lvl || 2;
  this.time = time || new Date();
  this.place = place || null;

  return this;
};

QuitS.QS = function() {
  var self = this;

  // private data
  var prv = {
    quitDate: new Date(),
    cigPerDay: 15,
    cigPerPack: 20,
    pricePerPack: 16,
    moneyLocale: 'RON',
    cravings: []
  };

  // progress data
  var prog = {
    timeElapsed: '',
    minsNotSmoked: 0,
    hoursNotSmoked: 0,
    cigNotSmoked: 0,
    moneySaved: 0,
  };

  // health data, in [0 .. 100], after in minutes
  var health = {
    pulseRate: 0,
    bloodPressure: 0,
    oxygenLevels: 0,
    cmoLevel: 0,
    riskOfCoronaryArteryDisease: 0,
    nicotineLevel: 0,
    tasteAndSmell: 0,
    breathing: 0,
    energyLevel: 0,
    badBreath: 0,
    gumsAndTeeth: 0,
    toothStaining: 0,
    circulation: 0,
    gumTexture: 0,
    coughsAndWheezing: 0,
    riskOfStroke: 0,
    riskOfLungCancer: 0,
    riskOfHeartDesease: 0
  };

  self.update = function() {
    prog.timeElapsed = moment(prv.quitDate).fromNow();

    prog.minsNotSmoked = moment.duration(moment().diff(prv.quitDate)).asMinutes();

    prog.hoursNotSmoked = moment.duration(moment().diff(prv.quitDate)).asHours();

    var cigPerHour = prv.cigPerDay / 24;
    prog.cigNotSmoked = Math.floor(prog.hoursNotSmoked * cigPerHour);

    prog.moneySaved = prog.cigNotSmoked / 20 * prv.pricePerPack;

    self.updateHealth();
  }

  self.updateHealth = function() {
    var props = Object.keys(QuitS.HealthProgress);
    props.forEach(function(p) {
      if (QuitS.HealthProgress[p].after > 0) {
        health[p] = prog.minsNotSmoked * 100 / QuitS.HealthProgress[p].after;
        health[p] = (health[p] > 100) ? 100 : health[p];
      }
    });
  }

  self.setQuitDate = function(year, month, day, hours, minutes) {
    prv.quitDate.setFullYear(year);
    prv.quitDate.setMonth(month);
    prv.quitDate.setDate(day);
    prv.quitDate.setHours(hours);
    prv.quitDate.setMinutes(minutes);
  };

  self.getProgress = function() {
    return prog;
  };
  
  self.getHealth = function() {
    return health;
  }

  self.serialize = function() {
    return JSON.stringify(prv);
  }

  self.deserialize = function(data) {
    prv = JSON.parse(data);
  }

  self.addCraving = function(craving) {
    prv.cravings.push(craving);
  }

  return self;
};