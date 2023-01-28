gdjs.GameCode = {};
gdjs.GameCode.GDSpaceMonkeObjects1= [];
gdjs.GameCode.GDSpaceMonkeObjects2= [];
gdjs.GameCode.GDSpaceMonkeObjects3= [];
gdjs.GameCode.GDSpaceMonkeObjects4= [];
gdjs.GameCode.GDBroccObjects1= [];
gdjs.GameCode.GDBroccObjects2= [];
gdjs.GameCode.GDBroccObjects3= [];
gdjs.GameCode.GDBroccObjects4= [];
gdjs.GameCode.GDMonkeSpawnObjects1= [];
gdjs.GameCode.GDMonkeSpawnObjects2= [];
gdjs.GameCode.GDMonkeSpawnObjects3= [];
gdjs.GameCode.GDMonkeSpawnObjects4= [];
gdjs.GameCode.GDEnemySpawnObjects1= [];
gdjs.GameCode.GDEnemySpawnObjects2= [];
gdjs.GameCode.GDEnemySpawnObjects3= [];
gdjs.GameCode.GDEnemySpawnObjects4= [];
gdjs.GameCode.GDspace_95bgObjects1= [];
gdjs.GameCode.GDspace_95bgObjects2= [];
gdjs.GameCode.GDspace_95bgObjects3= [];
gdjs.GameCode.GDspace_95bgObjects4= [];
gdjs.GameCode.GDpizzaObjects1= [];
gdjs.GameCode.GDpizzaObjects2= [];
gdjs.GameCode.GDpizzaObjects3= [];
gdjs.GameCode.GDpizzaObjects4= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];
gdjs.GameCode.GDScoreObjects4= [];
gdjs.GameCode.GDDarkOverlayObjects1= [];
gdjs.GameCode.GDDarkOverlayObjects2= [];
gdjs.GameCode.GDDarkOverlayObjects3= [];
gdjs.GameCode.GDDarkOverlayObjects4= [];
gdjs.GameCode.GDPauseObjects1= [];
gdjs.GameCode.GDPauseObjects2= [];
gdjs.GameCode.GDPauseObjects3= [];
gdjs.GameCode.GDPauseObjects4= [];
gdjs.GameCode.GDHealthBarObjects1= [];
gdjs.GameCode.GDHealthBarObjects2= [];
gdjs.GameCode.GDHealthBarObjects3= [];
gdjs.GameCode.GDHealthBarObjects4= [];
gdjs.GameCode.GDRestartObjects1= [];
gdjs.GameCode.GDRestartObjects2= [];
gdjs.GameCode.GDRestartObjects3= [];
gdjs.GameCode.GDRestartObjects4= [];
gdjs.GameCode.GDQuitObjects1= [];
gdjs.GameCode.GDQuitObjects2= [];
gdjs.GameCode.GDQuitObjects3= [];
gdjs.GameCode.GDQuitObjects4= [];
gdjs.GameCode.GDYourScoreObjects1= [];
gdjs.GameCode.GDYourScoreObjects2= [];
gdjs.GameCode.GDYourScoreObjects3= [];
gdjs.GameCode.GDYourScoreObjects4= [];
gdjs.GameCode.GDGameOverScoreObjects1= [];
gdjs.GameCode.GDGameOverScoreObjects2= [];
gdjs.GameCode.GDGameOverScoreObjects3= [];
gdjs.GameCode.GDGameOverScoreObjects4= [];
gdjs.GameCode.GDGameOverObjects1= [];
gdjs.GameCode.GDGameOverObjects2= [];
gdjs.GameCode.GDGameOverObjects3= [];
gdjs.GameCode.GDGameOverObjects4= [];
gdjs.GameCode.GDSubmitScoreObjects1= [];
gdjs.GameCode.GDSubmitScoreObjects2= [];
gdjs.GameCode.GDSubmitScoreObjects3= [];
gdjs.GameCode.GDSubmitScoreObjects4= [];
gdjs.GameCode.GDAccelarrotObjects1= [];
gdjs.GameCode.GDAccelarrotObjects2= [];
gdjs.GameCode.GDAccelarrotObjects3= [];
gdjs.GameCode.GDAccelarrotObjects4= [];
gdjs.GameCode.GDAccelarrotrailObjects1= [];
gdjs.GameCode.GDAccelarrotrailObjects2= [];
gdjs.GameCode.GDAccelarrotrailObjects3= [];
gdjs.GameCode.GDAccelarrotrailObjects4= [];
gdjs.GameCode.GDHeatSeekerObjects1= [];
gdjs.GameCode.GDHeatSeekerObjects2= [];
gdjs.GameCode.GDHeatSeekerObjects3= [];
gdjs.GameCode.GDHeatSeekerObjects4= [];
gdjs.GameCode.GDUprootObjects1= [];
gdjs.GameCode.GDUprootObjects2= [];
gdjs.GameCode.GDUprootObjects3= [];
gdjs.GameCode.GDUprootObjects4= [];
gdjs.GameCode.GDPowerUpSpawnObjects1= [];
gdjs.GameCode.GDPowerUpSpawnObjects2= [];
gdjs.GameCode.GDPowerUpSpawnObjects3= [];
gdjs.GameCode.GDPowerUpSpawnObjects4= [];
gdjs.GameCode.GDDonutObjects1= [];
gdjs.GameCode.GDDonutObjects2= [];
gdjs.GameCode.GDDonutObjects3= [];
gdjs.GameCode.GDDonutObjects4= [];
gdjs.GameCode.GDBurgerObjects1= [];
gdjs.GameCode.GDBurgerObjects2= [];
gdjs.GameCode.GDBurgerObjects3= [];
gdjs.GameCode.GDBurgerObjects4= [];
gdjs.GameCode.GDUpSpawnObjects1= [];
gdjs.GameCode.GDUpSpawnObjects2= [];
gdjs.GameCode.GDUpSpawnObjects3= [];
gdjs.GameCode.GDUpSpawnObjects4= [];
gdjs.GameCode.GDtimertestObjects1= [];
gdjs.GameCode.GDtimertestObjects2= [];
gdjs.GameCode.GDtimertestObjects3= [];
gdjs.GameCode.GDtimertestObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DarkOverlay"), gdjs.GameCode.GDDarkOverlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.GameCode.GDEnemySpawnObjects2);
gdjs.copyArray(runtimeScene.getObjects("MonkeSpawn"), gdjs.GameCode.GDMonkeSpawnObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDarkOverlayObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDarkOverlayObjects2[i].setOpacity(135);
}
}{runtimeScene.getVariables().get("Health").setNumber(3);
}{for(var i = 0, len = gdjs.GameCode.GDMonkeSpawnObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMonkeSpawnObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemySpawnObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemySpawnObjects2[i].hide();
}
}{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}{runtimeScene.getGame().getVariables().get("Paused").setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9542044);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BroccSpawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CarrotSpawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PizzaCooldown");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HeatSpawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PowerUpSpawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UprootSpawn");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("space_bg"), gdjs.GameCode.GDspace_95bgObjects1);
gdjs.copyArray(runtimeScene.getObjects("timertest"), gdjs.GameCode.GDtimertestObjects1);
{for(var i = 0, len = gdjs.GameCode.GDspace_95bgObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDspace_95bgObjects1[i].setXOffset(gdjs.GameCode.GDspace_95bgObjects1[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Score")));
}
}{for(var i = 0, len = gdjs.GameCode.GDtimertestObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtimertestObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "BroccSpawn")));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects1Objects = Hashtable.newFrom({"SpaceMonke": gdjs.GameCode.GDSpaceMonkeObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9545436);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MonkeSpawn"), gdjs.GameCode.GDMonkeSpawnObjects1);
gdjs.GameCode.GDSpaceMonkeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects1Objects, (( gdjs.GameCode.GDMonkeSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDMonkeSpawnObjects1[0].getPointX("")), (( gdjs.GameCode.GDMonkeSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDMonkeSpawnObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDSpaceMonkeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpaceMonkeObjects1[i].setSize(64, 64);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemySpawnObjects2Objects = Hashtable.newFrom({"EnemySpawn": gdjs.GameCode.GDEnemySpawnObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBroccObjects2Objects = Hashtable.newFrom({"Brocc": gdjs.GameCode.GDBroccObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.GameCode.GDEnemySpawnObjects2);
gdjs.copyArray(gdjs.GameCode.GDBroccObjects1, gdjs.GameCode.GDBroccObjects2);

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemySpawnObjects2Objects);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BroccSpawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBroccObjects2Objects, (( gdjs.GameCode.GDEnemySpawnObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemySpawnObjects2[0].getX()), (( gdjs.GameCode.GDEnemySpawnObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemySpawnObjects2[0].getY()), "");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBroccObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBroccObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBroccObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BroccSpawn") > 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Accelarrot"), gdjs.GameCode.GDAccelarrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Brocc"), gdjs.GameCode.GDBroccObjects1);
gdjs.copyArray(runtimeScene.getObjects("HeatSeeker"), gdjs.GameCode.GDHeatSeekerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Uproot"), gdjs.GameCode.GDUprootObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBroccObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBroccObjects1[i].setSize(64, 64);
}
for(var i = 0, len = gdjs.GameCode.GDAccelarrotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAccelarrotObjects1[i].setSize(64, 64);
}
for(var i = 0, len = gdjs.GameCode.GDHeatSeekerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeatSeekerObjects1[i].setSize(64, 64);
}
for(var i = 0, len = gdjs.GameCode.GDUprootObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUprootObjects1[i].setSize(64, 64);
}
}{for(var i = 0, len = gdjs.GameCode.GDBroccObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBroccObjects1[i].setZOrder(6);
}
for(var i = 0, len = gdjs.GameCode.GDAccelarrotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAccelarrotObjects1[i].setZOrder(6);
}
for(var i = 0, len = gdjs.GameCode.GDHeatSeekerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeatSeekerObjects1[i].setZOrder(6);
}
for(var i = 0, len = gdjs.GameCode.GDUprootObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUprootObjects1[i].setZOrder(6);
}
}{for(var i = 0, len = gdjs.GameCode.GDBroccObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBroccObjects1[i].setX(gdjs.GameCode.GDBroccObjects1[i].getX() - (8));
}
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemySpawnObjects1Objects = Hashtable.newFrom({"EnemySpawn": gdjs.GameCode.GDEnemySpawnObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAccelarrotObjects1Objects = Hashtable.newFrom({"Accelarrot": gdjs.GameCode.GDAccelarrotObjects1});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAccelarrotObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDAccelarrotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAccelarrotObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CarrotSpawn") > 5;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.GameCode.GDEnemySpawnObjects1);
/* Reuse gdjs.GameCode.GDAccelarrotObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CarrotSpawn");
}{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemySpawnObjects1Objects);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAccelarrotObjects1Objects, (( gdjs.GameCode.GDEnemySpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemySpawnObjects1[0].getX()), (( gdjs.GameCode.GDEnemySpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDEnemySpawnObjects1[0].getY()), "");
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Accelarrot"), gdjs.GameCode.GDAccelarrotObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAccelarrotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAccelarrotObjects1[i].setX(gdjs.GameCode.GDAccelarrotObjects1[i].getX() - (10));
}
}
{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemySpawnObjects2Objects = Hashtable.newFrom({"EnemySpawn": gdjs.GameCode.GDEnemySpawnObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeatSeekerObjects2Objects = Hashtable.newFrom({"HeatSeeker": gdjs.GameCode.GDHeatSeekerObjects2});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.GameCode.GDEnemySpawnObjects2);
gdjs.copyArray(gdjs.GameCode.GDHeatSeekerObjects1, gdjs.GameCode.GDHeatSeekerObjects2);

{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemySpawnObjects2Objects);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HeatSpawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeatSeekerObjects2Objects, (( gdjs.GameCode.GDEnemySpawnObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemySpawnObjects2[0].getX()), (( gdjs.GameCode.GDEnemySpawnObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDEnemySpawnObjects2[0].getY()), "");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHeatSeekerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDHeatSeekerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeatSeekerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "HeatSpawn") > 16.99;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HeatSeeker"), gdjs.GameCode.GDHeatSeekerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHeatSeekerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeatSeekerObjects1[i].addForceTowardObject((gdjs.GameCode.GDSpaceMonkeObjects1.length !== 0 ? gdjs.GameCode.GDSpaceMonkeObjects1[0] : null), 500, 0);
}
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpSpawnObjects1Objects = Hashtable.newFrom({"UpSpawn": gdjs.GameCode.GDUpSpawnObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUprootObjects1Objects = Hashtable.newFrom({"Uproot": gdjs.GameCode.GDUprootObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Uproot"), gdjs.GameCode.GDUprootObjects2);
{for(var i = 0, len = gdjs.GameCode.GDUprootObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDUprootObjects2[i].setY(gdjs.GameCode.GDUprootObjects2[i].getY() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpSpawn"), gdjs.GameCode.GDUpSpawnObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UprootSpawn") > 12.99;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickNearestObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUpSpawnObjects1Objects, (( gdjs.GameCode.GDSpaceMonkeObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects1[0].getPointX("")), (( gdjs.GameCode.GDSpaceMonkeObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects1[0].getPointY("")), false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDUpSpawnObjects1 */
gdjs.GameCode.GDUprootObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UprootSpawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUprootObjects1Objects, (( gdjs.GameCode.GDUpSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDUpSpawnObjects1[0].getPointX("")), (( gdjs.GameCode.GDUpSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDUpSpawnObjects1[0].getPointY("")), "");
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects3});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PowerUp")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects3);
gdjs.GameCode.GDpizzaObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointX("GunEnd")) + 30, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointY("GunEnd")), "");
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].setZOrder((( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].addForce(400, 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PizzaCooldown");
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].setSize(64, 64);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PowerUp")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects3);
gdjs.GameCode.GDpizzaObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointX("GunEnd")) + 30, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointY("GunEnd")) + 90, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointX("GunEnd")) + 30, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointY("GunEnd")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointX("GunEnd")) + 30, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointY("GunEnd")) - 90, "");
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].setZOrder((( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].addForce(400, 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PizzaCooldown");
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].setSize(64, 64);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PowerUp")) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects3);
gdjs.GameCode.GDpizzaObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects3Objects, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointX("GunEnd")) + 30, (( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getPointY("GunEnd")), "");
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].setZOrder((( gdjs.GameCode.GDSpaceMonkeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDSpaceMonkeObjects3[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].addForce(650, 0, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects3[i].setSize(64, 64);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PizzaCooldown");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "shoot.wav", 2, false, 100, gdjs.randomFloatInRange(0.8, 1.2));
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PizzaCooldown") > 0.39;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects2Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBroccObjects2Objects = Hashtable.newFrom({"Brocc": gdjs.GameCode.GDBroccObjects2});
gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "enemy_die.wav", 2, false, 50, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects2Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAccelarrotObjects2Objects = Hashtable.newFrom({"Accelarrot": gdjs.GameCode.GDAccelarrotObjects2});
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "enemy_die.wav", 2, false, 50, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects2Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeatSeekerObjects2Objects = Hashtable.newFrom({"HeatSeeker": gdjs.GameCode.GDHeatSeekerObjects2});
gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "enemy_die.wav", 2, false, 50, gdjs.randomFloatInRange(0.8, 1.2));
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects1Objects = Hashtable.newFrom({"pizza": gdjs.GameCode.GDpizzaObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUprootObjects1Objects = Hashtable.newFrom({"Uproot": gdjs.GameCode.GDUprootObjects1});
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "enemy_die.wav", 2, false, 50, gdjs.randomFloatInRange(0.8, 1.2));
}}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("pizza"), gdjs.GameCode.GDpizzaObjects2);
{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects2[i].setSize(64, 64);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9557588);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brocc"), gdjs.GameCode.GDBroccObjects2);
gdjs.copyArray(runtimeScene.getObjects("pizza"), gdjs.GameCode.GDpizzaObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBroccObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9563684);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBroccObjects2 */
/* Reuse gdjs.GameCode.GDpizzaObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBroccObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBroccObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Score").add(1);
}
{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Accelarrot"), gdjs.GameCode.GDAccelarrotObjects2);
gdjs.copyArray(runtimeScene.getObjects("pizza"), gdjs.GameCode.GDpizzaObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAccelarrotObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9565836);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAccelarrotObjects2 */
/* Reuse gdjs.GameCode.GDpizzaObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDAccelarrotObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAccelarrotObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Score").add(3);
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HeatSeeker"), gdjs.GameCode.GDHeatSeekerObjects2);
gdjs.copyArray(runtimeScene.getObjects("pizza"), gdjs.GameCode.GDpizzaObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDHeatSeekerObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9567588);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDHeatSeekerObjects2 */
/* Reuse gdjs.GameCode.GDpizzaObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDHeatSeekerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHeatSeekerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Score").add(5);
}
{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Uproot"), gdjs.GameCode.GDUprootObjects1);
gdjs.copyArray(runtimeScene.getObjects("pizza"), gdjs.GameCode.GDpizzaObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDpizzaObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDUprootObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9568460);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDUprootObjects1 */
/* Reuse gdjs.GameCode.GDpizzaObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDUprootObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUprootObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDpizzaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDpizzaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("Score").add(3);
}
{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "player_die.wav", 4, false, 300, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects1Objects = Hashtable.newFrom({"SpaceMonke": gdjs.GameCode.GDSpaceMonkeObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBroccObjects1ObjectsGDgdjs_46GameCode_46GDAccelarrotObjects1ObjectsGDgdjs_46GameCode_46GDHeatSeekerObjects1ObjectsGDgdjs_46GameCode_46GDUprootObjects1Objects = Hashtable.newFrom({"Brocc": gdjs.GameCode.GDBroccObjects1, "Accelarrot": gdjs.GameCode.GDAccelarrotObjects1, "HeatSeeker": gdjs.GameCode.GDHeatSeekerObjects1, "Uproot": gdjs.GameCode.GDUprootObjects1});
gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "enemy_die.wav", 2, false, 50, gdjs.randomFloatInRange(0.8, 1.2));
}}

}


};gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDHealthBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDHealthBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDHealthBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9573092);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameCode.GDHealthBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects2);
{for(var i = 0, len = gdjs.GameCode.GDHealthBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBarObjects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDSpaceMonkeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSpaceMonkeObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == -(1);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Health").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Accelarrot"), gdjs.GameCode.GDAccelarrotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Brocc"), gdjs.GameCode.GDBroccObjects1);
gdjs.copyArray(runtimeScene.getObjects("HeatSeeker"), gdjs.GameCode.GDHeatSeekerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Uproot"), gdjs.GameCode.GDUprootObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBroccObjects1ObjectsGDgdjs_46GameCode_46GDAccelarrotObjects1ObjectsGDgdjs_46GameCode_46GDHeatSeekerObjects1ObjectsGDgdjs_46GameCode_46GDUprootObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDAccelarrotObjects1 */
/* Reuse gdjs.GameCode.GDBroccObjects1 */
/* Reuse gdjs.GameCode.GDHeatSeekerObjects1 */
/* Reuse gdjs.GameCode.GDUprootObjects1 */
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDBroccObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBroccObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDAccelarrotObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAccelarrotObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDHeatSeekerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeatSeekerObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDUprootObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDUprootObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Game Over");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Game Over");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Health").setNumber(3);
}{runtimeScene.getVariables().get("Score").setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.playerAuthentication.isAuthenticated());
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitScore"), gdjs.GameCode.GDSubmitScoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDSubmitScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSubmitScoreObjects2[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("GameOverScore"), gdjs.GameCode.GDGameOverScoreObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGameOverScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGameOverScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("Score")));
}
}}

}


};gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Music")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 5));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9581460);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "placeholder-theme.mp3", 5, true, 100, 1);
}}

}


};gdjs.GameCode.eventsList24 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Music")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 5));
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9582764);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "placeholder-theme.mp3", 5, true, 100, 1);
}}

}


};gdjs.GameCode.eventsList25 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Paused").add(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Paused")) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Pause");
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSubmitScoreObjects1Objects = Hashtable.newFrom({"SubmitScore": gdjs.GameCode.GDSubmitScoreObjects1});
gdjs.GameCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SubmitScore"), gdjs.GameCode.GDSubmitScoreObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSubmitScoreObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "907cdffb-3cfc-40cc-9359-7bafdf915ca1", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score")));
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBurgerObjects2Objects = Hashtable.newFrom({"Burger": gdjs.GameCode.GDBurgerObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects2Objects = Hashtable.newFrom({"SpaceMonke": gdjs.GameCode.GDSpaceMonkeObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDonutObjects2Objects = Hashtable.newFrom({"Donut": gdjs.GameCode.GDDonutObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects2Objects = Hashtable.newFrom({"SpaceMonke": gdjs.GameCode.GDSpaceMonkeObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDonutObjects1ObjectsGDgdjs_46GameCode_46GDBurgerObjects1Objects = Hashtable.newFrom({"Donut": gdjs.GameCode.GDDonutObjects1, "Burger": gdjs.GameCode.GDBurgerObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDonutObjects1ObjectsGDgdjs_46GameCode_46GDBurgerObjects1Objects = Hashtable.newFrom({"Donut": gdjs.GameCode.GDDonutObjects1, "Burger": gdjs.GameCode.GDBurgerObjects1});
gdjs.GameCode.eventsList27 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Health")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBurgerObjects1 */
/* Reuse gdjs.GameCode.GDDonutObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDDonutObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDonutObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDBurgerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBurgerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Burger"), gdjs.GameCode.GDBurgerObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBurgerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBurgerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBurgerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBurgerObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("PowerUp").setNumber(1);
}{runtimeScene.getVariables().get("Health").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Burger");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Donut"), gdjs.GameCode.GDDonutObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpaceMonke"), gdjs.GameCode.GDSpaceMonkeObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDonutObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpaceMonkeObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDDonutObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDonutObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDonutObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("PowerUp").setNumber(2);
}{runtimeScene.getVariables().get("Health").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Donut");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Burger") > 19.99;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PowerUp").setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Donut") > 19.99;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PowerUp").setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PowerUpSpawn") > 59.99;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Burger"), gdjs.GameCode.GDBurgerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Donut"), gdjs.GameCode.GDDonutObjects1);
gdjs.copyArray(runtimeScene.getObjects("PowerUpSpawn"), gdjs.GameCode.GDPowerUpSpawnObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PowerUpSpawn");
}{gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDonutObjects1ObjectsGDgdjs_46GameCode_46GDBurgerObjects1Objects);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDonutObjects1ObjectsGDgdjs_46GameCode_46GDBurgerObjects1Objects, (( gdjs.GameCode.GDPowerUpSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPowerUpSpawnObjects1[0].getPointX("")), (( gdjs.GameCode.GDPowerUpSpawnObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPowerUpSpawnObjects1[0].getPointY("")), "");
}
{ //Subevents
gdjs.GameCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList29 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


gdjs.GameCode.eventsList21(runtimeScene);
}


{


gdjs.GameCode.eventsList22(runtimeScene);
}


{


gdjs.GameCode.eventsList24(runtimeScene);
}


{


gdjs.GameCode.eventsList25(runtimeScene);
}


{


gdjs.GameCode.eventsList26(runtimeScene);
}


{


gdjs.GameCode.eventsList28(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDSpaceMonkeObjects1.length = 0;
gdjs.GameCode.GDSpaceMonkeObjects2.length = 0;
gdjs.GameCode.GDSpaceMonkeObjects3.length = 0;
gdjs.GameCode.GDSpaceMonkeObjects4.length = 0;
gdjs.GameCode.GDBroccObjects1.length = 0;
gdjs.GameCode.GDBroccObjects2.length = 0;
gdjs.GameCode.GDBroccObjects3.length = 0;
gdjs.GameCode.GDBroccObjects4.length = 0;
gdjs.GameCode.GDMonkeSpawnObjects1.length = 0;
gdjs.GameCode.GDMonkeSpawnObjects2.length = 0;
gdjs.GameCode.GDMonkeSpawnObjects3.length = 0;
gdjs.GameCode.GDMonkeSpawnObjects4.length = 0;
gdjs.GameCode.GDEnemySpawnObjects1.length = 0;
gdjs.GameCode.GDEnemySpawnObjects2.length = 0;
gdjs.GameCode.GDEnemySpawnObjects3.length = 0;
gdjs.GameCode.GDEnemySpawnObjects4.length = 0;
gdjs.GameCode.GDspace_95bgObjects1.length = 0;
gdjs.GameCode.GDspace_95bgObjects2.length = 0;
gdjs.GameCode.GDspace_95bgObjects3.length = 0;
gdjs.GameCode.GDspace_95bgObjects4.length = 0;
gdjs.GameCode.GDpizzaObjects1.length = 0;
gdjs.GameCode.GDpizzaObjects2.length = 0;
gdjs.GameCode.GDpizzaObjects3.length = 0;
gdjs.GameCode.GDpizzaObjects4.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDDarkOverlayObjects1.length = 0;
gdjs.GameCode.GDDarkOverlayObjects2.length = 0;
gdjs.GameCode.GDDarkOverlayObjects3.length = 0;
gdjs.GameCode.GDDarkOverlayObjects4.length = 0;
gdjs.GameCode.GDPauseObjects1.length = 0;
gdjs.GameCode.GDPauseObjects2.length = 0;
gdjs.GameCode.GDPauseObjects3.length = 0;
gdjs.GameCode.GDPauseObjects4.length = 0;
gdjs.GameCode.GDHealthBarObjects1.length = 0;
gdjs.GameCode.GDHealthBarObjects2.length = 0;
gdjs.GameCode.GDHealthBarObjects3.length = 0;
gdjs.GameCode.GDHealthBarObjects4.length = 0;
gdjs.GameCode.GDRestartObjects1.length = 0;
gdjs.GameCode.GDRestartObjects2.length = 0;
gdjs.GameCode.GDRestartObjects3.length = 0;
gdjs.GameCode.GDRestartObjects4.length = 0;
gdjs.GameCode.GDQuitObjects1.length = 0;
gdjs.GameCode.GDQuitObjects2.length = 0;
gdjs.GameCode.GDQuitObjects3.length = 0;
gdjs.GameCode.GDQuitObjects4.length = 0;
gdjs.GameCode.GDYourScoreObjects1.length = 0;
gdjs.GameCode.GDYourScoreObjects2.length = 0;
gdjs.GameCode.GDYourScoreObjects3.length = 0;
gdjs.GameCode.GDYourScoreObjects4.length = 0;
gdjs.GameCode.GDGameOverScoreObjects1.length = 0;
gdjs.GameCode.GDGameOverScoreObjects2.length = 0;
gdjs.GameCode.GDGameOverScoreObjects3.length = 0;
gdjs.GameCode.GDGameOverScoreObjects4.length = 0;
gdjs.GameCode.GDGameOverObjects1.length = 0;
gdjs.GameCode.GDGameOverObjects2.length = 0;
gdjs.GameCode.GDGameOverObjects3.length = 0;
gdjs.GameCode.GDGameOverObjects4.length = 0;
gdjs.GameCode.GDSubmitScoreObjects1.length = 0;
gdjs.GameCode.GDSubmitScoreObjects2.length = 0;
gdjs.GameCode.GDSubmitScoreObjects3.length = 0;
gdjs.GameCode.GDSubmitScoreObjects4.length = 0;
gdjs.GameCode.GDAccelarrotObjects1.length = 0;
gdjs.GameCode.GDAccelarrotObjects2.length = 0;
gdjs.GameCode.GDAccelarrotObjects3.length = 0;
gdjs.GameCode.GDAccelarrotObjects4.length = 0;
gdjs.GameCode.GDAccelarrotrailObjects1.length = 0;
gdjs.GameCode.GDAccelarrotrailObjects2.length = 0;
gdjs.GameCode.GDAccelarrotrailObjects3.length = 0;
gdjs.GameCode.GDAccelarrotrailObjects4.length = 0;
gdjs.GameCode.GDHeatSeekerObjects1.length = 0;
gdjs.GameCode.GDHeatSeekerObjects2.length = 0;
gdjs.GameCode.GDHeatSeekerObjects3.length = 0;
gdjs.GameCode.GDHeatSeekerObjects4.length = 0;
gdjs.GameCode.GDUprootObjects1.length = 0;
gdjs.GameCode.GDUprootObjects2.length = 0;
gdjs.GameCode.GDUprootObjects3.length = 0;
gdjs.GameCode.GDUprootObjects4.length = 0;
gdjs.GameCode.GDPowerUpSpawnObjects1.length = 0;
gdjs.GameCode.GDPowerUpSpawnObjects2.length = 0;
gdjs.GameCode.GDPowerUpSpawnObjects3.length = 0;
gdjs.GameCode.GDPowerUpSpawnObjects4.length = 0;
gdjs.GameCode.GDDonutObjects1.length = 0;
gdjs.GameCode.GDDonutObjects2.length = 0;
gdjs.GameCode.GDDonutObjects3.length = 0;
gdjs.GameCode.GDDonutObjects4.length = 0;
gdjs.GameCode.GDBurgerObjects1.length = 0;
gdjs.GameCode.GDBurgerObjects2.length = 0;
gdjs.GameCode.GDBurgerObjects3.length = 0;
gdjs.GameCode.GDBurgerObjects4.length = 0;
gdjs.GameCode.GDUpSpawnObjects1.length = 0;
gdjs.GameCode.GDUpSpawnObjects2.length = 0;
gdjs.GameCode.GDUpSpawnObjects3.length = 0;
gdjs.GameCode.GDUpSpawnObjects4.length = 0;
gdjs.GameCode.GDtimertestObjects1.length = 0;
gdjs.GameCode.GDtimertestObjects2.length = 0;
gdjs.GameCode.GDtimertestObjects3.length = 0;
gdjs.GameCode.GDtimertestObjects4.length = 0;

gdjs.GameCode.eventsList29(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
