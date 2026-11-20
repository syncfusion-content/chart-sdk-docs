import Vue from 'vue';
import { MapsPlugin, Selection } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);

new Vue({
    el: '#app',
    template: `
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
`,
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
});
