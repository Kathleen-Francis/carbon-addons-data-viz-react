import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import PieChart from './PieChart';
class PieUpdater extends Component {
  state = {
    data: [
      ['Gryffindor', Math.floor(Math.random() * 100 + 1)],
      ['Slytherin', Math.floor(Math.random() * 100 + 1)],
      ['Ravenclaw', Math.floor(Math.random() * 100 + 1)],
      ['Hufflepuff', Math.floor(Math.random() * 100 + 1)],
      ['Teachers', Math.floor(Math.random() * 100 + 1)],
    ],
  };

  componentDidMount() {
    setInterval(() => {
      this.updateData();
    }, 5000);
  }

  updateData() {
    let data = [
      ['Gryffindor', Math.floor(Math.random() * 100 + 1)],
      ['Slytherin', Math.floor(Math.random() * 100 + 1)],
      ['Ravenclaw', Math.floor(Math.random() * 100 + 1)],
      ['Hufflepuff', Math.floor(Math.random() * 100 + 1)],
      ['Teachers', Math.floor(Math.random() * 100 + 1)],
    ];

    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;

    return <PieChart data={data} />;
  }
}

const staticData = [
  ['Gryffindor', Math.floor(Math.random() * 100 + 1)],
  ['Slytherin', Math.floor(Math.random() * 100 + 1)],
  ['Ravenclaw', Math.floor(Math.random() * 100 + 1)],
  ['Hufflepuff', Math.floor(Math.random() * 100 + 1)],
  ['Teachers', Math.floor(Math.random() * 20 + 1)],
];

const props = {
  data: staticData,
};

storiesOf('PieChart', module)
  .addWithInfo(
    'Default',
    `
      Pie Chart.
    `,
    () => (
      <div>
        <PieChart id="one" {...props} />
        <PieChart id="two" {...props} />
      </div>
    )
  )
  .addWithInfo('Updating', `Pie Chart w/ Updates`, () => <PieUpdater />);
