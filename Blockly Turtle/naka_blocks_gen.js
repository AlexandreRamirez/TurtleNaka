Blockly.JavaScript['avancer'] = function(block) 
{
  var dropdown_avancer_cases = block.getFieldValue('avancer_cases');
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_avancer_cases==="1")
  {
    var code = avancer();
  }
  return code;

};

Blockly.JavaScript['orienter'] = function(block) {
  var dropdown_name = block.getFieldValue('orienter');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
