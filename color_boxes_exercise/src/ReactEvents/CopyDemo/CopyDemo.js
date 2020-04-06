import React, { Component } from 'react';

class CopyDemo extends Component {

  handleCopy() {
    alert('Do not me copy!');
  }

  render() {
    return(
      <div className='BoxContainer'>
        <h3>Try Coping Some of this Text: </h3>
        <section 
          style={{width: '300', display: 'inline-block'}} 
          onCopy={this.handleCopy}>
            Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities).
        </section>
      </div>
    );
  }
}

export default CopyDemo;