// Namespace
var QuitS = QuitS || {};

QuitS.HealthProgress = {
    pulseRate: {
      start: 20,
      after: 120,
      description: "The effects of quitting start to set in immediately. Within 20 minutes after your last cigarette, your heart rate will begin to drop back toward a normal level. After two hours without a cigarette, your heart rate will be close to normal levels again."
    },
    bloodPressure: {
      start: 60,
      after: 120,
      descrpition: "After two hours without a cigarette, your blood pressure will be close to normal levels again. Your blood circulation will also start to improve. The tips of your fingers and toes may start to feel warm. "
    },
    oxygenLevels: {
      start: 0,
      after: 720,
      description: "In as few as 12 hours after quitting smoking, the amount of oxygen in your blood increases to normal levels."
    },
    cmoLevel: {
      start: 0,
      after: 720,
      description: "In as few as 12 hours after quitting smoking, the carbon monoxide in your body decreases to lower levels."
    },
    riskOfCoronaryArteryDisease: {
      start: 1440,
      after: 0,
      description: "Just one full day after quitting smoking, your risk for coronary artery disease will already begin to reduce."
    },
    nicotineLevel: {
      start: 0,
      after: 4320,
      description: "At this point, the nicotine will be completely out of your body. This means that the symptoms of nicotine withdrawal may peak around this time. You might experience some physical and emotional symptoms during withdrawal."
    },
    tasteAndSmell: {
      start: 2880,
      after: 0,
      description: "Once you quit smoking for 48 hours, your nerve endings will start to regrow, and your ability to smell and taste will improve. You'll soon start to better appreciate the finer things in life."
    },
    breathing: {
      start: 0,
      after: 0,
      description: ""
    },
    energyLevel: {
      start: 0,
      after: 30240,
      description: "Within three weeks, you'll be able to exercise and perform physical activities without feeling winded. Your blood circulation and heart function will improve significantly during this time."
    },
    badBreath: {
      start: 0,
      after: 0,
      description: ""
    },
    gumsAndTeeth: {
      start: 0,
      after: 0,
      description: ""
    },
    toothStaining: {
      start: 0,
      after: 0,
      description: ""
    },
    circulation: {
      start: 120,
      after: 30240,
      description: "Within three weeks, you'll be able to exercise and perform physical activities without feeling winded. Your blood circulation and heart function will improve significantly during this time."
    },
    gumTexture: {
      start: 0,
      after: 0,
      description: ""
    },
    coughsAndWheezing: {
      start: 0,
      after: 0,
      description: ""
    },
    riskOfStroke: {
      start: 0,
      after: 525600*5,
      description: "After five to 15 years of not smoking, your risk of having a stroke is the same as that of a nonsmoker."
    },
    riskOfLungCancer: {
      start: 131400,
      after: 525600*10,
      description: "It may take 10 years, but if you quit, eventually your risk of dying from lung cancer will drop to half that of a smoker's. Ten years after quitting, your risk of getting other types of cancer also decreases."
    },
    riskOfHeartDesease: {
      start: 1440,
      after: 525600*15,
      description: "Just one full day after quitting smoking, your risk of having a heart attack starts to decline. After a year without smoking, your risk for heart disease is lowered to half that of a smoker's. This means that someone who smokes is more than twice as likely as you are to develop any type of heart disease. Fifteen years after your last cigarette, your risk for heart disease will be at the same level as that of a nonsmoker. Your risk of developing other conditions, such as arrhythmia, will also be reduced to normal levels."
    }
  };
