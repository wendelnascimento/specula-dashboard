import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar, HorizontalBar } from 'react-chartjs-2';
import Table from '../../components/Table/Table';
import CardBlock from '../../components/CardBlock/CardBlock';

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

export default class Licitacao extends Component {

  render() {
    const data = [{
      numero: '2013069',
      orgao: 'Prefeitura',
      modalidade: 'Pregão',
      fornecedor: 'Fornecedor x',
      data_publicacao: (new Date()).toLocaleDateString(),
      data_validade: (new Date()).toLocaleDateString(),
      valor: 100000,
    }, {
      numero: '2013069',
      orgao: 'Prefeitura',
      modalidade: 'Pregão',
      fornecedor: 'Fornecedor x',
      data_publicacao: (new Date()).toLocaleDateString(),
      data_validade: (new Date()).toLocaleDateString(),
      valor: 100000,
    }, {
      numero: '2013069',
      orgao: 'Prefeitura',
      modalidade: 'Pregão',
      fornecedor: 'Fornecedor x',
      data_publicacao: (new Date()).toLocaleDateString(),
      data_validade: (new Date()).toLocaleDateString(),
      valor: 100000,
    }];
    return (
      <div className="animated fadeIn">
        <h1>Licitações</h1>
         <div>
             <div className="row">
                 <CardBlock
                    cardClass="card-primary"
                    title="R$ 9.950"
                    text="Gastos"
                    chart={<Line data={line} options={lineOpts} height={70}/>}
                 />
                
             </div>
         </div>
         <Table headers={['Número', 'Órgão', 'Modalidade', 'Fornecedor', 'Data de publicação', 'Data de validade', 'Valor']} data={data} />
      </div>
    )
  }
}
