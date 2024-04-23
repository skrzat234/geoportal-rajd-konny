var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_ORTOFOTOMAPA_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_ORTOFOTOMAPA_1 = projection_ORTOFOTOMAPA_1.getExtent();
    var size_ORTOFOTOMAPA_1 = ol.extent.getWidth(projectionExtent_ORTOFOTOMAPA_1) / 256;
    var resolutions_ORTOFOTOMAPA_1 = new Array(14);
    var matrixIds_ORTOFOTOMAPA_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ORTOFOTOMAPA_1[z] = size_ORTOFOTOMAPA_1 / Math.pow(2, z);
        matrixIds_ORTOFOTOMAPA_1[z] = z;
    }
    var lyr_ORTOFOTOMAPA_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/StandardResolution?request=GetCapabilities&service=wmts",
    attributions: ' ',
                                "layer": "ORTOFOTOMAPA",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_ORTOFOTOMAPA_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ORTOFOTOMAPA_1),
                resolutions: resolutions_ORTOFOTOMAPA_1,
                matrixIds: matrixIds_ORTOFOTOMAPA_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "ORTOFOTOMAPA",
                            opacity: 1.0,
                            
                            
                          });
var format_punkty_temp_2 = new ol.format.GeoJSON();
var features_punkty_temp_2 = format_punkty_temp_2.readFeatures(json_punkty_temp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punkty_temp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punkty_temp_2.addFeatures(features_punkty_temp_2);
var lyr_punkty_temp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_punkty_temp_2, 
                style: style_punkty_temp_2,
                interactive: true,
                title: '<img src="styles/legend/punkty_temp_2.png" /> punkty_temp'
            });
var format_linie2_3 = new ol.format.GeoJSON();
var features_linie2_3 = format_linie2_3.readFeatures(json_linie2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linie2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linie2_3.addFeatures(features_linie2_3);
var lyr_linie2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linie2_3, 
                style: style_linie2_3,
                interactive: true,
                title: '<img src="styles/legend/linie2_3.png" /> linie2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ORTOFOTOMAPA_1.setVisible(true);lyr_punkty_temp_2.setVisible(true);lyr_linie2_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ORTOFOTOMAPA_1,lyr_punkty_temp_2,lyr_linie2_3];
lyr_punkty_temp_2.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'layer': 'layer', 'path': 'path', 'id': 'id', });
lyr_linie2_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', 'odl': 'odl', });
lyr_punkty_temp_2.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'id': 'TextEdit', });
lyr_linie2_3.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', 'odl': '', });
lyr_punkty_temp_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'layer': 'no label', 'path': 'no label', 'id': 'inline label', });
lyr_linie2_3.set('fieldLabels', {'begin': 'no label', 'end': 'no label', 'odl': 'no label', });
lyr_linie2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});