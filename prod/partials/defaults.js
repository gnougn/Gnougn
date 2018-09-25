import imported_elements from './elements';

let state = '';

let colors = [
  {
    parent: 'component_app',
    id: '',
    classList: '',
    innerHTML: `
      ${imported_elements.element_grid_cross()}
      ${imported_elements.element_grid_depth_90()}
      <input type="text" placeholder="search..." id="element_input_filter"/>
      <input type="text" placeholder="sort by likesup, likesdown" id="element_input_sort"/>
      <input type="text" placeholder="card, grid or list" id="element_input_view"/>
      <input type="text" placeholder="code, slider, photo, graphic, read, video, gallery or ux/ui" id="element_input_type"/>
      <ul id="element_ol_firebase_roster"></ul>
      <ul id="element_ol_firebase_library"></ul>
      <ul id="element_ol_firebase_skills"></ul>
      <ul id="element_ol_firebase_abilities"></ul>
      <ul id="element_ol_firebase_services"></ul>
      <ul id="element_ol_firebase_partners"></ul>
    `,
  }
];

export default {
  colors
}
