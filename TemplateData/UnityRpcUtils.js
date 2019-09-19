var UnityRpcUtils =
{
	//-----------------------Profile Set/Load/Save Functions-----------------------------

	equipItem: function (dataId) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcEquipItem(dataId);
	},

	unequipItem: function (dataId) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcUnequipItem(dataId);
	},

	unequipItemInSlot: function (slotKey) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcUnequipItemInSlot(slotKey);
	},

	setSlotColor: function (slotKey, colorHex) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSetSlotColor(slotKey, colorHex);
	},

	setItemColor: function (dataId, colorHex) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSetItemColor(dataId, colorHex);
	},

	setBodyColor: function (colorHex) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSetBodyColor(colorHex);
	},

	setBodyType: function (bodyTypeTag) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSetBodyType(bodyTypeTag);
	},

	saveInventoryData: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSaveInventoryData();
	},

	saveGeneralInfoData: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSaveGeneralInfoData();
	},

	saveData: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSaveData();
	},

	loadInventoryData: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcLoadInventoryData();
	},

	loadGeneralInfoData: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcLoadGeneralInfoData();
	},

	loadData: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcLoadData();
	},

	//-----------------------Profile Get Functions-----------------------------

	//callback(obj)
	getEquippedItemsInfo: function (callback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcGetEquippedItemsInfo(callback);
	},

	//string slotKey
	//function callback(obj)
	getSlotInfo: function (slotKey, callback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcGetSlotInfo(slotKey, callback);
	},

	//string itemId
	//function callback(obj)
	getItemInfo: function (itemId, callback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcGetItemInfo(itemId, callback);
	},

	//function callback(obj)
	getBodyInfo: function (callback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcGetBodyInfo(callback);
	},

	//function callback(obj)
	getAllSlotsInfo: function (callback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcGetAllSlotsInfo(callback);
	},

	//string slotKey
	//function callback(obj)
	getAllItemIdsWithSlotKey: function (slotKey, callback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcGetAllItemIdsWithSlotKey(slotKey, callback);
	},

	//-----------------------InApp Functions -----------------------------

	buyItem: function (itemHandle) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcBuyItem(itemHandle);
	},

	//-----------------------Photo Functions -----------------------------

	showScreenshotStencil: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcShowScreenshotStencil();
	},

	hideScreenshotStencil: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcHideScreenshotStencil();
	},

	takeScreenshot: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcTakeScreenshot();
	},

	takeScreenshotInPose: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcTakeScreenshotInPose();
	},

	//None = 0, SkipSavePhase = 1, SkipScreenshotPhase = 2, SkipAllPhases = 3
	saveAndTakeScreenshot: function (phasesToSkipWhenFallback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSaveAndTakeScreenshot(phasesToSkipWhenFallback);
	},

	//None = 0, SkipSavePhase = 1, SkipScreenshotPhase = 2, SkipAllPhases = 3
	saveAndTakeScreenshotInPose: function (phasesToSkipWhenFallback) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSaveAndTakeScreenshotInPose(phasesToSkipWhenFallback);
	},

	//-----------------------App Functions -----------------------------

	loadScene: function (sceneName) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcLoadScene(sceneName);
	},

	//-----------------------Localization Functions -----------------------------

	setLocalization: function (name, dictionary) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSetLocalization(name, dictionary);
	},

	//-----------------------Msg Functions -----------------------------

	showMessage: function (message) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcShowMessage(message);
	},

	showAvatar: function (profileId) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcShowAvatar(profileId);
	},

	//-----------------------Debug Functions -----------------------------

	showFps: function (isVisible) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcShowFps(isVisible);
	},

	setQualityLevel: function (qualityLevel) {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			gameInstance.Module.asmLibraryArg.__RpcSetQualityLevel(qualityLevel);
	},

	getTotalMemorySize: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			return gameInstance.Module.asmLibraryArg.__RpcGetTotalMemorySize();
		return -1;
	},

	getTotalStackSize: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			return gameInstance.Module.asmLibraryArg.__RpcGetTotalStackSize();
		return -1;
	},

	getStaticMemorySize: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			return gameInstance.Module.asmLibraryArg.__RpcGetStaticMemorySize();
		return -1;
	},

	getDynamicMemorySize: function () {
		if (gameInstance !== null && gameInstance.Module !== null && gameInstance.Module.asmLibraryArg !== null)
			return gameInstance.Module.asmLibraryArg.__RpcGetDynamicMemorySize();
		return -1;
	}
};