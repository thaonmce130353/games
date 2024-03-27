var gameInstance = UnityLoader.instantiate("gameContainer", "Build/rooftop-snipers.json", {
    onProgress: UnityProgress,
    Module: {
        onRuntimeInitialized: function() {
            UnityProgress(gameInstance, "complete")
        }
    }
});