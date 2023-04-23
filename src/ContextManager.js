import React, {createContext} from 'react';

export const myContext = createContext();
export const TheConsumer = myContext.Consumer;
const ContextTheProvider = myContext.Provider;

export class TheProvider extends React.Component {
  state = {
    companyName: 'Heavenly',
    subscribe: {
      isLoading: false,
    }
  }

  subscribeFormHandler = () => {
    this.setState({
      subscribe: {
        isLoading: true,
      }
    })
  }

  render() {
    return (
      <ContextTheProvider value={{
        state: this.state,
        subscribeFormHandler: this.subscribeFormHandler
      }}>
        {this.props.children}
      </ContextTheProvider>
    )
  }

};