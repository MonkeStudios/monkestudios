gdjs.PauseCode = {};
gdjs.PauseCode.GDPausedObjects1= [];
gdjs.PauseCode.GDPausedObjects2= [];
gdjs.PauseCode.GDMonkePauseObjects1= [];
gdjs.PauseCode.GDMonkePauseObjects2= [];
gdjs.PauseCode.GDQuitObjects1= [];
gdjs.PauseCode.GDQuitObjects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};
gdjs.PauseCode.condition2IsTrue_0 = {val:false};
gdjs.PauseCode.conditionTrue_1 = {val:false};
gdjs.PauseCode.condition0IsTrue_1 = {val:false};
gdjs.PauseCode.condition1IsTrue_1 = {val:false};
gdjs.PauseCode.condition2IsTrue_1 = {val:false};


gdjs.PauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Paused")) == 3;
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Paused").setNumber(1);
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Paused").add(1);
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Paused")) == 1;
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition1IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9623244);
}
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{


{
}

}


};

gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDPausedObjects1.length = 0;
gdjs.PauseCode.GDPausedObjects2.length = 0;
gdjs.PauseCode.GDMonkePauseObjects1.length = 0;
gdjs.PauseCode.GDMonkePauseObjects2.length = 0;
gdjs.PauseCode.GDQuitObjects1.length = 0;
gdjs.PauseCode.GDQuitObjects2.length = 0;

gdjs.PauseCode.eventsList0(runtimeScene);

return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
