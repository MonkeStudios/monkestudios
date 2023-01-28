gdjs.LeaderboardsCode = {};

gdjs.LeaderboardsCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardsCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "907cdffb-3cfc-40cc-9359-7bafdf915ca1", true);
}}

}


{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.LeaderboardsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.LeaderboardsCode.eventsList0(runtimeScene);

return;

}

gdjs['LeaderboardsCode'] = gdjs.LeaderboardsCode;
