import { connect } from 'react-redux'
import Features from 'Components/Features'

const mapStateToProps = (state) => {
  return {
    images: state.app.images
  }
}

const mapDispatchToProps = () => {
  return{}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Features)