import * as React from 'react';
import SplitText from 'react-pose-text';

namespace Header {
    export interface Props {
    }

    export interface State {
        charPoses: {
            enter: { opacity: 1 },
            exit: { opacity: 0 }
        };
    }
}

export default class Header extends React.Component<Header.Props, Header.State> {

    public render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <SplitText>Welcome to React TypeScript</SplitText>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>The color of this page is</p>
                        <button className="btn-primary rounded">Test</button>
                    </div>
                </div>
            </div>
        );
    }
}
