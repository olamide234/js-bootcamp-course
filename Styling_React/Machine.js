class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const winner = (s1 ===s2) && (s2 === s3)
        return (
            <div className="Machine">
                {/* <label htmlfor="textInput"></label> */}
                <p style={{fontSize: '30px', backgroundColor: 'purple'}}>{s1}{s2}{s3}</p>
                <p className={winner? 'Machine-win': 'lose'}>
                    {winner ? "Winner!" : "Loser!"}
                </p>
            </div>
        )
    }
}