import {
  ColorValue,
  TabFolder,
  Tab,
  TabFolderScrollEvent,
  TabFolderSelectEvent,
  PropertyChangedEvent,
  Properties
} from 'tabris';


let widget: TabFolder = new TabFolder({tabBarLocation: 'top'});

// Properties
let paging: boolean;
let selection: Tab;
let tabBarLocation: 'auto' | 'bottom' | 'hidden' | 'top';
let tabMode: 'fixed' | 'scrollable';
let textColor: ColorValue;

paging = widget.paging;
selection = widget.selection;
tabBarLocation = widget.tabBarLocation;
tabMode = widget.tabMode;
textColor = widget.textColor;

widget.paging = paging;
widget.selection = selection;
widget.textColor = textColor;

let properties: Properties<typeof TabFolder> = {paging, selection, tabBarLocation, tabMode, textColor};
widget = new TabFolder(properties);
widget.set(properties);

// Events
let target: TabFolder = widget;
let timeStamp: number = 0;
let type: string = 'foo';
let offset: number = 0;
let value: Tab = widget.selection;

let tabFolderScrollEvent: TabFolderScrollEvent = {target, timeStamp, type, offset, selection};
let tabFolderSelectEvent: TabFolderSelectEvent = {target, timeStamp, type, selection};
let tabFolderSelectionChangedEvent: PropertyChangedEvent<TabFolder, Tab> = {target, timeStamp, type, value};

widget
  .onSelectionChanged((event: PropertyChangedEvent<TabFolder, Tab>) => {})
  .onSelect((event: TabFolderSelectEvent) => {})
  .onScroll((event: TabFolderScrollEvent) => {});

class CustomComponent extends TabFolder {
  public foo: string;
  constructor(props: Properties<typeof TabFolder> & Partial<Pick<CustomComponent, 'foo'>>) { super(props); }
}

new CustomComponent({foo: 'bar'}).set({foo: 'bar'});
