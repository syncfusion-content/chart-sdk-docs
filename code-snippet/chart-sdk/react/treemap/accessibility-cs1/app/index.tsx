import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  TreeMapComponent, LevelDirective, LevelsDirective, Inject,
  TreeMapLegend, TreeMapTooltip
} from '@syncfusion/ej2-react-treemap';
import { DrillDown } from 'default-data.ts';

export function App() {
  return (
    <div>
      <TreeMapComponent id='treemap'
        palette={['#9999ff', '#CCFF99', '#FFFF99', '#FF9999', '#FF99FF', '#FFCC66']}
        titleSettings={{
          text: 'List of countries by population',
          textStyle: { size: '15px' },
          subtitleSettings: { text: 'Treemap SubTitle', textStyle: { color: 'red', size: '18px' } }
        }}
        enableDrillDown={true}
        format='n'
        useGroupingSeparator={true}
        dataSource={DrillDown}
        weightValuePath='Population'
        legendSettings={{ visible: true, position: 'Top', shape: 'Rectangle',
          textStyle: { fontFamily: 'Segoe UI' } }}
        tooltipSettings={{ visible: true, format: '${Name} : ${Population}' }}
        leafItemSettings={{ labelPath: 'Name', showLabels: false,
          labelStyle: { size: '0px' }, border: { color: 'black', width: 0.5 } }}>
        <Inject services={[TreeMapLegend, TreeMapTooltip]} />
        <LevelsDirective>
          <LevelDirective groupPath='Continent' border={{ color: 'black', width: 0.5 }} />
          <LevelDirective groupPath='States' border={{ color: 'black', width: 0.5 }} />
          <LevelDirective groupPath='Region' showHeader={false} border={{ color: 'black', width: 0.5 }} />
        </LevelsDirective>
      </TreeMapComponent>
      <TreeMapComponent id='treemap_tooltip'
        titleSettings={{ text: 'Top 10 largest islands in the World', textStyle: { size: '15px' } }}
        format='n'
        useGroupingSeparator={true}
        rangeColorValuePath='Area'
        dataSource={[
          { Name: 'Greenland', Area: 2130800, Population: 56483, Location: 'North America' },
          { Name: 'New Guinea', Area: 785753, Population: 1306940, Location: 'Oceania' },
          { Name: 'Borneo', Area: 743330, Population: 19804064, Location: 'Asia' },
          { Name: 'Madagascar', Area: 587713, Population: 22005222, Location: 'Africa' },
          { Name: 'Baffin Island', Area: 507451, Population: 10745, Location: 'North America' },
          { Name: 'Sumatra', Area: 443066, Population: 50000000, Location: 'Asia' },
          { Name: 'Honshu', Area: 225800, Population: 103000000, Location: 'Asia' },
          { Name: 'Victoria Island', Area: 217291, Population: 1875, Location: 'North America' },
          { Name: 'Great Britain', Area: 209331, Population: 60800000, Location: 'Europe' },
          { Name: 'Ellesmere Island', Area: 183965, Population: 146, Location: 'North America' }
        ]}
        weightValuePath='Area'
        legendSettings={{ visible: true, position: 'Bottom', mode: 'Interactive', height: '10',
          title: { text: 'Area' } }}
        leafItemSettings={{ labelPath: 'Name', border: { color: 'white', width: 0.5 },
          colorMapping: [
            { from: 100000, to: 250000, label: '0.1M - 0.25M', color: '#547C84' },
            { from: 250000, to: 550000, label: '0.25M - 0.55M', color: '#37AFAB' },
            { from: 550000, to: 750000, label: '0.55M - 0.75M', color: '#A4D6AD' },
            { from: 750000, to: 2250000, label: '0.75M - 2M', color: '#DEEBAE' }
          ] }}>
        <Inject services={[TreeMapLegend, TreeMapTooltip]} />
      </TreeMapComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('treemap-container'));
root.render(<App />);
