import * as React from 'react';

import Align from '../../components/Align/Align';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Checkbox from '../../components/Checkbox/Checkbox';
import Door from '../../components/Door/Door';
import Dropdown from '../../components/Dropdown/Dropdown';
import Emerge from '../../components/Emerge/Emerge';
import Grid from '../../components/Grid/Grid';
import Input from '../../components/Input/Input';
import Layer from '../../components/Layer/Layer';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import Pane from '../../components/Pane/Pane';
import Selectable from '../../components/Selectable/Selectable';
import Shrink from '../../components/Shrink/Shrink';
import Toolbar from '../../components/Toolbar/Toolbar';
import Transform from '../../components/Transform/Transform';
import Wizard from '../../components/Wizard/Wizard';

const ButtonProperties = [
  {
    name :'disabled',
    type: 'boolean',
    description: 'Toggle if the button is disabled or not.'
  },
  {
    name :'block',
    type: 'boolean',
    description: 'Block converts the button element to a block element which gives it full width.'
  },
  {
    name :'className',
    type: 'string',
    description: 'Add a list of class names.'
  },
  {
    name :'type',
    type: 'string',
    description: 'Template type for the button.'
  },
  {
    name :'icon',
    type: ' string',
    description: 'Include a font-awesome icon.'
  },
  {
    name :'href',
    type: 'string',
    description: 'Add a link to the button.'
  },
  {
    name :'target',
    type: 'string',
    description: 'Add a target attribute to the button.'
  },
  {
    name :'ghost',
    type: 'boolean',
    description: 'Switch to the ghost template mode.'
  },
  {
    name :'strech',
    type: 'boolean',
    description: 'Add a width of 100% to the button.'
  },
  {
    name :'pointer',
    type: 'any',
    description: 'Add a mouse pointer on hover.'
  },
  {
    name :'right',
    type: 'boolean',
    description: 'Float the button right.'
  },
  {
    name :'left',
    type: 'boolean',
    description: 'Float the button left.'
  },
  {
    name :'size',
    type: 'string',
    description: 'Set the size of the button by class name.'
  },
  {
    name :'submit',
    type: 'boolean',
    description: 'Set whether the button is of submit type.'
  },
  {
    name :'style',
    type: 'any',
    description: 'Add custom inline styles.'
  },
  {
    name :'checked',
    type: 'boolean',
    description: 'Sets wether the button is checked.'
  },
  {
    name :'onClick',
    type: '()',
    description: 'Set an onClick function to the element.'
  },
  {
    name :'tabIndex',
    type: 'any',
    description: 'Set a tabIndex to the button.'
  },
  {
    name :'progressiveClick',
    type: 'any',
    description: 'An array of functions that will repeat starting from the firts index.'
  },
  {
    name :'shortcut',
    type: 'any',
    description: 'Set a shortcut key to the button that will trigger the click event.'
  }
]


export default class TutorialButton extends React.Component<any,any>{
  render() {

    const ButtonColumns = [
      {name: 'name', width:150},
      {name: 'type', width:110},
      {name: 'description', width:1300}
    ]

    return (
      <Layer className="p50">
        <h1>Button</h1>
        <Door open={true}>
          <Grid numberPerPage={20} sortable columns={ButtonColumns} dataSource={ButtonProperties} />
        </Door>
      </Layer>
    )
  }
}
