# Fetch Data

Di React Native untuk fetch data mirip dengan ReactJS dapat menggunakan axios, fetch atau yang lainnya.

Misalnya :

```
import axios from 'axios'

const API = 'https://podspace-server-vzesammxet.now.sh/podcasts';

export default App extends Component {
  async componentDidMount() {
    const result = await axios(API);
    this.setState({
      podcasts: result.data,
    });
  }
}
```
