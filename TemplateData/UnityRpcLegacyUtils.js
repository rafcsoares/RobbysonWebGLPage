var UnityRpcLegacyUtils = 
{
	//-----------------------Kite Functions -----------------------------
	
	sendParallaxLevel: function (level) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSendParallaxLevel(level);
	}
};