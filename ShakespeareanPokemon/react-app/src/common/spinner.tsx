import { FunctionComponent } from 'react';
import { Spinner as FluentUISpinner, SpinnerSize } from '@fluentui/react';

type SpinnerComponentProps = {
    message: string
}

const Spinner: FunctionComponent<SpinnerComponentProps> = ({ message }) => {
    return (
        <div className="w-full fixed items-center justify-center" style={{ height: '50vh', zIndex: 100, bottom: 0 }}>
            <FluentUISpinner size={SpinnerSize.large} label={message} style={{color: 'black', fontWeight: 'bold'}}/>
        </div>
    )
}

export default Spinner;