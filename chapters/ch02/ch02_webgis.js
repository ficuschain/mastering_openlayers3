function init() {
    document.removeEventListener('DOMContentLoaded', init);
    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:4326'
            }),
            url: '../../res/world_capitals.geojson'
        })
    })
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),
            vectorLayer
        ],
        controls: [
            //Define the default controls
            new ol.control.Zoom({
                target: 'toolbar'
            }),
            //Define some new controls
            new ol.control.MousePosition({
                coordinateFormat: function(coordinates) {
                    var coord_x = coordinates[0].toFixed(3);
                    var coord_y = coordinates[1].toFixed(3);
                    return coord_x + ', ' + coord_y;
                },
                target: 'coordinates'
            })
        ],
        view: new ol.View({
            center: [0,0],
            zoom: 2
        })
    });
}
document.addEventListener('DOMContentLoaded', init);