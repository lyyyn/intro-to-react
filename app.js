const message = 'Hello World 123';

console.log(products);

class Greet extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    Hello {this.props.Name} a.k.a. {this.props.heroName}
                </h2>
                <p>{this.props.children}</p>
            </div>

        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products,
            price: 8
        }
    }

    //change to class property
    clickHandler = () => {
        console.log(this.state.price);
    }

    render() {
        return (
            <div>
                <Greet Name="Bruce" heroName="Batman">
                    This is Batman. Children of Greet.
                </Greet>
                <button onClick={this.clickHandler}>Click</button>
                <h1> Big Time Shopping </h1>
                <ol>
                    {this.state.products.map(product => {
                        return (
                            <li>{product.name} (SGD{product.price})</li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)