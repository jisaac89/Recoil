import * as React from 'react';
import { Table, AdvancedLayer, Layer } from '../../../src/index';

export interface ITutorialViewProps {
  description: string;
  Id: string;
  toggleModal?: any;
  examples?: any;
  columnData: any;
  video?: any;
  mobile?: boolean;
  scrollIf: boolean;
  scrollToId: string;
}

export default class TutorialView extends React.Component<ITutorialViewProps, any> {
  constructor(props: never) {
    super(props);

    this.state = {
      showProps: true,
      showVideo: false,
      showModal: false
    };
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    });
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    });
  }

  openModal() {
    this.setState(
      {
        showModal: true
      },
      () => {
        this.props.toggleModal(this.state.showModal);
      }
    );
  }

  closeModal() {
    this.setState(
      {
        showModal: false
      },
      () => {
        this.props.toggleModal(this.state.showModal);
      }
    );
  }

  detailTemplate(item: { type: string; description: string }) {
    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [{ name: 'name', width: 120 }, { name: 'type', width: 140 }, { name: 'description' }];

    const mobileColumns = [{ name: 'name' }];

    return (
      <Layer className="pl20 p10">
        <p>
          <small>Value: {item.type}</small>
        </p>
        <p>{item.description}</p>
      </Layer>
    );
  }

  render() {
    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [
      {
        name: 'name',
        template: (data: { name: string }) => {
          return <h3 className="ptb20">{data.name}</h3>;
        }
      }
    ];

    return (
      <AdvancedLayer fill offset={-100} flex scrollY scrollIf={props.scrollIf} scrollToId={props.scrollToId}>
        <div className="mobile-version w1000px center-width p50">
          <Layer>
            <h2 id={props.Id} className="pb20">
              Description
            </h2>
            <p>{props.description}</p>
          </Layer>

          <Layer className="pt20">
            <h2 className="pb20">Examples</h2>
            {props.examples ? props.examples() : null}
          </Layer>

          <h2 className="ptb20">Props</h2>
          <Table
            sortable
            columns={columns}
            dataSource={props.columnData}
            detailTemplate={this.detailTemplate.bind(this)}
            pageSize={props.columnData.length}
            detailTemplateSelectedElements={props.columnData}
            detailTemplateHideToggle
            searchableKeys={['name']}
            searchTitle={'Filter by property name.'}
          />
        </div>
      </AdvancedLayer>
    );
  }
}
