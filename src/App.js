import React, {Component} from "react";
import EventPractice2 from "./eventHandling/EventPactice2";
import EventPractice from "./eventHandling/EventPractice";
import ValidationSample from "./refMapping/ValidationSample";
import ScrollBox from "./refMapping/ScrollBox";
import IterationSample from "./iteration/IterationSample";
import LifeCycleSample from "./lifecycleSample/LifeCycleSample";
import ErrorBoundary from "./lifecycleSample/ErrorBoundary";
import Counter from "./reacthook/useState/Counter";
import Info from "./reacthook/useState/Info";


function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{

  state = {
    color : '#000000',
    visible : false,
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor()
    })
  }

  render(){
  return (
    <>
      <div>
        <EventPractice />
      </div>
      <div>
        <EventPractice2 />
      </div>
      <div>
        <ValidationSample />
      </div>
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
      <div>
        <IterationSample />
      </div>
      <div>
        <h1>라이프사이클샘플</h1>
        <button onClick={this.handleClick}> 랜덤 색상 </button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <button
          onClick={() => {
            this.setState({
              visible : !this.state.visible
            });
          }}
        >
          {this.visible ? '숨기기' : '보이기'}
        </button>
      </div>
    </>
  );
}
}

export default App;
