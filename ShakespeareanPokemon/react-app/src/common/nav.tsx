import { IconButton, DefaultButton } from '@fluentui/react/lib/Button';
import { withRouter, Link } from "react-router-dom";
import { IContextualMenuProps, Callout } from '@fluentui/react';
import { Component } from 'react';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from '../store/store';
import { Nav as Navigation, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

interface NavProps {

}


const mapStateToProps = (state: RootState) => ({

})

const mapDispatch = {

}

const connector = connect(mapStateToProps, mapDispatch);

type NavCombinedProps = ConnectedProps<typeof connector>;



class Nav extends Component<NavCombinedProps> {

    state = {
        
    }

    componentDidMount() {
          
    }

    componentDidUpdate(prevProps: any) {

    }

    render() {
        
        return (
            <>
                <div className="flex p-3 pl-3 pr-8 navTop" >
                   
                    <div>
                        <a href="/"><img src="/logo.png" alt="Logo" className="pt-2 object-contain h-7" /></a>
                    </div>
                    
                </div>
                
            </>
        );
    }
}

export default connector(Nav);