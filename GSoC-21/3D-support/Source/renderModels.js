function renderModels(url, height) {
    viewer.entities.removeAll();

    var position = Cesium.Cartesian3.fromDegrees(
        // x
        // y
        height
    );

    var heading = Cesium.Math.toRadians(135);
    var pitch = 0;
    var roll = 0;
    
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    var orientation = Cesium.Transforms.headingPitchRoll(poition, hpr);
}

var entity = viewer.entities.add({
    name: url,
    position: position,
    orientation: orientation,
    model: {url,
    // minimumPixelSize: ,
    // maximumScize: ,
    }
});

viewer.trackedEntity = entity;

// renderModels(
    // path-to-the-3D-model, 
    // height
    // );
