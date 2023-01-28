gdjs.TitleCode = {};
gdjs.TitleCode.GDmoon_95tileObjects1= [];
gdjs.TitleCode.GDmoon_95tileObjects2= [];
gdjs.TitleCode.GDmoon_95tileObjects3= [];
gdjs.TitleCode.GDmoon_95tileObjects4= [];
gdjs.TitleCode.GDspace_95bgObjects1= [];
gdjs.TitleCode.GDspace_95bgObjects2= [];
gdjs.TitleCode.GDspace_95bgObjects3= [];
gdjs.TitleCode.GDspace_95bgObjects4= [];
gdjs.TitleCode.GDdemoObjects1= [];
gdjs.TitleCode.GDdemoObjects2= [];
gdjs.TitleCode.GDdemoObjects3= [];
gdjs.TitleCode.GDdemoObjects4= [];
gdjs.TitleCode.GDDarkOverlayObjects1= [];
gdjs.TitleCode.GDDarkOverlayObjects2= [];
gdjs.TitleCode.GDDarkOverlayObjects3= [];
gdjs.TitleCode.GDDarkOverlayObjects4= [];
gdjs.TitleCode.GDmute_95musicObjects1= [];
gdjs.TitleCode.GDmute_95musicObjects2= [];
gdjs.TitleCode.GDmute_95musicObjects3= [];
gdjs.TitleCode.GDmute_95musicObjects4= [];
gdjs.TitleCode.GDmute_95SFXObjects1= [];
gdjs.TitleCode.GDmute_95SFXObjects2= [];
gdjs.TitleCode.GDmute_95SFXObjects3= [];
gdjs.TitleCode.GDmute_95SFXObjects4= [];
gdjs.TitleCode.GDleaderboardsObjects1= [];
gdjs.TitleCode.GDleaderboardsObjects2= [];
gdjs.TitleCode.GDleaderboardsObjects3= [];
gdjs.TitleCode.GDleaderboardsObjects4= [];
gdjs.TitleCode.GDTitleSpriteObjects1= [];
gdjs.TitleCode.GDTitleSpriteObjects2= [];
gdjs.TitleCode.GDTitleSpriteObjects3= [];
gdjs.TitleCode.GDTitleSpriteObjects4= [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDNewSpriteObjects3= [];
gdjs.TitleCode.GDNewSpriteObjects4= [];
gdjs.TitleCode.GDLoginObjects1= [];
gdjs.TitleCode.GDLoginObjects2= [];
gdjs.TitleCode.GDLoginObjects3= [];
gdjs.TitleCode.GDLoginObjects4= [];
gdjs.TitleCode.GDLogoutObjects1= [];
gdjs.TitleCode.GDLogoutObjects2= [];
gdjs.TitleCode.GDLogoutObjects3= [];
gdjs.TitleCode.GDLogoutObjects4= [];
gdjs.TitleCode.GDStartObjects1= [];
gdjs.TitleCode.GDStartObjects2= [];
gdjs.TitleCode.GDStartObjects3= [];
gdjs.TitleCode.GDStartObjects4= [];
gdjs.TitleCode.GDHowToPlayObjects1= [];
gdjs.TitleCode.GDHowToPlayObjects2= [];
gdjs.TitleCode.GDHowToPlayObjects3= [];
gdjs.TitleCode.GDHowToPlayObjects4= [];
gdjs.TitleCode.GDQuitObjects1= [];
gdjs.TitleCode.GDQuitObjects2= [];
gdjs.TitleCode.GDQuitObjects3= [];
gdjs.TitleCode.GDQuitObjects4= [];
gdjs.TitleCode.GDStartTextObjects1= [];
gdjs.TitleCode.GDStartTextObjects2= [];
gdjs.TitleCode.GDStartTextObjects3= [];
gdjs.TitleCode.GDStartTextObjects4= [];
gdjs.TitleCode.GDHowToPlayTextObjects1= [];
gdjs.TitleCode.GDHowToPlayTextObjects2= [];
gdjs.TitleCode.GDHowToPlayTextObjects3= [];
gdjs.TitleCode.GDHowToPlayTextObjects4= [];
gdjs.TitleCode.GDQuitTextObjects1= [];
gdjs.TitleCode.GDQuitTextObjects2= [];
gdjs.TitleCode.GDQuitTextObjects3= [];
gdjs.TitleCode.GDQuitTextObjects4= [];
gdjs.TitleCode.GDHow2PlayBorderObjects1= [];
gdjs.TitleCode.GDHow2PlayBorderObjects2= [];
gdjs.TitleCode.GDHow2PlayBorderObjects3= [];
gdjs.TitleCode.GDHow2PlayBorderObjects4= [];
gdjs.TitleCode.GDControlsTextObjects1= [];
gdjs.TitleCode.GDControlsTextObjects2= [];
gdjs.TitleCode.GDControlsTextObjects3= [];
gdjs.TitleCode.GDControlsTextObjects4= [];
gdjs.TitleCode.GDCloseTextObjects1= [];
gdjs.TitleCode.GDCloseTextObjects2= [];
gdjs.TitleCode.GDCloseTextObjects3= [];
gdjs.TitleCode.GDCloseTextObjects4= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};
gdjs.TitleCode.condition3IsTrue_0 = {val:false};
gdjs.TitleCode.conditionTrue_1 = {val:false};
gdjs.TitleCode.condition0IsTrue_1 = {val:false};
gdjs.TitleCode.condition1IsTrue_1 = {val:false};
gdjs.TitleCode.condition2IsTrue_1 = {val:false};
gdjs.TitleCode.condition3IsTrue_1 = {val:false};


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("DarkOverlay"), gdjs.TitleCode.GDDarkOverlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("moon_tile"), gdjs.TitleCode.GDmoon_95tileObjects2);
gdjs.copyArray(runtimeScene.getObjects("space_bg"), gdjs.TitleCode.GDspace_95bgObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDspace_95bgObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDspace_95bgObjects2[i].setXOffset(gdjs.TitleCode.GDspace_95bgObjects2[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.TitleCode.GDmoon_95tileObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDmoon_95tileObjects2[i].setXOffset(gdjs.TitleCode.GDmoon_95tileObjects2[i].getXOffset() + (200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}{for(var i = 0, len = gdjs.TitleCode.GDDarkOverlayObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDDarkOverlayObjects2[i].setOpacity(160);
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9510060);
}
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Quit").setNumber(0);
}{runtimeScene.getGame().getVariables().get("Music").setNumber(1);
}{runtimeScene.getGame().getVariables().get("SFX").setNumber(1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "How2Play");
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Music")) == 2;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Music").setNumber(0);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 2;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("SFX").setNumber(0);
}}

}


};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.TitleCode.GDStartObjects1});
gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.TitleCode.GDStartObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}

}


};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDmute_9595musicObjects2Objects = Hashtable.newFrom({"mute_music": gdjs.TitleCode.GDmute_95musicObjects2});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDmute_9595SFXObjects1Objects = Hashtable.newFrom({"mute_SFX": gdjs.TitleCode.GDmute_95SFXObjects1});
gdjs.TitleCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("mute_music"), gdjs.TitleCode.GDmute_95musicObjects2);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDmute_9595musicObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Music").add(1);
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 0;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mute_SFX"), gdjs.TitleCode.GDmute_95SFXObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDmute_95SFXObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDmute_95SFXObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Music")) == 1;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mute_music"), gdjs.TitleCode.GDmute_95musicObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDmute_95musicObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDmute_95musicObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SFX")) == 1;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mute_SFX"), gdjs.TitleCode.GDmute_95SFXObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDmute_95SFXObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDmute_95SFXObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Music")) == 0;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mute_music"), gdjs.TitleCode.GDmute_95musicObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDmute_95musicObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDmute_95musicObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mute_SFX"), gdjs.TitleCode.GDmute_95SFXObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDmute_9595SFXObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("SFX").add(1);
}}

}


};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.TitleCode.GDQuitObjects1});
gdjs.TitleCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.TitleCode.GDQuitObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "How2Play"));
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.TitleCode.eventsList4 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.playerAuthentication.isAuthenticated();
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.TitleCode.GDLoginObjects3);
gdjs.copyArray(runtimeScene.getObjects("Logout"), gdjs.TitleCode.GDLogoutObjects3);
gdjs.copyArray(runtimeScene.getObjects("leaderboards"), gdjs.TitleCode.GDleaderboardsObjects3);
{for(var i = 0, len = gdjs.TitleCode.GDleaderboardsObjects3.length ;i < len;++i) {
    gdjs.TitleCode.GDleaderboardsObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDLogoutObjects3.length ;i < len;++i) {
    gdjs.TitleCode.GDLogoutObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDLoginObjects3.length ;i < len;++i) {
    gdjs.TitleCode.GDLoginObjects3[i].hide();
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = !(gdjs.playerAuthentication.isAuthenticated());
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.TitleCode.GDLoginObjects2);
gdjs.copyArray(runtimeScene.getObjects("Logout"), gdjs.TitleCode.GDLogoutObjects2);
gdjs.copyArray(runtimeScene.getObjects("leaderboards"), gdjs.TitleCode.GDleaderboardsObjects2);
{for(var i = 0, len = gdjs.TitleCode.GDleaderboardsObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDleaderboardsObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.TitleCode.GDLoginObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDLoginObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.TitleCode.GDLogoutObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDLogoutObjects2[i].hide();
}
}}

}


};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDleaderboardsObjects1Objects = Hashtable.newFrom({"leaderboards": gdjs.TitleCode.GDleaderboardsObjects1});
gdjs.TitleCode.eventsList5 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TitleCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboards"), gdjs.TitleCode.GDleaderboardsObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDleaderboardsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Leaderboards");
}}

}


};gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDLoginObjects1Objects = Hashtable.newFrom({"Login": gdjs.TitleCode.GDLoginObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDLogoutObjects1Objects = Hashtable.newFrom({"Logout": gdjs.TitleCode.GDLogoutObjects1});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDHowToPlayObjects2Objects = Hashtable.newFrom({"HowToPlay": gdjs.TitleCode.GDHowToPlayObjects2});
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCloseTextObjects1Objects = Hashtable.newFrom({"CloseText": gdjs.TitleCode.GDCloseTextObjects1});
gdjs.TitleCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HowToPlay"), gdjs.TitleCode.GDHowToPlayObjects2);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDHowToPlayObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "How2Play"));
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "How2Play");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseText"), gdjs.TitleCode.GDCloseTextObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDCloseTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "How2Play");
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "How2Play");
}}

}


};gdjs.TitleCode.eventsList7 = function(runtimeScene) {

{


gdjs.TitleCode.eventsList0(runtimeScene);
}


{


gdjs.TitleCode.eventsList1(runtimeScene);
}


{


gdjs.TitleCode.eventsList2(runtimeScene);
}


{


gdjs.TitleCode.eventsList3(runtimeScene);
}


{


gdjs.TitleCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.TitleCode.GDLoginObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDLoginObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = !(gdjs.playerAuthentication.isAuthenticated());
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Logout"), gdjs.TitleCode.GDLogoutObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDLogoutObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = gdjs.playerAuthentication.isAuthenticated();
}}
}
if (gdjs.TitleCode.condition2IsTrue_0.val) {
{gdjs.playerAuthentication.logout(runtimeScene);
}}

}


{


gdjs.TitleCode.eventsList6(runtimeScene);
}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDmoon_95tileObjects1.length = 0;
gdjs.TitleCode.GDmoon_95tileObjects2.length = 0;
gdjs.TitleCode.GDmoon_95tileObjects3.length = 0;
gdjs.TitleCode.GDmoon_95tileObjects4.length = 0;
gdjs.TitleCode.GDspace_95bgObjects1.length = 0;
gdjs.TitleCode.GDspace_95bgObjects2.length = 0;
gdjs.TitleCode.GDspace_95bgObjects3.length = 0;
gdjs.TitleCode.GDspace_95bgObjects4.length = 0;
gdjs.TitleCode.GDdemoObjects1.length = 0;
gdjs.TitleCode.GDdemoObjects2.length = 0;
gdjs.TitleCode.GDdemoObjects3.length = 0;
gdjs.TitleCode.GDdemoObjects4.length = 0;
gdjs.TitleCode.GDDarkOverlayObjects1.length = 0;
gdjs.TitleCode.GDDarkOverlayObjects2.length = 0;
gdjs.TitleCode.GDDarkOverlayObjects3.length = 0;
gdjs.TitleCode.GDDarkOverlayObjects4.length = 0;
gdjs.TitleCode.GDmute_95musicObjects1.length = 0;
gdjs.TitleCode.GDmute_95musicObjects2.length = 0;
gdjs.TitleCode.GDmute_95musicObjects3.length = 0;
gdjs.TitleCode.GDmute_95musicObjects4.length = 0;
gdjs.TitleCode.GDmute_95SFXObjects1.length = 0;
gdjs.TitleCode.GDmute_95SFXObjects2.length = 0;
gdjs.TitleCode.GDmute_95SFXObjects3.length = 0;
gdjs.TitleCode.GDmute_95SFXObjects4.length = 0;
gdjs.TitleCode.GDleaderboardsObjects1.length = 0;
gdjs.TitleCode.GDleaderboardsObjects2.length = 0;
gdjs.TitleCode.GDleaderboardsObjects3.length = 0;
gdjs.TitleCode.GDleaderboardsObjects4.length = 0;
gdjs.TitleCode.GDTitleSpriteObjects1.length = 0;
gdjs.TitleCode.GDTitleSpriteObjects2.length = 0;
gdjs.TitleCode.GDTitleSpriteObjects3.length = 0;
gdjs.TitleCode.GDTitleSpriteObjects4.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects3.length = 0;
gdjs.TitleCode.GDNewSpriteObjects4.length = 0;
gdjs.TitleCode.GDLoginObjects1.length = 0;
gdjs.TitleCode.GDLoginObjects2.length = 0;
gdjs.TitleCode.GDLoginObjects3.length = 0;
gdjs.TitleCode.GDLoginObjects4.length = 0;
gdjs.TitleCode.GDLogoutObjects1.length = 0;
gdjs.TitleCode.GDLogoutObjects2.length = 0;
gdjs.TitleCode.GDLogoutObjects3.length = 0;
gdjs.TitleCode.GDLogoutObjects4.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;
gdjs.TitleCode.GDStartObjects3.length = 0;
gdjs.TitleCode.GDStartObjects4.length = 0;
gdjs.TitleCode.GDHowToPlayObjects1.length = 0;
gdjs.TitleCode.GDHowToPlayObjects2.length = 0;
gdjs.TitleCode.GDHowToPlayObjects3.length = 0;
gdjs.TitleCode.GDHowToPlayObjects4.length = 0;
gdjs.TitleCode.GDQuitObjects1.length = 0;
gdjs.TitleCode.GDQuitObjects2.length = 0;
gdjs.TitleCode.GDQuitObjects3.length = 0;
gdjs.TitleCode.GDQuitObjects4.length = 0;
gdjs.TitleCode.GDStartTextObjects1.length = 0;
gdjs.TitleCode.GDStartTextObjects2.length = 0;
gdjs.TitleCode.GDStartTextObjects3.length = 0;
gdjs.TitleCode.GDStartTextObjects4.length = 0;
gdjs.TitleCode.GDHowToPlayTextObjects1.length = 0;
gdjs.TitleCode.GDHowToPlayTextObjects2.length = 0;
gdjs.TitleCode.GDHowToPlayTextObjects3.length = 0;
gdjs.TitleCode.GDHowToPlayTextObjects4.length = 0;
gdjs.TitleCode.GDQuitTextObjects1.length = 0;
gdjs.TitleCode.GDQuitTextObjects2.length = 0;
gdjs.TitleCode.GDQuitTextObjects3.length = 0;
gdjs.TitleCode.GDQuitTextObjects4.length = 0;
gdjs.TitleCode.GDHow2PlayBorderObjects1.length = 0;
gdjs.TitleCode.GDHow2PlayBorderObjects2.length = 0;
gdjs.TitleCode.GDHow2PlayBorderObjects3.length = 0;
gdjs.TitleCode.GDHow2PlayBorderObjects4.length = 0;
gdjs.TitleCode.GDControlsTextObjects1.length = 0;
gdjs.TitleCode.GDControlsTextObjects2.length = 0;
gdjs.TitleCode.GDControlsTextObjects3.length = 0;
gdjs.TitleCode.GDControlsTextObjects4.length = 0;
gdjs.TitleCode.GDCloseTextObjects1.length = 0;
gdjs.TitleCode.GDCloseTextObjects2.length = 0;
gdjs.TitleCode.GDCloseTextObjects3.length = 0;
gdjs.TitleCode.GDCloseTextObjects4.length = 0;

gdjs.TitleCode.eventsList7(runtimeScene);

return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
