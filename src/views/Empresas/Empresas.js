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

  // componentWillMount() {
  //   fetch('http://specula.azurewebsites.net/api/fornecedor')
  //     .then(res => res.json())
  //     .then(res => this.setState({
  //       data: res,
  //     }));
  // }

  render() {
    const data = [{"Documento":"13281703000187","Nome":"MERIDIANO SISTEMAS E SERVIÇOS LTDA"},{"Documento":"67020198000146","Nome":"DELIMA ENGENHARIA E CONSTRUÇÕES LTDA-EPP "},{"Documento":"71655120000175","Nome":"PLENA TERCEIRIZAÇÃO DE SERVIÇOS EIRELLI"},{"Documento":"46044392000191","Nome":"CONSTRUMEDICI ENGENHARIA E COMÉRCIO LTDA."},{"Documento":"09373370000149","Nome":"DE HARO PRODUÇÕES ARTÍSTICAS LTDA."},{"Documento":"05676557000160","Nome":"ABACATEIRO PRODUÇÃO & ARTE LTDA-ME"},{"Documento":"04002395000112","Nome":"LEMAM CONSTRUÇÕES E COMERCIO LTDA."},{"Documento":"05449168000100","Nome":"ASSOCIAÇÃO A FAMILIA UNIAO FAZ A FORÇA"},{"Documento":"65830549000159","Nome":"TECPLAST SERVIÇOS DE PROJETOS EIRELI-ME"},{"Documento":"71632160000100","Nome":"G.N. GERENCIAMENTO N. DE TRANSP. E SERVIÇ. LTDA."},{"Documento":"07879965000145","Nome":"CONSTRUTORA LETTIERI CORDARO LTDA"},{"Documento":"11434193000105","Nome":"MA23 PARTICIPAÇÕES E CONSULTORIA EMPRESARIAL LTDA"},{"Documento":"53147351000196","Nome":"Kermaq Manutenção e Comércio de Máquinas Ltda"},{"Documento":"57510596000197","Nome":"CONSÓRCIO SIMÉTRICA / PAEZ DE LIMA"},{"Documento":"04867885000181","Nome":"FRAMARTEL COMÉRCIO E MANUTENÇÃO DE ELEVADORES LTDA"},{"Documento":"60332319000146","Nome":"S.A PAULISTA DE CONSTRUÇÕES E COMÉRCIO"},{"Documento":"10220039000178","Nome":"CONSÓRCIO VIA ROMA"},{"Documento":"03973494000189","Nome":"OBRACON ENGENHARIA E LOCAÇÃO DE EQUIPAMENTOS LTDA."},{"Documento":"11845291000135","Nome":"PIX ADMINISTRADORA DE CARTÕES DE CRÉDITO E SERVIÇO"},{"Documento":"43677822000114","Nome":"SOEBE CONSTRUÇÃO E PAVIMENTAÇÃO LTDA."},{"Documento":"62162847000120","Nome":"JOFEGE PAVIMENTAÇÃO E CONSTRUÇÃO LTDA."},{"Documento":"07906527000129","Nome":"CONSTRUTORA JR SÃO PAULO LTDA."},{"Documento":"07390782838   ","Nome":"Claudia Maria padilha"},{"Documento":"09258832809   ","Nome":"Cristina carneiro"},{"Documento":"07804254806   ","Nome":"Elizabeth Menezes da Silva"},{"Documento":"13560755840   ","Nome":"Jose Ricardo Tomaselli Cruz"},{"Documento":"26903400893   ","Nome":"Luciana Cristina N.M. da Silva"},{"Documento":"85644650863   ","Nome":"Maria valéria de Mattos"},{"Documento":"11629737810   ","Nome":"Robson lourenço"},{"Documento":"18850126832   ","Nome":"Saloly Cardoso Furtado"},{"Documento":"66806555000133","Nome":"FBS CONSTRUÇÃO CIVIL E PAVIMENTAÇÃO LTDA."},{"Documento":"02812740000158","Nome":"INTERATIVA SERVICE LTDA."},{"Documento":"01839455810   ","Nome":"Celso do Nascimento Silva"},{"Documento":"14400565874   ","Nome":"Cristiana Feliciano de Souza"},{"Documento":"26003116889   ","Nome":"Denis Henrique da S. Duarte"},{"Documento":"52038440620   ","Nome":"Euzeli A. de Freitas Schwab"},{"Documento":"12207486842   ","Nome":"Leandro Jose Setra"},{"Documento":"00149396813   ","Nome":"Maria de Fatima Mommensohn"},{"Documento":"95571957891   ","Nome":"Maria Virginia Abbud Hajjar"},{"Documento":"49562223868   ","Nome":"Odete Carrera"},{"Documento":"80050310844   ","Nome":"Ronaldo Ramos da Silva"},{"Documento":"00828435898   ","Nome":"Sandra Lúcia Gomes"},{"Documento":"33326867808   ","Nome":"Yeda Branco Portero Peres"},{"Documento":"08711644000108","Nome":"COOPERPLANALTO – COOPERATIVA DE TRABALHO EM TRANSP"},{"Documento":"10284501000109","Nome":"PROVISÃO JC COMÉRCIO DE ELETRO ELETRÔNICOS LTDA-EP"},{"Documento":"09229971000182","Nome":"HAMOVER COMÉRCIO DE MATERIAL PARA CONSTR. LTDA.-ME"},{"Documento":"06352028837   ","Nome":"Luis Gustavo Castelar Petri"},{"Documento":"05115428000101","Nome":"GC – ASSESSORIA E TECNOLOGIA AMBIENTAL LTDA"},{"Documento":"64059041000136","Nome":"META TRANSPORTES LTDA"},{"Documento":"04392420000111","Nome":"IT2B TECNOLOGIA E SERVIÇOS LTDA. "},{"Documento":"02558157000162","Nome":"CONSÓRCIO REDE MULTISERVIÇOS"},{"Documento":"55953004000186","Nome":"ASSOCIAÇAO AMIGOS DE BAIRROS DA CIDADE NOVA SÃO MI"},{"Documento":"43970417000190","Nome":"CONSTRUTORA MASSAFERA LTDA"},{"Documento":"66748955000130","Nome":"ALMEIDA SAPATA ENGENHARIA E CONSTRUÇÕES LTDA"},{"Documento":"12376366000149","Nome":"CONSÓRCIO LOGOS-MAUBERTEC"},{"Documento":"52191228000100","Nome":"AN ENGENHARIA E CONSTRUÇÕES LTDA"},{"Documento":"66920794000110","Nome":"HIGILIMP LIMPEZA AMBIENTAL LTDA."},{"Documento":"04120205000161","Nome":"CONSTRUTORA GONÇALEZ NAGAMATI LTDA"},{"Documento":"39068741845   ","Nome":"Yasmin Valerio ferreira de Oliveira"},{"Documento":"00831964000181","Nome":"H PRINT REPROGRAFIA E AUTOMAÇÃO DE ESCRITÓRIO LTDA"},{"Documento":"03643992000163","Nome":"B & B ENGENHARIA E CONSTRUÇÕES LTDA"},{"Documento":"56838949000110","Nome":"CONSTRUTORA PROGREDIOR LTDA."},{"Documento":"03822315000102","Nome":"F9C SECURITY LTDA"},{"Documento":"05961207000146","Nome":"COZISERV SERVIÇO E COM. DE REFRIGERAÇÃO LTDA-ME."},{"Documento":"58625344000176","Nome":"DR. GHELFOND DIAGNÓSTICO MÉDICO LTDA."},{"Documento":"09362642000105","Nome":"OMEGA & ACORDE REGULARIZAÇÃO LTDA. ME"},{"Documento":"05500641000129","Nome":"GIOM COMERCIO E REPRESENTAÇÕES DE MOVÉIS LTDA"},{"Documento":"78901570963   ","Nome":"Mary Raquel Balekian"},{"Documento":"65035222000195","Nome":"ÉRA TÉCNICA ENGENHARIA CONSTRUÇÕES E SERVIÇOS LTDA"},{"Documento":"50583954000142","Nome":"A.Tonanni Construções e Serviços LTDA"},{"Documento":"43336288000182","Nome":"SÃO PAULO URBANISMO – SP-URBANISMO"},{"Documento":"04919057000140","Nome":"ASSISTENCIA TÉCNICA E MANUTENÇÃO DE ELEVADORES ELE"},{"Documento":"65853889000103","Nome":"SERG PAULISTA CONSTRUÇÕES E SERVIÇOS LTDA"},{"Documento":"48096044000193","Nome":"DEMAX SERVIÇOS E COMÉRCIO LTDA"},{"Documento":"57757510000125","Nome":"ASSOCIAÇÃO CASA SÃO JOSÉ E CENTRO COMUNITÁRIO DO J"},{"Documento":"47384102000111","Nome":""},{"Documento":"10860214000191","Nome":"COMPACT CAR COMÉRCIO E LOCAÇÕES DE VEICULOS ESPECI"},{"Documento":"09127785000132","Nome":"LEVIN COMERCIAL LTDA ME"},{"Documento":"09146722000123","Nome":"M.GROTTI SERV.COM.PAISAG. E JARDINAGEM LTDA.ME."},{"Documento":"43438001000125","Nome":"CONSTRUTORA ANASTÁCIO LTDA."},{"Documento":"05003219000168","Nome":"MACROSOLUTION COMÉRCIO IMPORTAÇÃO EXPORTAÇÃO E SER"},{"Documento":"03101876000112","Nome":"D.B. CONSTRUÇÕES LTDA"},{"Documento":"08039306000163","Nome":"RAN PRODUÇÃO DE EVENTOS LTDA"},{"Documento":"02811333000126","Nome":"EEC ENGENHARIA E CONSTRUÇÕES LTDA"},{"Documento":"00146889000110","Nome":"GOCIL SERVIÇOS GERAIS LTDA"},{"Documento":"07654535000125","Nome":"ALLTEC CONSTRUÇÕES E COMÉRCIO LTDA-EPP"},{"Documento":"06254861000182","Nome":"IRIVALDO LUIZ GONÇALVES - ME"},{"Documento":"61457941000577","Nome":"GOMAQ MÁQUINAS PARA ESCRITÓRIO LTDA."},{"Documento":"04463413000163","Nome":"DAVOP COMERCIAL DE FERRAGENS E MATERIAIS PARA CONS"},{"Documento":"04434120000158","Nome":"CDR PEDREIRA CENTRO DE REPOS. RESÍD. SÓLIDOS LTDA."},{"Documento":"09359786000102","Nome":"ASSOCIAÇÃO SÃO GABRIEL "},{"Documento":"43898972000158","Nome":"CONSTRUTORA ROY LTDA"},{"Documento":"06042422000106","Nome":"Associação Cultural Recreativa Esportiva Bloco do "},{"Documento":"00502167000150","Nome":"PROJEÇÃO ENGENHARIA PAULISTA DE OBRAS LTDA"},{"Documento":"47627898000196","Nome":"ÉPURA ENGENHARIA E CONSTRUÇÕES LTDA"},{"Documento":"07642660000115","Nome":"ORIGEM MÓVEIS PARA ESCRITÓRIO LTDA – ME"},{"Documento":"07169280000105","Nome":"KF2 ENGENHARIA E CONSULTORIA LTDA."},{"Documento":"04672772000120","Nome":"MARCOFFEE COMERCIAL E SERVIÇOS LTDA."},{"Documento":"02254737000166","Nome":"BASIC ELEVADORES LTDA"},{"Documento":"01850269000472","Nome":"RIOS PARK ESTACIONAMENTO LTDA EPP."}];
    return (
      <div className="animated fadeIn">
        <h1>Fornecedores</h1>
        <Table headers={['CNPJ/CPF', 'Nome']} data={data} />
        {/*<Charts />*/}
      </div>
    )
  }
}

export default Empresas;
