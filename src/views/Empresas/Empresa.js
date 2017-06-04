import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import CardBlock from '../../components/CardBlock/CardBlock';

const bar = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Preço das licitações',
      backgroundColor: 'rgba(4, 0, 255, 0.48)',
      borderColor: 'rgba(4, 0, 255, 0.7)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(4, 0, 255, 0.7)',
      hoverBorderColor: 'rgba(4, 0, 255, 0.7)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


const line = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ],
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  callback: (value, index, values) => `R$${value}`
              }
          }]
      },
      maintainAspectRatio: false
  }
};


const lineOpts = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
        gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
        },
        ticks: {
            fontSize: 2,
            fontColor: 'transparent',
        }

        }],
        yAxes: [{
        display: false,
        ticks: {
            display: false,
            min: Math.min.apply(Math, line.datasets[0].data) - 5,
            max: Math.max.apply(Math, line.datasets[0].data) + 5,
        }
        }],
    },
    elements: {
        line: {
        borderWidth: 1
        },
        point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
        },
    }
}


const pie = {
  labels: [
    'Educação',
    'Saúde',
    'Transporte'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};



export default class Empresa extends Component {

  state = {
    data: {}
  };

  componentDidMount() {
    const data = {
      nome: 'Empresa X',
      faturamento: 150000,
      licitacoesAtendidas: 20,

    };

    this.setState({
      data: data,
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h1>{ this.state.data.nome }</h1>
        <div className="row">
          <div className="col-md-6">
            <p><strong>CNPJ/CPF: </strong> 52.685.479/0001-36 </p>
          </div>
          <div className="col-md-6">
            <p><strong>Segmento: </strong> Transporte de bens </p>
          </div>
        </div>
        <div className="row">
          <CardBlock
              cols="col-sm-6"
              cardClass="card-success"
              title={ 'R$ ' + this.state.data.faturamento } 
              text="Faturados com licitações"
              chart={<Line data={line} options={lineOpts} height={70}/>} />
          <CardBlock
              cols="col-sm-6"
              cardClass="card-warning"
              title={ this.state.data.licitacoesAtendidas } 
              text={`Licitações desde ${this.state.data.inicio}`}
              chart={<Line data={line} options={lineOpts} height={70}/>} />
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-block">
                <Bar data={bar} />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-block">
                <Pie data={pie} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
