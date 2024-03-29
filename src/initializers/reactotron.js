import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
    .configure() // we can use plugins here -- more on this later
    .configure({ name: 'Smash Pr Front' })
    .use(reactotronRedux())
    .connect() // let's connect!

export default reactotron