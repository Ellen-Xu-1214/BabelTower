class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dynamicList: []
      };
      this.addListItem = this.addListItem.bind(this);
    }
    addListItem(itemToAdd){
      let currentList = this.state.dynamicList;
      currentList.push(itemToAdd);
      this.setState({dynamicList : currentList});
    }

    render(){
      return(
        <div class="component-wrapper">
          <h1>Simple Dynamic List</h1>
          <DynamicList listItems={this.state.dynamicList}/>
          <InputBox addItem={this.addListItem} />
        </div>
      );
    }
  }
  
  class DynamicList extends React.Component {
    render(){
      return (
        <ul>
          {
            Object.keys(this.props.listItems).map( (index) => {
              return (
                <li name={index}>{this.props.listItems[index]}</li>
              );
            })
          }
        </ul>
      );
    }
  }
  
  class InputBox extends React.Component {
    formSubmit(e){
      e.preventDefault();    
      let itemToAdd = this.refs.item.value;
      if(itemToAdd != ''){
        this.props.addItem(itemToAdd);
        this.refs.item.value = '';
      }
    }
    render(){
      return (
        <form ref="itemForm" onSubmit={e => this.formSubmit(e)}>
          <input type="text" id="item" ref="item"/><br />
          <button type="submit" class="btn btn-primary">Add Item</button>
        </form>
      );
    }
  }
  
  React.render(
    <App />,
    document.getElementById('app')
  );