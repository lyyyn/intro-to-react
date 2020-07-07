const message = 'Hello World 123';

console.log(products);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products
        }
    }
    render() {
        return (
            <div>
                <h1> Big Time Shopping </h1>
                <ul>
                    {this.state.products.map(product => <li>{product.name}</li>)}
                </ul>
            </div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)