import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1>Specula</h1>
        <button onClick={() => props.changePage()}>Mudar página</button>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/sobre')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home);