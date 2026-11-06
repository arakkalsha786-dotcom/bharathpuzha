var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bharathapuzha_1 = new ol.format.GeoJSON();
var features_Bharathapuzha_1 = format_Bharathapuzha_1.readFeatures(json_Bharathapuzha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_1.addFeatures(features_Bharathapuzha_1);
var lyr_Bharathapuzha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_1, 
                style: style_Bharathapuzha_1,
                popuplayertitle: 'Bharathapuzha',
                interactive: true,
                title: '<img src="styles/legend/Bharathapuzha_1.png" /> Bharathapuzha'
            });
var format_geology_2 = new ol.format.GeoJSON();
var features_geology_2 = format_geology_2.readFeatures(json_geology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geology_2.addFeatures(features_geology_2);
var lyr_geology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geology_2, 
                style: style_geology_2,
                popuplayertitle: 'geology',
                interactive: true,
    title: 'geology<br />\
    <img src="styles/legend/geology_2_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/geology_2_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/geology_2_2.png" /> Charnockite Group of rocks<br />\
    <img src="styles/legend/geology_2_3.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/geology_2_4.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/geology_2_5.png" /> Migmatite Complex<br />\
    <img src="styles/legend/geology_2_6.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/geology_2_7.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/geology_2_8.png" /> Sand and Silt<br />\
    <img src="styles/legend/geology_2_9.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/geology_2_10.png" /> Tank/WB/River<br />' });
var format_STREAM_3 = new ol.format.GeoJSON();
var features_STREAM_3 = format_STREAM_3.readFeatures(json_STREAM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREAM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREAM_3.addFeatures(features_STREAM_3);
var lyr_STREAM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STREAM_3, 
                style: style_STREAM_3,
                popuplayertitle: 'STREAM',
                interactive: true,
                title: '<img src="styles/legend/STREAM_3.png" /> STREAM'
            });
var format_Road_4 = new ol.format.GeoJSON();
var features_Road_4 = format_Road_4.readFeatures(json_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_4.addFeatures(features_Road_4);
var lyr_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_4, 
                style: style_Road_4,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_4.png" /> Road'
            });
var format_WATERBODY_5 = new ol.format.GeoJSON();
var features_WATERBODY_5 = format_WATERBODY_5.readFeatures(json_WATERBODY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERBODY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERBODY_5.addFeatures(features_WATERBODY_5);
var lyr_WATERBODY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERBODY_5, 
                style: style_WATERBODY_5,
                popuplayertitle: 'WATERBODY',
                interactive: true,
                title: '<img src="styles/legend/WATERBODY_5.png" /> WATERBODY'
            });
var format_DAM_6 = new ol.format.GeoJSON();
var features_DAM_6 = format_DAM_6.readFeatures(json_DAM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAM_6.addFeatures(features_DAM_6);
var lyr_DAM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAM_6, 
                style: style_DAM_6,
                popuplayertitle: 'DAM',
                interactive: true,
                title: '<img src="styles/legend/DAM_6.png" /> DAM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Bharathapuzha_1.setVisible(true);lyr_geology_2.setVisible(true);lyr_STREAM_3.setVisible(true);lyr_Road_4.setVisible(true);lyr_WATERBODY_5.setVisible(true);lyr_DAM_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Bharathapuzha_1,lyr_geology_2,lyr_STREAM_3,lyr_Road_4,lyr_WATERBODY_5,lyr_DAM_6];
lyr_Bharathapuzha_1.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_geology_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_STREAM_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Road_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_WATERBODY_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DAM_6.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_Bharathapuzha_1.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_geology_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_STREAM_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDER1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Road_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_WATERBODY_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DAM_6.set('fieldImages', {'Name': 'TextEdit', 'name1': 'TextEdit', 'Photo': 'TextEdit', });
lyr_Bharathapuzha_1.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_geology_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_STREAM_3.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_Road_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_WATERBODY_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DAM_6.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_DAM_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});