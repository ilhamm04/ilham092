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
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_1);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_1,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_1.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_Fisik_Alam_Jenis_Tanah_Kaligesing_2 = new ol.format.GeoJSON();
var features_Fisik_Alam_Jenis_Tanah_Kaligesing_2 = format_Fisik_Alam_Jenis_Tanah_Kaligesing_2.readFeatures(json_Fisik_Alam_Jenis_Tanah_Kaligesing_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_2.addFeatures(features_Fisik_Alam_Jenis_Tanah_Kaligesing_2);
var lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_2, 
                style: style_Fisik_Alam_Jenis_Tanah_Kaligesing_2,
                interactive: true,
    title: 'Fisik_Alam_Jenis_Tanah_Kaligesing<br />\
    <img src="styles/legend/Fisik_Alam_Jenis_Tanah_Kaligesing_2_0.png" /> Latosol  Coklat Tua<br />\
    <img src="styles/legend/Fisik_Alam_Jenis_Tanah_Kaligesing_2_1.png" /> Latosol Merah Kuning<br />\
    <img src="styles/legend/Fisik_Alam_Jenis_Tanah_Kaligesing_2_2.png" /> <br />'
        });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_3.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_3);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_3, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_3,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_3.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });
var format_Transportasi_Kecamatan_Kaligesing_LN_4 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_4 = format_Transportasi_Kecamatan_Kaligesing_LN_4.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_4.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_4);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_4, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_4,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_4.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.setVisible(true);lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_2.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1,lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_2,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3,lyr_Transportasi_Kecamatan_Kaligesing_LN_4];
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_2.set('fieldAliases', {'FID_JENIS_': 'FID_JENIS_', 'JNS_TNH': 'JNS_TNH', 'SUMBER': 'SUMBER', 'FID_Kecama': 'FID_Kecama', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER_1': 'SUMBER_1', 'KELURAHAN_': 'KELURAHAN_', 'Luas_Ha': 'Luas_Ha', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_4.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldImages', {'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'LAB_DESA': '', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_2.set('fieldImages', {'FID_JENIS_': 'TextEdit', 'JNS_TNH': 'TextEdit', 'SUMBER': 'TextEdit', 'FID_Kecama': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER_1': 'TextEdit', 'KELURAHAN_': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_4.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldLabels', {'KDEBPS': 'header label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'header label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_2.set('fieldLabels', {'FID_JENIS_': 'no label', 'JNS_TNH': 'no label', 'SUMBER': 'no label', 'FID_Kecama': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER_1': 'no label', 'KELURAHAN_': 'no label', 'Luas_Ha': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_3.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_4.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});