        /*Estilo de la leyenda*/
        /*.info.leyenda {
            padding: 6px 8px;
            font: 14px Arial, Helvetica, sans-serif;
            background: white;
            background: rgba(255,255,255,0.8);
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            border-radius: 5px;
        }
        .leyenda-item {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
        }
        .info.leyenda i {
            width: 18px;
            height: 18px;
            display: inline-block;
            margin-right: 8px;
            opacity: 0.7;
        }
        .info.leyenda span {
            display: inline-block;
        }*/




/*//Crea funcion de buesqueda y zoom
function buscarPorCodigo() {
    var codigoBuscado = document.getElementById('codigoInput').value.trim();
    var encontrado = false;

    markers.eachLayer(function(layer) {
        if ('' + layer.feature.properties.Codigo_Acu === codigoBuscado) {
            encontrado = true;

            // Desagrupar los marcadores y centrar en el marcador específico
            var latlng = layer.getLatLng();
            map.setView(latlng, 18); // Ajusta el nivel de zoom según sea necesario
            layer.openPopup();

            // Para desagrupar, necesitamos temporalmente aumentar el zoom del mapa
            setTimeout(function() {
                map.zoomIn(); // Aumenta el zoom para desagrupar
                map.zoomOut(); // Vuelve al nivel de zoom original
            }, 500); // Ajusta el tiempo según sea necesario

            return;
        }
    });

    if (!encontrado) {
        alert('Elemento con código ' + codigoBuscado + ' no existe.');
    }
}*/


/*function actualizarCapaConFiltro(codigoBuscado) {
    if (geoJsonLayer) {
        map.removeLayer(geoJsonLayer); // Eliminar la capa existente
    }

    geoJsonLayer = L.geoJson(usuario, {
        filter: function(feature, layer) {
            return ('' + feature.properties.Codigo_Acu) === codigoBuscado;
        },
        // Las demás opciones como pointToLayer y onEachFeature van aquí
    });

    geoJsonLayer.addTo(map);
    markers.clearLayers(); // Limpia los marcadores actuales
    markers.addLayer(geoJsonLayer); // Añade la nueva capa filtrada al grupo
}*/

//Creación de leyenda al mapa
/*var leyenda = L.control({position: 'bottomright'});

leyenda.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info leyenda'),
        categorias = ['Acu', 'Acu-Alc', 'Acu-Alc-Aseo', 'Acu-Aseo', 'Alc-Aseo', 'Ninguno'],
        colores = ['#3D2BF4', '#41E6F5', '#F5C759', '#F4752E', '#F54D22', '#FFFFFF'];

    // Bucle para generar la leyenda con colores y categorías
    for (var i = 0; i < categorias.length; i++) {
        div.innerHTML +=
            '<div class="leyenda-item"><i style="background:' + colores[i] + '"></i><span>' + categorias[i] + '</span></div>';
    }

    return div;
};

leyenda.addTo(map);*/

        //var markers = L.markerClusterGroup();