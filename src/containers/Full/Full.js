import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Licitacao from '../../views/Licitacao/Licitacao';
import Fornecedores from '../../views/Empresas/';
import Fornecedor from '../../views/Empresas/Empresa';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} start={new Date()}/>
                <Route path="/licitacoes" name="Licitacoes" component={Licitacao} />
                <Route path="/fornecedores" name="Fornecedores" component={Fornecedores}/>
                <Route path="/fornecedor" name="Fornecedor" component={Fornecedor}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
