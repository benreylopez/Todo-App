
class Note extends React.Component {
  
	render() {
		return (
      
      <div className="note" onClick={this.props.deleteMethod}>
        {this.props.text}
      </div>

		)
	}
}

export default Note;