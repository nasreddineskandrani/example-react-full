import * as React from 'react';

// https://stackoverflow.com/questions/47057715/lazy-loading-routes-in-react-with-typescript-asynccomponent

interface AsyncComponentState {
    Component: string;
}

export function asyncComponent(getComponent: Function)  {
    class AsyncComponent extends React.Component<{}, AsyncComponentState> {

        constructor(props: React.Props<AsyncComponentState>) {
            super(props);

            this.state = {
                Component: ''
            };
        }

        componentDidMount() {
            getComponent().then((component: string) => {
                this.setState({
                    Component: component
                });
            });
        }

        render() {
            const C = this.state.Component;
            return C ? <C {...this.props}/> : '';
        }
    }
    return AsyncComponent;
}