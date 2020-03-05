Blockly.Blocks['avancer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("avancer de "), "avancer_text")
        .appendField(new Blockly.FieldDropdown([["1","avancer_une_case"], ["2","avancer_2_cases"], ["3","avancer_3_cases"]]), "avancer_cases")
        .appendField("cases");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['orienter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("orienter vers")
        .appendField(new Blockly.FieldDropdown([["droite","droite"], ["gauche","gauche"], ["bas","bas"], ["haut","haut"]]), "orienter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};