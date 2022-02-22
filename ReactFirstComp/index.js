// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello there!</h1>
//                 <h1>Hello there!</h1>
//                 <h1>Hello there!</h1>
//             </div>
//         );
//     }
// }
function Hello() {
    return (
        <div>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
            <h1>Hello there!</h1>
        </div>
    );
}
//functional component are used for simpler(or static output)
ReactDOM.render(<Hello/>, document.getElementById('root'));