<template>
    <div id="app">
        <div class="wrapper">
            <ejs-maps id="maps" :shapeSelected="shapeSelected">
                <e-layers>
                    <e-layer :shapeData="shapeData" :selectionSettings="selectionSettings"></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
        <div id="shapeSelectedPopup">
            <strong>Selected coordinates</strong>
            <div id="selectedCoordinates"></div>
        </div>
    </div>
</template>

<script>
import { MapsComponent, LayerDirective, LayersDirective, Selection } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

export default {
    name: "App",
    components: {
        "ejs-maps": MapsComponent,
        "e-layers": LayersDirective,
        "e-layer": LayerDirective
    },
    data() {
        return {
            shapeData: world_map,
            selectionSettings: {
                enable: true,
                fill: 'green',
                border: { color: 'white', width: 2 }
            }
        };
    },
    provide: {
        maps: [Selection]
    },
    methods: {
        shapeSelected: function (args) {
    const popup = document.getElementById("shapeSelectedPopup");
    const coordinates = document.getElementById("selectedCoordinates");
    if (popup && coordinates && args.x !== undefined && args.y !== undefined) {
        coordinates.textContent = "X: " + args.x + ", Y: " + args.y;
        popup.style.left = args.x + "px";
        popup.style.top = args.y + "px";
        popup.style.display = "block";
    }
        }
    }
}
</script>
<style>
.wrapper {
    max-width: 800px;
    margin: 0 auto;
}

#shapeSelectedPopup {
    position: fixed;
    display: none;
    z-index: 1000;
    padding: 10px 14px;
    background-color: #ffffff;
    color: #1e293b;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 13px;
    pointer-events: none;
}
</style>
