import { connect } from 'react-redux'
import App from 'Components/App'

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
)(App)