import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar, HorizontalBar } from 'react-chartjs-2';
import Table from '../../components/Table/Table';
import CardBlock from '../../components/CardBlock/CardBlock';

const line = {
  labels: ['Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Gasto com licitações em R$',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#20a8d8',
      borderColor: 'rgba(255,255,255,.5)',
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
      data: [90, 59, 80]
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

const lineQty = {
  labels: ['Abril', 'Maio', 'Junho'],
  datasets: [
    {
      label: 'Quantidade de licitações',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#20a8d8',
      borderColor: 'rgba(255,255,255,.5)',
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
      data: [90, 59, 80]
    }
  ],
  options: {
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

export default class Licitacao extends Component {

  render() {
    const data = [{
      numero: '2013069',
      orgao: 'Prefeitura',
      modalidade: 'Pregão',
      fornecedor: 'Fornecedor x',
      cpf_cnpj: '412.113.688-82',
      data_publicacao: (new Date()).toLocaleDateString(),
      data_validade: (new Date()).toLocaleDateString(),
      valor: 100000,
    }, {
      numero: '2013069',
      orgao: 'Prefeitura',
      modalidade: 'Pregão',
      fornecedor: 'Fornecedor x',
      cpf_cnpj: '412.113.688-82',
      data_publicacao: (new Date()).toLocaleDateString(),
      data_validade: (new Date()).toLocaleDateString(),
      valor: 100000,
    }, {
      numero: '2013069',
      orgao: 'Prefeitura',
      modalidade: 'Pregão',
      fornecedor: 'Fornecedor x',
      cpf_cnpj: '412.113.688-82',
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
                    cols="com-sm-6 col-lg-6"
                    cardClass="card-primary"
                    title="R$ 9.950"
                    text="Gastos com licitações"
                    chart={<Line data={line} options={lineOpts} height={70}/>}
                 />
                <CardBlock
                    cols="com-sm-6 col-lg-6"
                    cardClass="card-success"
                    title="50"
                    text="Quantidade de licitações"
                    chart={<Line data={lineQty} options={lineOpts} height={70}/>}
                 />
             </div>
         </div>
         <Table headers={['Número', 'Órgão', 'Modalidade', 'Fornecedor', 'CPF/CNPJ', 'Data de publicação', 'Data de validade', 'Valor']} data={data} />
      </div>
    )
  }
}
