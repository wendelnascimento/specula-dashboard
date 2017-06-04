import React, { Component } from 'react';

import Table from '../../components/Table/Table'
import Charts from '../Charts/Charts'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
  ]
};


class Empresas extends Component {

  render() {
    const data = [{
      nome: 'Nome empresa',
      cnpj: '22.142.278/0001-36',
      ultimaLicitacao: (new Date()).toLocaleDateString(),
      historico: (<Line data={line} redraw={false} options={{ maintainAspectRatio: false }} height={80} width={90} />),
    }, {
      nome: 'Nome empresa',
      cnpj: '22.142.278/0001-36',
      ultimaLicitacao: (new Date()).toLocaleDateString(),
      historico: (<Line data={line} redraw={false} options={{ maintainAspectRatio: false }} height={80} width={90} />),
    }, {
      nome: 'Nome empresa',
      cnpj: '22.142.278/0001-36',
      ultimaLicitacao: (new Date()).toLocaleDateString(),
      historico: (<Line data={line} redraw={false} options={{ maintainAspectRatio: false }} height={80} width={90} />),
    }];
    return (
      <div className="animated fadeIn">
        <h1>Fornecedores</h1>
        <Table headers={['Nome', 'CNPJ/CPF', 'Última licitação', 'Histórico de licitações']} data={data} />
        {/*<Charts />*/}
      </div>
    )
  }
}

export default Empresas;
