class Hello extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.isFunny);

    const props = this.props;
    let bangs = "!".repeat(this.props.bangs);
    return(
      <div>
        <p>
          Hello {props.to} from {props.from} {bangs}
        </p>
        <img src={props.img} />
      </div>
    );
  }
}