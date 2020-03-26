class Hello extends React.Component {
  render() {
    console.log(this.props.to);
    console.log(this.props.from);
    const props = this.props;
    return(
      <div>
        <p>
          Hello {props.to} from {props.from}
        </p>
      </div>
    );
  }
}