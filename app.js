var GroceryList = () => (
  <div>
    <EachGroceryListItem groceries={['dog food', 'pet lobster', 'lobster food', 'pet neighbor', 'banana', 'apple pie']}/>
  </div>
);

var EachGroceryListItem = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		hover: false,
      clicked: false
  	};
  }

  onClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  onListItemHover() {
  	this.setState({
  		hover: !this.state.hover
  	});
  }

  render() {
    var style = {
    	fontWeight: this.state.hover ? 'bold' : 'normal',
      textDecoration: this.state.clicked ? 'line-through' : 'none'

    };

  	return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onClick={this.onClick.bind(this)}>{this.props.grocery}</li>
  	);
  }
}

ReactDOM.render(<GroceryList/>, document.getElementById('app'));