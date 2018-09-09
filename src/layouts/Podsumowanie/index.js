import { connect } from 'react-redux';

import { Podsumowanie as PodsumowanieComponent } from './Podsumowanie';

const mapStateToProps = (state, ownProps) => ({
    income: state.income,
});

export const Podsumowanie = connect(mapStateToProps)(PodsumowanieComponent);
