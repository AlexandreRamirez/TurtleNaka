Blockly.Blocks['avancer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("avancer d'une case "), "avancer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['avancer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "avancer();";
  return code;
};

Blockly.Blocks['tourner_a_droite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tourner à droite");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['tourner_a_droite'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "tourner_a_droite();";
  return code;
};

Blockly.Blocks['tourner_a_gauche'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tourner à gauche");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['tourner_a_gauche'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "tourner_a_gauche();";
  return code;
};










