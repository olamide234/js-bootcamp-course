class Hello extends React.Component {
    render() {
        // console.log(this.props);
        //props are immutable
        // this.props.from = "blue" //this will give error bcos it is a read only property "from" 
        let bangs= "!".repeat(this.props.bangs); 
        return (
            <div>
                <h1>Hello {this.props.to} from {this.props.from}{bangs} </h1>
                <img src={this.props.img}/>
            </div>
        );
    }
}