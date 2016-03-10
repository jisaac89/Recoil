// for typescript we need to decalre module first.

declare var module : any

import Align from './Align/Align';
import Button from './Button/Button';
import Card from './Card/Card';
import Checkbox from './Checkbox/Checkbox';
import Door from './Door/Door';
import Dropdown from './Dropdown/Dropdown';
import Emerge from './Emerge/Emerge';
import Grid from './Grid/Grid';
import Input from './Input/Input';
import Layer from './Layer/Layer';
import Loading from './Loading/Loading';
import Modal from './Modal/Modal';
import Pane from './Pane/Pane';
import Selectable from './Selectable/Selectable';
import Shrink from './Shrink/Shrink';
import Toolbar from './Toolbar/Toolbar';
import Transform from './Transform/Transform';
import Wizard from './Wizard/Wizard';
import Shortcut from './Shortcut/Shortcut';

import './Recoil.less';

(module).exports = {
  Align,
  Button,
  Card,
  Checkbox,
  Door,
  Dropdown,
  Emerge,
  Grid,
  Input,
  Layer,
  Loading,
  Modal,
  Pane,
  Selectable,
  Shrink,
  Toolbar,
  Transform,
  Wizard,
  Shortcut
}
