import { connect } from 'react-redux'
import BubbleComponent from '../components/BubbleComponent'

// No state or dispatch to handle, just render the wrapped Bubble component
// Still follow the container-component pattern
const BubbleContainer = connect()(BubbleComponent)

export default BubbleContainer
