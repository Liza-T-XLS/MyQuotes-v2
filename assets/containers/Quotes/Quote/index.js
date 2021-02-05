// == Imports

import { connect } from 'react-redux';

import Quote from '../../../components/Quotes/Quote';
import {
  changeQuoteFormLabels,
  loadQuoteData,
} from '../../../actions/quotes';

const mapStateToProps = (state, ownProps) => ({
  quote: ownProps.quote,
  displayFormOnClickHandler: ownProps.displayFormOnClickHandler,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuoteFormLabels: (newTitleLabel, newButtonLabel) => {
    dispatch(changeQuoteFormLabels(newTitleLabel, newButtonLabel));
  },
  loadQuoteData: (id, text, authorFirstName, authorLastName, characterName, mediumTitle, tags) => {
    dispatch(loadQuoteData(id, text, authorFirstName, authorLastName, characterName, mediumTitle, tags));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(Quote);
