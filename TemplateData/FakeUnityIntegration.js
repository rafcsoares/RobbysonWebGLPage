var UnityIntegration = {

	showMemoryStats: function()
	{
		var v_alertMsg = "";
		v_alertMsg += "Memory Size: " + (UnityRpcUtils.getTotalMemorySize()/(1024.0*1024.0)).toFixed(2) + "MB\n";
		v_alertMsg += "Stack Size: " + (UnityRpcUtils.getTotalStackSize()/(1024.0*1024.0)).toFixed(2) + "MB\n";
		v_alertMsg += "Static Memory Size: " + (UnityRpcUtils.getStaticMemorySize()/(1024.0*1024.0)).toFixed(2) + "MB\n";
		v_alertMsg += "Dynamic Memory Size: " +(UnityRpcUtils.getDynamicMemorySize()/(1024.0*1024.0)).toFixed(2) + "MB";
		v_alertMsg = v_alertMsg.trim();
		if(v_alertMsg !== "")
			alert(v_alertMsg);
	},

	//-----------------------UPDATE DB-----------------------------

	onRequestDbItems: function(p_callback)
    {
		console.log('onRequestDbItems');
		//parameters (sucess, resetAvailableToPurchase, JsonDataStr)
		/*var jsonDataStr = {
		  "items": [
				{
				  "nome": "Camiseta Polo Loreal",
				  "handle": "Camiseta_Polo_Loreal_01_IData",
				  "preco": 1,
				  "descricao": "Camiseta Polo Loreal",
				  "disponivelParaCompra": true,
				  "favorito": false,
				  "colecao": true,
				  "itemNovo": false
				}
			]
		}
		p_callback(true, true, JSON.stringify(jsonDataStr));*/
		p_callback(true, false, "");
    },

	//-----------------------SAVE-----------------------------

	onSaveInventoryItems: function(p_jsonSaveData, p_callback)
    {
		var v_jsonObject = JSON.parse(p_jsonSaveData);
		var v_idKey = v_jsonObject["_id"] + "_inventory";
		localStorage.setItem(v_idKey, p_jsonSaveData);
		
		console.log('onSaveInventoryItems ' + p_jsonSaveData);
		p_callback(true);
    },
	
	//Same Implementation of onSaveInventoryItems but saving in diff slot
	onSaveProfile: function(p_jsonSaveData, p_callback)
    {
		var v_jsonObject = JSON.parse(p_jsonSaveData);
		var v_idKey = v_jsonObject["_id"] + "_profile";
		localStorage.setItem(v_idKey, p_jsonSaveData);
		
		console.log('onSaveProfile ' + p_jsonSaveData);
		p_callback(true);
    },

	//-----------------------LOAD-----------------------------

	onGetInventoryItemsById : function(p_userId, p_callback)
	{
		var v_idKey = p_userId + "_inventory";
		var v_json = localStorage.getItem(v_idKey);
		if(!v_json || !v_json.length)
		{
			v_json = '{\"emocao\":2,\"nome\":\"Teste Name\",\"tipoCorpo\":\"Human_F\",\"items\":[{\"quantidade\":1,\"handle\":\"Barba_02_IData\",\"equipado\":false,\"propriedadesVisuais\":\"{}\"}]}';
		}
		console.log('onGetInventoryItemsById(' + p_userId + ')'+ v_json);
		p_callback(true, p_userId, v_json);
	},
	
	onGetInventoryItems: function(p_callback)
    {
		var v_idKey = 0 + "_inventory";
		var v_json = localStorage.getItem(v_idKey);
		if(!v_json || !v_json.length)
		{
			v_json = '{\"_id\":0,\"emocao\":2,\"nome\":\"Teste Name\",\"tipoCorpo\":\"Human_F\",\"items\":[{\"quantidade\":1,\"handle\":\"Barba_02_IData\",\"equipado\":false,\"propriedadesVisuais\":\"{}\"}]}';
		}
		console.log('onGetInventoryItems ' + v_json);
		p_callback(true, v_json);
    },

	//Same Implementation of onGetInventoryItemsById but saving in diff slot
	onGetProfileById : function(p_userId, p_callback)
	{
		var v_idKey = p_userId + "_profile";
		var v_json = localStorage.getItem(v_idKey);
		if(!v_json || !v_json.length)
		{
			v_json = '{}';
		}
		console.log('onGetProfileById(' + p_userId + ')'+ v_json);
		p_callback(true, p_userId, v_json);
	},
	
	//Same Implementation of onGetInventoryItems
	onGetProfile: function(p_callback)
    {		
		var v_idKey = 0 + "_profile";
		var v_json = localStorage.getItem(v_idKey);
		if(!v_json || !v_json.length)
		{
			v_json = '{\"_id\":0}';
		}
		console.log('onGetProfile ' + v_json);
		p_callback(true, v_json);
    },
	
	//-----------------------BUY-----------------------------

	onBuyItems: function(p_itemStrId, p_callback)
    {
		console.log('onBuyItems ' + p_itemStrId);
		p_callback(true, p_itemStrId, "");
    },

	//-----------------------Other-----------------------------

	onBackButtonPress: function()
    {
		console.log('onBackButtonPress');
    },
	
	onBackButtonPhotoPress: function()
    {
		console.log('onBackButtonPhotoPress');
    },
	
	onSceneWasLoaded: function(p_sceneName)
    {
		console.log('onSceneWasLoaded ' + p_sceneName);
    },
	
	onUnityStart: function()
    {
		console.log('onUnityStart');
    },

	onSetFavorite: function(p_itemStrId)
    {
		console.log('onSetFavorite ' + p_itemStrId);
    },

	onSetNotFavorite: function(p_itemStrId)
    {
		console.log('onSetNotFavorite ' + p_itemStrId);
    },
	
	onRequestOpenUrl: function(p_url)
    {
		window.open(p_url);
    },
	
	onGetTotalMemorySize: function(p_callback)
    {
		_getTotalMemorySize = p_callback;
		console.log('onGetTotalMemorySize');
    },
	
	onGetTotalStackSize: function(p_callback)
    {
		_getTotalStackSize = p_callback;
		console.log('onGetTotalStackSize');
    },
	
	onGetStaticMemorySize: function(p_callback)
    {
		_getTotalStaticSize = p_callback;
		console.log('onGetStaticMemorySize');
    },
	
	onGetDynamicMemorySize: function(p_callback)
    {
		_getTotalDynamicSize = p_callback;
		console.log('onGetDynamicMemorySize');
    },
	
	onSendSetQualityLevel: function(p_callback)
    {
		_sendSetQualityLevel = p_callback;
		console.log('onSendSetQualityLevel');
    },
	
	//-----------------------Avatar Events-----------------------------
	
	onAvatarEnter: function()
    {
		console.log('onAvatarEnter');
    },
	
	onAvatarLeave: function()
    {
		console.log('onAvatarLeave');
    },

	//-----------------------Message-----------------------------

	onCallTipsTab: function()
    {
		console.log('onCallTipsTab');
    },
	
	//-----------------------Photo-----------------------------
	
	onDownloadTexture: function(p_textureKey, p_callback)
    {
		var v_jsonRawTexture = "{}";
		
		//Get from PlayerPrefs
		p_textureKey = "avatar_profile_1_" + p_textureKey;
		if(p_textureKey && p_textureKey.length > 0)
			v_jsonRawTexture = localStorage.getItem(p_textureKey);
		
		//Force key to be the correct one 
		var v_rawTexture = JSON.parse(v_jsonRawTexture);
		if(!v_rawTexture)
			v_rawTexture = {};
		v_rawTexture["m_key"] = p_textureKey;
		v_jsonRawTexture = JSON.stringify(v_rawTexture);
		console.log('onDownloadTexture ' + v_jsonRawTexture);
		p_callback(true, p_textureKey, v_jsonRawTexture)
    },
	
	onUploadTexture: function(p_jsonRawTexture, p_callback)
    {		
		var v_rawTexture = JSON.parse(p_jsonRawTexture);
		if(v_rawTexture)
		{
			var v_textureKey = "avatar_profile_1_" + v_rawTexture["m_key"];
			v_rawTexture["m_key"] = v_textureKey;
			var v_jsonRawTexture = JSON.stringify(v_rawTexture);
			
			//Set in PlayerPrefs
			if(v_textureKey && v_textureKey.length > 0)
				localStorage.setItem(v_textureKey, v_jsonRawTexture);
			
			console.log('onUploadTexture ' + v_jsonRawTexture);
			p_callback(true, v_textureKey);
		}
    },

	//-----------------------Parallax-----------------------------

	onCallHistoryPage: function(p_markerHandle)
    {
		console.log('onCallHistoryPage ' + p_markerHandle);
    },
	
	onRequestMarkers: function(p_callback)
    {
		var v_jsonMarkers = '{\"m_markers\":[{\"m_handle\":\"TMA\",\"m_labelName\":\"TMA\",\"m_normalizedValue\":1.0,\"m_formattedValue\":\"375\",\"m_formattedGoalValue\":\"365\"},{\"m_handle\":\"Recall\",\"m_labelName\":\"Recall\",\"m_normalizedValue\":0.4000000059604645,\"m_formattedValue\":\"30,6%\",\"m_formattedGoalValue\":\"27%\"},{\"m_handle\":\"Answered\",\"m_labelName\":\"Answered\",\"m_normalizedValue\":0.8169999718666077,\"m_formattedValue\":\"49\",\"m_formattedGoalValue\":\"60\"},{\"m_handle\":\"LoggedTime\",\"m_labelName\":\"Logged in Time\",\"m_normalizedValue\":0.8870000243186951,\"m_formattedValue\":\"05:43\",\"m_formattedGoalValue\":\"06:20\"}]}';
		console.log('onRequestMarkers ' + v_jsonMarkers);
		p_callback(v_jsonMarkers);
    },
	
	onRequestParallaxLevel: function(p_callback)
    {
		var v_parallaxLevel = 3;
		console.log('onRequestParallaxLevel ' + v_parallaxLevel);
		p_callback(v_parallaxLevel);
    },
	
	onParallaxMoveEnded: function()
    {
		console.log('onParallaxMoveEnded');
    }
};