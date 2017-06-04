import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar, HorizontalBar } from 'react-chartjs-2';

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

const barPrefeituras = {
  labels: ['São Paulo', 'Freguesia do Ó', 'Osasco'],
  datasets: [
    {
      label: 'Licitação em R$',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 27]
    }
  ]
};

const bar = {
  labels: ['Janeiro', 'Fevereiro', 'Março'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 27]
    }
  ]
};

export default class Licitacao extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <h1>Licitações</h1>
        <div>
            <div className="card">
                <div className="card-header">
                    <div>
                        <span>Empresa:</span>
                        <span>Empresa x</span>
                    </div>
                    <div>
                        <span>Modalidade:</span>
                        <span>Pregão</span>
                    </div>
                </div>
                <div className="card-block">
                    <div className="chart-wrapper">
                        <Bar data={barPrefeituras}
                            options={line.options}
                        />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <span>Maiores licitações por empresa</span>
                </div>
                <div className="card-block">
                    <div className="chart-wrapper">
                        <Bar data={bar}
                            options={{
                            maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <span>Licitação x</span>
                </div>
                <div className="card-block">
                    <div className="chart-wrapper">
                        <Line data={line}
                            options={line.options}
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
