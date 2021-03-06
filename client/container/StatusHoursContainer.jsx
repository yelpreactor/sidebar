import { connect } from 'react-redux';
import StatusHours from '../component/StatusHours';

const mapStateToProps = state => ({
  hours: state.hours,
  isOpen: state.isOpen,
});

export default connect(mapStateToProps)(StatusHours);
