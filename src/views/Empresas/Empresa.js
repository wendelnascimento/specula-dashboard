import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

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
        <h4>Já faturou R$ { this.state.data.faturamento } </h4>
        <h4>Atendendo licitações { this.state.data.licitacoesAtendidas } desde DATE</h4>

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
