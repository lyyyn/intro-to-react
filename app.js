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
            name: '',
            price: 8,
            description: '',
            value: '',
            isHiring: true
        }
    }

    clickHandler = () => {
        this.state.price = 10;
        console.log(this.state.price);
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
        console.log(this.state);
        console.log(event.target.id, ': ', event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        };
        this.setState({
            products: [newItem, ...this.state.products], 
            price: '',description:'',name:''
        });
    }

    render() {
        return (
            <div>
                <Greet Name="Bruce" heroName="Batman">
                    This is Batman. Children of Greet.
                </Greet>
                <button onClick={this.clickHandler}>Click</button>
                <h1> Big Time Shopping </h1>
                
                {!this.state.isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} id='name' placeholder='name of product' />
                    <br />
                    <label htmlFor='price'>Price</label>
                    <input type='number' value={this.state.price} onChange={this.handleChange} id='price' />
                    <br />
                    <label htmlFor='description'>Description</label>
                    <input type='textarea' value={this.state.description} onChange={this.handleChange} id='description' />
                    <input type="submit" />
                </form>
                <div>
                    <h2>Preview our new item</h2>
                    <h3>{this.state.name}</h3>
                    <h4>{this.state.price}</h4>
                    <h5>{this.state.description}</h5>
                </div>
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