class App extends React.Component {
    render() {
        return (
            <div>
                <Friends
                    name="Elton"
                    hobbies={['Pianio', 'Singing', 'Dancing']}
                />
                <Friends
                    name="Agnes"
                    hobbies={['Drawing', 'Painting']}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));