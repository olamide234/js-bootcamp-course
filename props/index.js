//Properties aka. Props allow us to make our component customizable 
//or configurable. A useful component is a reuseable one
// Our greeting will be Hi _________ from _______.
//Let's make two "properties":
//"to" and "from"

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from ="Paul" 
                    // for other types apart from string, embed JS expression using curly braces
                    bangs={4}
                    data={[1,2,3,4,5]}
                    isFunny={true}
                    img="https://images.unsplash.com/photo-1536053341826-c373a78370b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3782&q=80"
                />
                <Hello to="Cher" from ="Sonny"/> {/* we are now passing data as properties to the Hello component */}
                
                {/* <NumPicker/> */}
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));