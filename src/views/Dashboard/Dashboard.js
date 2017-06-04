import React, { Component } from 'react';
import Table from '../../components/Table/Table'
import Charts from '../Charts/Charts'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            records1: null,
            records2: null,
            records3: null,
            count: 43741238658.4500,
        }
    }
    async componentDidMount() {
        try {
            this.startTimer();
            this.setState({ isLoading: true });
            const records2 = await this.getRecords();
            this.setState({records2: records2, isLoading: false});
        }
        catch(e) {
            console.log(e);
        }
    }
    componentWillUnmount (){
        clearInterval(this.timer);
    }
    tick () {
        this.setState({count: (this.state.count + 350.37)})
    }
    startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 10000)
    }
    formatMoney(amount){
        amount = amount.toFixed(2)
        var dollars = Math.floor(amount).toString().split('');
        var cents = (Math.round((amount%1)*100)/100).toString().split('.')[1];
        if(typeof cents == 'undefined'){
            cents = '00';
        }else if(cents.length == 1){
            cents = cents + '0';
        }
        var str = '';
        for(var i=dollars.length-1; i>=0; i--){
            str += dollars.splice(0,1);
            if(i%3 == 0 && i != 0) str += '.';
        }
        return str + ',' + cents;
    }
    getRecords() {
        //return invokeApi({ path: `/steps/task/${this.props.match.params.id}` }, this.props.userToken);
        return [
            {DocumentoFornecedor:"50866490000181",variancia:1.1067789911457161E+20},{DocumentoFornecedor:"08849334000146",variancia:3.610870026220741E+19},{DocumentoFornecedor:"08003772000199",variancia:3.1481440490729274E+17},{DocumentoFornecedor:"50123496000169",variancia:1.5508226168314118E+17},{DocumentoFornecedor:"60742616000160",variancia:1929026794364918.3}];
    }
    render() {
        return (
            <div className="row">
                <div className="animated fadeIn col-sm-6">
                    <h2>Suspeitômetro</h2>
                    <div className="card">
                        <div className="card-block DashboardCellContent">
                            <div style={{float:'left', width:'100%'}}>
                                <b className="Currency">R$</b>
                                <b className="Timer">{this.formatMoney(this.state.count)}</b>
                                <span className="TimerLegend"> em licitações</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animated fadeIn col-sm-6">
                    <h2>Top 5 - Empresas</h2>
                    <div className="card">
                        <div className="card-block DashboardCellContent">
                            {this.state.records2 && (
                                <Table headers={['CPF/CNPJ', 'Total Suspeito']} data={this.state.records2} />
                            )}
                        </div>
                    </div>
                </div>
                {/*<div className="animated fadeIn col-sm-12">
                    <h2>Licitações Recentes</h2>
                    <div className="card">
                        <div className="card-block">
                            {this.state.records2 && (
                                <Table headers={['Nome', 'CNPJ/CPF', 'Última Licitação', 'Score']} data={this.state.records2} />
                            )}
                        </div>
                    </div>
                </div>*/}
            </div>
        )
    }
}
export default Dashboard;
